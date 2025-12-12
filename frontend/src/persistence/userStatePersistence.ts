import { storageAdapter } from './storageAdapter'
import { colors } from '../tokens'

export interface UserUpgrades {
  readonly memoryCapacity: number
  readonly processingSpeed: number
  readonly neuralLinks: number
}

export interface UserTheme {
  readonly colorScheme: 'cyber' | 'neon' | 'minimal'
  readonly accentColor: string
}

export interface GameHistory {
  readonly id: string
  readonly timestamp: Date
  readonly score: number
  readonly level: number
  readonly duration: number
}

export interface UserState {
  readonly version: number
  readonly userId: string
  readonly shards: number
  readonly upgrades: UserUpgrades
  readonly theme: UserTheme
  readonly history: readonly GameHistory[]
}

const STORAGE_KEY = 'cyber-nback-user-state'
const CURRENT_VERSION = 1

interface UserStateV1 extends UserState {
  readonly version: 1
}


const defaultUserState = (userId: string): UserStateV1 => ({
  version: CURRENT_VERSION,
  userId,
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
})

const migrateUserState = (rawState: unknown): UserState => {
  if (!rawState || typeof rawState !== 'object') {
    throw new Error('Invalid user state: not an object')
  }

  const state = rawState as Record<string, unknown>

  if (typeof state.version !== 'number') {
    throw new Error('Invalid user state: missing or invalid version')
  }

  if (typeof state.userId !== 'string') {
    throw new Error('Invalid user state: missing or invalid userId')
  }

  const version = state.version

  if (version === CURRENT_VERSION) {
    // Current version - validate structure
    return validateCurrentVersion(state)
  } else if (version < CURRENT_VERSION) {
    // Future migrations would go here
    throw new Error(`Unsupported user state version: ${version}`)
  } else {
    throw new Error(`Future user state version detected: ${version}. App update required.`)
  }
}

const validateCurrentVersion = (state: Record<string, unknown>): UserStateV1 => {
  const requiredFields = ['version', 'userId', 'shards', 'upgrades', 'theme', 'history']

  for (const field of requiredFields) {
    if (!(field in state)) {
      throw new Error(`Invalid user state: missing required field '${field}'`)
    }
  }

  if (typeof state.shards !== 'number' || state.shards < 0) {
    throw new Error('Invalid user state: shards must be a non-negative number')
  }

  if (typeof state.upgrades !== 'object' || !state.upgrades) {
    throw new Error('Invalid user state: upgrades must be an object')
  }

  const upgrades = state.upgrades as Record<string, unknown>
  const requiredUpgradeFields = ['memoryCapacity', 'processingSpeed', 'neuralLinks']

  for (const field of requiredUpgradeFields) {
    if (typeof upgrades[field] !== 'number' || upgrades[field] < 1) {
      throw new Error(`Invalid user state: upgrade '${field}' must be a number >= 1`)
    }
  }

  if (typeof state.theme !== 'object' || !state.theme) {
    throw new Error('Invalid user state: theme must be an object')
  }

  const theme = state.theme as Record<string, unknown>
  if (typeof theme.colorScheme !== 'string' ||
      !['cyber', 'neon', 'minimal'].includes(theme.colorScheme)) {
    throw new Error('Invalid user state: theme.colorScheme must be cyber, neon, or minimal')
  }

  if (typeof theme.accentColor !== 'string') {
    throw new Error('Invalid user state: theme.accentColor must be a string')
  }

  if (!Array.isArray(state.history)) {
    throw new Error('Invalid user state: history must be an array')
  }

  // Validate history entries
  for (const entry of state.history) {
    if (typeof entry !== 'object' || !entry) {
      throw new Error('Invalid user state: history entries must be objects')
    }

    const historyEntry = entry as Record<string, unknown>
    const requiredHistoryFields = ['id', 'timestamp', 'score', 'level', 'duration']

    for (const field of requiredHistoryFields) {
      if (!(field in historyEntry)) {
        throw new Error(`Invalid user state: history entry missing '${field}'`)
      }
    }

    if (typeof historyEntry.id !== 'string') {
      throw new Error('Invalid user state: history entry id must be a string')
    }

    if (typeof historyEntry.timestamp !== 'string') {
      throw new Error('Invalid user state: history entry timestamp must be a string')
    }

    if (typeof historyEntry.score !== 'number') {
      throw new Error('Invalid user state: history entry score must be a number')
    }

    if (typeof historyEntry.level !== 'number') {
      throw new Error('Invalid user state: history entry level must be a number')
    }

    if (typeof historyEntry.duration !== 'number') {
      throw new Error('Invalid user state: history entry duration must be a number')
    }
  }

  return {
    version: state.version as 1,
    userId: state.userId as string,
    shards: state.shards as number,
    upgrades: {
      memoryCapacity: upgrades.memoryCapacity as number,
      processingSpeed: upgrades.processingSpeed as number,
      neuralLinks: upgrades.neuralLinks as number,
    },
    theme: {
      colorScheme: theme.colorScheme as UserTheme['colorScheme'],
      accentColor: theme.accentColor as string,
    },
    history: (state.history as unknown[]).map((entry: unknown) => ({
      id: (entry as Record<string, unknown>).id as string,
      timestamp: new Date((entry as Record<string, unknown>).timestamp as string),
      score: (entry as Record<string, unknown>).score as number,
      level: (entry as Record<string, unknown>).level as number,
      duration: (entry as Record<string, unknown>).duration as number,
    })),
  }
}

export const loadUserState = async (userId: string): Promise<UserState> => {
  try {
    const stored = await storageAdapter.getItem(STORAGE_KEY)
    if (!stored) {
      return defaultUserState(userId)
    }

    const parsed = JSON.parse(stored)
    const migrated = migrateUserState(parsed)

    // Ensure the loaded state matches the requested userId
    if (migrated.userId !== userId) {
      return defaultUserState(userId)
    }

    return migrated
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error('Corrupted user state data: invalid JSON')
    }
    throw error
  }
}

export const saveUserState = async (state: UserState): Promise<void> => {
  const serializableState = {
    ...state,
    history: state.history.map(entry => ({
      ...entry,
      timestamp: entry.timestamp.toISOString(),
    })),
  }

  await storageAdapter.setItem(STORAGE_KEY, JSON.stringify(serializableState))
}

export const clearUserState = async (): Promise<void> => {
  await storageAdapter.removeItem(STORAGE_KEY)
}