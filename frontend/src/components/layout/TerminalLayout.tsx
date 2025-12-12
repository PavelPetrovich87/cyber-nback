import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import { colors, spacing } from '../../tokens'

interface TerminalLayoutProps {
  children: React.ReactNode
  header?: React.ReactNode
  showScanlines?: boolean
  showFlicker?: boolean
}

export function TerminalLayout({
  children,
  header,
  showScanlines = true,
  showFlicker = true
}: TerminalLayoutProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      {header && <View style={styles.header}>{header}</View>}
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
  header: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[2],
    paddingBottom: spacing[2],
    borderBottomWidth: 1,
    borderBottomColor: colors.border.subtle,
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