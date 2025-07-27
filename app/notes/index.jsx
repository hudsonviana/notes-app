import AddNoteModal from '@/components/AddNoteModal'
import NoteList from '@/components/NoteList'
import noteService from '@/services/noteService'
import { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export default function NoteScreen() {
  const [notes, setNotes] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchNotes()
  }, [])

  async function fetchNotes() {
    setLoading(true)
    const response = await noteService.getNotes()

    if (response.error) {
      setError(response.error)
      Alert.alert('Erro:', response.error)
    } else {
      setNotes(response.data)
      setError(null)
    }

    setLoading(false)
  }

  // Add new note
  async function addNote() {
    if (newNote.trim() === '') return

    // const newId = Date.now().toString()
    // setNotes((prevNotes) => [...prevNotes, { id: newId, text: newNote }])
    const response = await noteService.addNote(newNote)

    if (response.error) {
      setError(response.error)
      Alert.alert('Erro:', response.error)
    } else {
      setNotes([...notes, response.data])
      setError(null)
    }

    setNewNote('')
    setModalVisible(false)
  }

  // Delete note
  async function deleteNote(id) {
    Alert.alert('Excluir nota', 'Está certo disso?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          const response = await noteService.deleteNote(id)

          if (response.error) {
            setError(response.error)
            Alert.alert('Erro:', response.error)
          } else {
            setNotes(notes.filter((note) => note.$id !== id))
            setError(null)
          }
        },
      },
    ])
  }

  return (
    <View style={styles.container}>
      {/* Note list */}
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <>
          {error && <Text style={styles.errorText}>{error}</Text>}
          <NoteList notes={notes} onDelete={deleteNote} />
        </>
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Nova nota</Text>
      </TouchableOpacity>

      {/* Modal */}
      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
  },
})
