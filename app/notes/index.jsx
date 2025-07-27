import NoteList from '@/components/NoteList'
import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AddNoteModal from '../../components/AddNoteModal'

export default function NoteScreen() {
  const [notes, setNotes] = useState([
    { id: '1', text: 'Nota um' },
    { id: '2', text: 'Nota dois' },
    { id: '3', text: 'Nota três' },
  ])
  const [modalVisible, setModalVisible] = useState(false)
  const [newNote, setNewNote] = useState('')

  // Add new note
  function addNote() {
    if (newNote.trim() === '') return

    const newId = Date.now().toString()

    setNotes((prevNotes) => [...prevNotes, { id: newId, text: newNote }])

    setNewNote('')
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      {/* Note list */}
      <NoteList notes={notes} />

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
})
