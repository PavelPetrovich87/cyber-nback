import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { colors } from '../tokens'
import {
  UserState,
  UserTheme,
  GameHistory,
  loadUserState,
  saveUserState,
} from '../persistence/userStatePersistence'

 
interface UserStore extends UserState {
  // Actions


  initialize: (_userId: string) => Promise<void>


  addShards: (_amount: number) => void


  spendShards: (_amount: number) => void
  upgradeMemoryCapacity: () => void
  upgradeProcessingSpeed: () => void
  upgradeNeuralLinks: () => void


  setTheme: (_theme: UserTheme) => void


  addGameHistory: (_game: Omit<GameHistory, 'id'>) => void
  clearHistory: () => void
}
 

const UPGRADE_COSTS = {
  memoryCapacity: 10,
  processingSpeed: 15,
  neuralLinks: 20,
} as const

export const useUserStore = create<UserStore>()(
  subscribeWithSelector((set, _get) => ({
    // Initial empty state
    version: 1,
    userId: '',
    shards: 0,
    upgrades: {
      memoryCapacity: 1,
      processingSpeed: 1,
      neuralLinks: 1,
    },
  theme: {
    colorScheme: 'cyber',
    accentColor: colors.accent.green[500],
  },
    history: [],

    initialize: async (_userId: string) => {
      const persistedState = await loadUserState(_userId)
      set(persistedState)
    },

    addShards: (_amount: number) => {
      if (_amount <= 0) {
        throw new Error('Cannot add negative or zero shards')
      }

      set((state) => {
        const newState = {
          ...state,
          shards: state.shards + _amount,
        }
        // Persist asynchronously
        saveUserState(newState).catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Failed to persist shards:', error)
        })
        return newState
      })
    },

    spendShards: (_amount: number) => {
      if (_amount <= 0) {
        throw new Error('Cannot spend negative or zero shards')
      }

      set((state) => {
        if (state.shards < _amount) {
          throw new Error('Insufficient shards')
        }

        const newState = {
          ...state,
          shards: state.shards - _amount,
        }
        // Persist asynchronously
        saveUserState(newState).catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Failed to persist shards:', error)
        })
        return newState
      })
    },

    upgradeMemoryCapacity: () => {
      set((state) => {
        const currentLevel = state.upgrades.memoryCapacity
        const cost = UPGRADE_COSTS.memoryCapacity * currentLevel

        if (state.shards < cost) {
          throw new Error('Insufficient shards for memory capacity upgrade')
        }

        const newState = {
          ...state,
          shards: state.shards - cost,
          upgrades: {
            ...state.upgrades,
            memoryCapacity: currentLevel + 1,
          },
        }
        // Persist asynchronously
        saveUserState(newState).catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Failed to persist upgrade:', error)
        })
        return newState
      })
    },

    upgradeProcessingSpeed: () => {
      set((state) => {
        const currentLevel = state.upgrades.processingSpeed
        const cost = UPGRADE_COSTS.processingSpeed * currentLevel

        if (state.shards < cost) {
          throw new Error('Insufficient shards for processing speed upgrade')
        }

        const newState = {
          ...state,
          shards: state.shards - cost,
          upgrades: {
            ...state.upgrades,
            processingSpeed: currentLevel + 1,
          },
        }
        // Persist asynchronously
        saveUserState(newState).catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Failed to persist upgrade:', error)
        })
        return newState
      })
    },

    upgradeNeuralLinks: () => {
      set((state) => {
        const currentLevel = state.upgrades.neuralLinks
        const cost = UPGRADE_COSTS.neuralLinks * currentLevel

        if (state.shards < cost) {
          throw new Error('Insufficient shards for neural links upgrade')
        }

        const newState = {
          ...state,
          shards: state.shards - cost,
          upgrades: {
            ...state.upgrades,
            neuralLinks: currentLevel + 1,
          },
        }
        // Persist asynchronously
        saveUserState(newState).catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Failed to persist upgrade:', error)
        })
        return newState
      })
    },

    setTheme: (_theme: UserTheme) => {
      set((state) => {
        const newState = {
          ...state,
          theme: _theme,
        }
        // Persist asynchronously
        saveUserState(newState).catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Failed to persist theme:', error)
        })
        return newState
      })
    },

    addGameHistory: (_game: Omit<GameHistory, 'id'>) => {
      const id = `game-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

      set((state) => {
        const newHistory = [
          { ..._game, id },
          ...state.history.slice(0, 99), // Keep only last 100 games
        ]

        const newState = {
          ...state,
          history: newHistory,
        }
        // Persist asynchronously
        saveUserState(newState).catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Failed to persist history:', error)
        })
        return newState
      })
    },

    clearHistory: () => {
      set((state) => {
        const newState = {
          ...state,
          history: [],
        }
        // Persist asynchronously
        saveUserState(newState).catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Failed to persist history:', error)
        })
        return newState
      })
    },
  }))
)