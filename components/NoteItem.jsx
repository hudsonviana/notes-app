import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function NoteItem({ note, onDelete }) {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{note.text}</Text>

      <TouchableOpacity onPress={() => onDelete(note.$id)}>
        <Text style={styles.delete}>❌</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  noteText: {
    fontSize: 18,
  },
  delete: {
    fontSize: 18,
    color: 'red',
  },
})

//ID: notes-project-rnapp
//Package name: com.notes.app.android

// EXPO_PUBLIC_APPWRITE_PROJECT_ID=notes-project-rnapp
// EXPO_PUBLIC_APPWRITE_ENDPOINT=https://nyc.cloud.appwrite.io/v1

// notes-db-rnapp
