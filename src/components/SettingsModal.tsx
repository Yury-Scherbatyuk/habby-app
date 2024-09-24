import React, { useState, useEffect } from 'react'
import { View, Animated, Text, StyleSheet } from 'react-native'

interface SettingsModalProps {
  settingsVisible: boolean
}

export default function SettingsModal({ settingsVisible }: SettingsModalProps) {
  const [modalAnimation] = useState(new Animated.Value(0))

  useEffect(() => {
    animateModal()
  }, [settingsVisible])

  const animateModal = () => {
    Animated.timing(modalAnimation, {
      toValue: settingsVisible ? 0 : 1,
      duration: 270,
      useNativeDriver: true,
    }).start()
  }

  const interpolatedModalAnimationY = modalAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 800],
  })

  return (
    <View style={[styles.container, { flex: 1 }]}>
      <Animated.View
        style={[
          styles.modal,
          { transform: [{ translateY: interpolatedModalAnimationY }] },
        ]}
      >
        <Text style={{ color: 'white' }}>Modal Content</Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  modal: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#3b3b3b',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
})
