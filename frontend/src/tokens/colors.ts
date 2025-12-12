export const colors = {
  bg: {
    canvas: '#000000'
  },
  accent: {
    green: {
      500: '#22c55e',
      900: '#14532d'
    },
    yellow: {
      500: '#eab308'
    },
    red: {
      500: '#ef4444'
    }
  },
  text: {
    primary: 'rgba(34,197,94,0.85)',
    muted: 'rgba(34,197,94,0.55)'
  },
  border: {
    subtle: 'rgba(34,197,94,0.30)'
  },
  surface: {
    panel: 'rgba(0,0,0,0.80)',
    emphasis: 'rgba(34,197,94,0.1)'
  },
  overlay: {
    scanlines: 'rgba(34,197,94,0.02)',
    flicker: 'rgba(0,0,0,0.1)'
  },
  common: {
    transparent: 'transparent'
  }
} as const

export type Colors = typeof colors