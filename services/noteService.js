import { ID } from 'react-native-appwrite'
import databaseService from './databaseService'

const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID

const noteService = {
  // Get Notes
  async getNotes() {
    const response = await databaseService.listDocuments(dbId, colId)

    if (response.error) {
      return { error: response.error }
    }

    return { data: response }
  },

  // Add new Note
  async addNote(text) {
    if (!text) {
      return { error: 'Texto não pode ser vazio' }
    }

    const data = {
      text: text,
      createdAt: new Date().toISOString(),
    }

    const response = await databaseService.createDocument(
      dbId,
      colId,
      data,
      ID.unique()
    )

    if (response.error) {
      return { error: response.error }
    }

    return { data: response }
  },

  // Delete Note
  async deleteNote(id) {
    const response = await databaseService.deleteDocument(dbId, colId, id)

    if (response.error) {
      return { error: response.error }
    }

    return { success: true }
  },
}

export default noteService
