import React from 'react'
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native'
import { colors, spacing, radius, typography } from '../../tokens'

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps {
  variant: ButtonVariant
  size: ButtonSize
  disabled: boolean
  children: string
  onPress: () => void
  style?: ViewStyle
}

export function Button({
  variant,
  size,
  disabled,
  children,
  onPress,
  style
}: ButtonProps) {
  const buttonStyle = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    style
  ]

  const textStyle = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText
  ]

  return (
    <Pressable
      style={({ pressed }) => [
        ...buttonStyle,
        pressed && !disabled && styles.pressed
      ]}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
    >
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1
  },
  // Variants
  primary: {
    backgroundColor: colors.accent.green[500],
    borderColor: colors.accent.green[500]
  },
  secondary: {
    backgroundColor: colors.common.transparent,
    borderColor: colors.accent.green[500]
  },
  danger: {
    backgroundColor: colors.accent.red[500],
    borderColor: colors.accent.red[500]
  },
  ghost: {
    backgroundColor: colors.common.transparent,
    borderColor: colors.common.transparent
  },
  // Sizes
  sm: {
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    minHeight: 32
  },
  md: {
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    minHeight: 40
  },
  lg: {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[5],
    minHeight: 48
  },
  xl: {
    paddingVertical: spacing[5],
    paddingHorizontal: spacing[6],
    minHeight: 56
  },
  // States
  disabled: {
    opacity: 0.5
  },
  pressed: {
    transform: [{ scale: 0.98 }],
    shadowColor: colors.accent.green[500],
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4
  },
  // Text styles
  text: {
    fontFamily: typography.fontFamily.mono,
    fontWeight: typography.fontWeight.normal,
    textAlign: 'center'
  },
  primaryText: {
    color: colors.bg.canvas
  },
  secondaryText: {
    color: colors.accent.green[500]
  },
  dangerText: {
    color: colors.bg.canvas
  },
  ghostText: {
    color: colors.text.primary
  },
  smText: {
    fontSize: typography.fontSize.sm
  },
  mdText: {
    fontSize: typography.fontSize.md
  },
  lgText: {
    fontSize: typography.fontSize.lg
  },
  xlText: {
    fontSize: typography.fontSize.xl
  },
  disabledText: {
    opacity: 0.7
  }
})