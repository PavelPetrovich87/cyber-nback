import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useUserStore } from '../../stores/userStore'
import { colors, typography } from '../../tokens'

export function GameHeader() {
  const shards = useUserStore((state) => state.shards)

  return (
    <View style={styles.header}>
      <Text style={styles.shardsText} testID="shards-balance">
        Shards: {shards}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-end',
  },
  shardsText: {
    fontFamily: typography.fontFamily.mono,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.normal,
    color: colors.text.primary,
  },
})