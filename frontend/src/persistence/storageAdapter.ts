import AsyncStorage from '@react-native-async-storage/async-storage'
import { openDB, DBSchema, IDBPDatabase } from 'idb'
import { Platform } from 'react-native'

 
 
interface StorageAdapter {

  getItem: (_key: string) => Promise<string | null>

  setItem: (_key: string, _value: string) => Promise<void>

  removeItem: (_key: string) => Promise<void>
}
 

interface IndexedDBSchema extends DBSchema {
  keyValueStore: {
    key: string
    value: string
  }
}

class WebStorageAdapter implements StorageAdapter {
  private db: Promise<IDBPDatabase<IndexedDBSchema>>

  constructor() {
    this.db = openDB<IndexedDBSchema>('cyber-nback-storage', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('keyValueStore')) {
          db.createObjectStore('keyValueStore')
        }
      },
    })
  }

  async getItem(key: string): Promise<string | null> {
    const db = await this.db
    const value = await db.get('keyValueStore', key)
    return value || null
  }

  async setItem(_key: string, _value: string): Promise<void> {
    const db = await this.db
    await db.put('keyValueStore', _value, _key)
  }

  async removeItem(_key: string): Promise<void> {
    const db = await this.db
    await db.delete('keyValueStore', _key)
  }
}

class NativeStorageAdapter implements StorageAdapter {
  async getItem(_key: string): Promise<string | null> {
    return AsyncStorage.getItem(_key)
  }

  async setItem(_key: string, _value: string): Promise<void> {
    await AsyncStorage.setItem(_key, _value)
  }

  async removeItem(_key: string): Promise<void> {
    await AsyncStorage.removeItem(_key)
  }
}

const isWeb = Platform.OS === 'web'
export const storageAdapter: StorageAdapter = isWeb
  ? new WebStorageAdapter()
  : new NativeStorageAdapter()