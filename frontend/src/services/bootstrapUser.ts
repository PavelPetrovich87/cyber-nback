import { useUserStore } from '../stores/userStore'
import { Platform } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { openDB } from 'idb'

const CLIENT_ID_KEY = 'cyber-nback-client-id'
const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL || 'http://localhost:3000'

interface BootstrapResponse {
  userId: string
}

const generateClientId = (): string => {
  return `client-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

const getStoredClientId = async (): Promise<string | null> => {
  if (Platform.OS === 'web') {
    try {
      const db = await openDB('cyber-nback-client', 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains('clientStore')) {
            db.createObjectStore('clientStore')
          }
        },
      })
      return db.get('clientStore', CLIENT_ID_KEY) || null
    } catch {
      return null
    }
  } else {
    return AsyncStorage.getItem(CLIENT_ID_KEY)
  }
}

const storeClientId = async (clientId: string): Promise<void> => {
  if (Platform.OS === 'web') {
    const db = await openDB('cyber-nback-client', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('clientStore')) {
          db.createObjectStore('clientStore')
        }
      },
    })
    await db.put('clientStore', clientId, CLIENT_ID_KEY)
  } else {
    await AsyncStorage.setItem(CLIENT_ID_KEY, clientId)
  }
}

const bootstrapWithBackend = async (clientId: string): Promise<string> => {
  const response = await fetch(`${BACKEND_URL}/bootstrap`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ clientId }),
  })

  if (!response.ok) {
    throw new Error(`Backend bootstrap failed: ${response.status} ${response.statusText}`)
  }

  const data: BootstrapResponse = await response.json()

  if (!data.userId || typeof data.userId !== 'string') {
    throw new Error('Invalid bootstrap response: missing or invalid userId')
  }

  return data.userId
}

export const bootstrapUser = async (): Promise<void> => {
  try {
    // Try to get existing client ID
    let clientId = await getStoredClientId()

    // Generate new client ID if none exists
    if (!clientId) {
      clientId = generateClientId()
      await storeClientId(clientId)
    }

    // Bootstrap with backend to get user ID
    const userId = await bootstrapWithBackend(clientId)

    // Initialize the user store with the user ID
    await useUserStore.getState().initialize(userId)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('User bootstrap failed:', error)
    throw error
  }
}