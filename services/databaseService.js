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

  // Create document
  async createDocument(dbId, colId, data, id = null) {
    try {
      return await database.createDocument(dbId, colId, id || undefined, data)
    } catch (error) {
      console.error('Erro ao criar documento:', error.message)
      return { error: error.message }
    }
  },

  // Delete document
  async deleteDocument(dbId, colId, id) {
    try {
      await database.deleteDocument(dbId, colId, id)
      return { success: true }
    } catch (error) {
      console.error('Erro ao deletar documento:', error.message)
      return { error: error.message }
    }
  },

  // Update document
  async updateDocument(dbId, colId, id, data) {
    try {
      return await database.updateDocument(dbId, colId, id, data)
    } catch (error) {
      console.error('Erro ao atualizar documento:', error.message)
      return { error: error.message }
    }
  },
}

export default databaseService
