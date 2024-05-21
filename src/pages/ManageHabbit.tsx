import { View, Animated, Text, StyleSheet, TextInput } from 'react-native'
import CoreIcon from '../components/CoreIcon'
import { CoreIcons, SquareSizes } from '../constants'
import CoreSquare from '../components/CoreSquare'
import { Colors } from '../colors'
import React from 'react'
import { useFonts } from 'expo-font'

export default function ManageHabbit() {
  const [text, onChangeText] = React.useState('Useless Text')
  const [number, onChangeNumber] = React.useState('')
  const [fontsLoaded] = useFonts({
    'Outfit-Bold': require('../assets/fonts/Outfit-Bold.ttf'),
  })
  return (
    <View>
      <View style={styles.navContainer}>
        <CoreIcon icon={CoreIcons.Back} size={34} color="white" />
        <Text style={styles.heading}>New Habbit</Text>
        {/* <View style={styles.space} /> */}
        <CoreSquare
          color={Colors.green.bright}
          size={SquareSizes.Big}
          icon={CoreIcons.Tick}
          isHighlited={false}
          iconSize={30}
          iconColor={Colors.white}
        />
        {/* <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        /> */}
        {/* <CoreIcon icon={CoreIcons.Back} size={34} color="white" /> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navContainer: {
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
    width: '30%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
