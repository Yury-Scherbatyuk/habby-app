import { StyleSheet, View, Text, Pressable, Animated } from 'react-native'
import { useFonts } from 'expo-font'
import { useState } from 'react'
import CoreIcon from './CoreIcon'
import { CoreIcons } from '../constants'
import { NavigationProp } from '@react-navigation/native'

interface TopBarProps {
  isModalVisible: boolean
  handleSettingsClick: () => void
  navigation: NavigationProp<any, any>
}

export default function TopBar({
  isModalVisible,
  handleSettingsClick,
  navigation,
}: TopBarProps) {
  const [settingsGearAnimation] = useState(new Animated.Value(0))
  const [plusIconAnimation] = useState(new Animated.Value(0))
  const [fontsLoaded] = useFonts({
    'Outfit-Bold': require('../assets/fonts/Outfit-Bold.ttf'),
  })
  const gearAnimationDuration = 500
  const plusAnimationDuration = 250

  if (!fontsLoaded) {
    return <Text>noooo</Text>
  }

  const animateSettingsGear = () => {
    Animated.timing(settingsGearAnimation, {
      toValue: 1,
      duration: gearAnimationDuration,
      useNativeDriver: true,
    }).start(() => {
      // set initial state after finish
      settingsGearAnimation.setValue(0)
    })
    handleSettingsClick()
  }

  const interpolatedGearAnimation = settingsGearAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  })

  const animatePlusIcon = () => {
    Animated.timing(plusIconAnimation, {
      toValue: 1,
      duration: plusAnimationDuration,
      useNativeDriver: true,
    }).start(() => {
      // plusIconAnimation.setValue(0)
      Animated.timing(plusIconAnimation, {
        toValue: 0,
        duration: plusAnimationDuration,
        useNativeDriver: true,
      }).start()
    })
    navigation.navigate('Edit')
  }

  const interpolatedPlusAnimation = plusIconAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.15],
  })

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ rotate: interpolatedGearAnimation }],
        }}
      >
        <Pressable onPress={animateSettingsGear}>
          {isModalVisible ? (
            <CoreIcon icon={CoreIcons.Cross} size={34} color="red" />
          ) : (
            <CoreIcon icon={CoreIcons.Settings} size={34} color="white" />
          )}
        </Pressable>
      </Animated.View>
      <Text style={styles.heading}>Habby</Text>
      <View style={styles.space} />
      <Animated.View
        style={{
          transform: [{ scale: interpolatedPlusAnimation }],
        }}
      >
        <Pressable onPress={animatePlusIcon}>
          <CoreIcon icon={CoreIcons.Plus} size={31} color="white" />
        </Pressable>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '95%',
  },
  heading: {
    color: 'white',
    fontFamily: 'Outfit-Bold',
    fontSize: 25,
  },
  space: {
    width: '45%',
  },
})
