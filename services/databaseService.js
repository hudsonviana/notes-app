import { database } from './appwrite'

const databaseService = {
  // List documents
  async listDocuments(dbId, colId) {
    try {
      const response = await database.listDocuments(dbId, colId)
      return response.documents || []
    } catch (error) {
      console.error('Erro ao fazer fetch de documents:', error.message)
      return { error: error.message }
    }
  },

  // Create documents
  async createDocument(dbId, colId, data, id = null) {
    try {
      return await database.createDocument(dbId, colId, id || undefined, data)
    } catch (error) {
      console.error('Erro ao criar documento:', error.message)
      return { error: error.message }
    }
  },
}

export default databaseService
