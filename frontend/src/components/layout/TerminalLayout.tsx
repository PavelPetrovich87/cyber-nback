import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import { colors, spacing } from '../../tokens'

interface TerminalLayoutProps {
  children: React.ReactNode
  showScanlines?: boolean
  showFlicker?: boolean
}

export function TerminalLayout({
  children,
  showScanlines = true,
  showFlicker = true
}: TerminalLayoutProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        {children}
      </View>
      <View style={styles.overlayContainer} pointerEvents="none">
        {showScanlines && <View style={styles.scanlines} />}
        {showFlicker && <View style={styles.flicker} />}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.bg.canvas
  },
  content: {
    flex: 1,
    padding: spacing[4]
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    pointerEvents: 'none'
  },
  scanlines: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.overlay.scanlines,
    opacity: 0.3
  },
  flicker: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.overlay.flicker,
    opacity: 0.1
  }
})