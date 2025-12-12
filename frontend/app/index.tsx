import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { TerminalLayout } from '../src/components/layout'
import { Card, Button } from '../src/components/primitives'
import { colors, typography, spacing } from '../src/tokens'

export default function Index() {
  return (
    <TerminalLayout>
      <View style={styles.container}>
        <Card variant="emphasis">
          <Text style={styles.title}>Cyber N-Back</Text>
          <Text style={styles.subtitle}>
            Neural training through dual-stream attention
          </Text>
        </Card>

        <View style={styles.buttonContainer}>
          <Button
            variant="primary"
            size="xl"
            onPress={() => {
              // TODO: Navigate to game screen
            }}
          >
            Start Breach
          </Button>

          <View style={styles.secondaryButtons}>
            <Button
              variant="secondary"
              size="lg"
              onPress={() => {
                // TODO: Navigate to store screen
              }}
            >
              Hardware Store
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onPress={() => {
                // TODO: Navigate to ranking screen
              }}
            >
              Global Ranking
            </Button>
          </View>
        </View>
      </View>
      <StatusBar style="light" />
    </TerminalLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontFamily: typography.fontFamily.mono,
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: spacing[3]
  },
  subtitle: {
    fontFamily: typography.fontFamily.mono,
    fontSize: typography.fontSize.md,
    color: colors.text.muted,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: spacing[6]
  },
  secondaryButtons: {
    marginTop: spacing[4],
    gap: spacing[3]
  }
})

