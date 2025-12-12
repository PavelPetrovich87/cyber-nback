export const typography = {
  fontFamily: {
    mono: 'monospace'
  },
  fontSize: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 20,
    '2xl': 24,
    '3xl': 30
  },
  fontWeight: {
    normal: '400',
    bold: '700'
  }
} as const

export type Typography = typeof typography