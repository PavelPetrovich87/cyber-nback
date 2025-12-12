import React from 'react'
import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import { colors, spacing, radius, typography } from '../../tokens'

type CardVariant = 'default' | 'emphasis' | 'listRow'

interface CardProps {
  variant?: CardVariant
  children: React.ReactNode
  header?: string
  style?: ViewStyle
}

export function Card({
  variant = 'default',
  children,
  header,
  style
}: CardProps) {
  const cardStyle = [styles.card, styles[variant], style]

  return (
    <View style={cardStyle}>
      {header && (
        <Text style={styles.header}>{header}</Text>
      )}
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface.panel,
    borderWidth: 1,
    borderColor: colors.border.subtle,
    borderRadius: radius.md,
    padding: spacing[4]
  },
  default: {},
  emphasis: {
    borderColor: colors.accent.green[500],
    backgroundColor: colors.surface.emphasis
  },
  listRow: {
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    marginVertical: spacing[1]
  },
  header: {
    fontFamily: typography.fontFamily.mono,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing[3]
  }
})