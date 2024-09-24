import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  Pressable,
} from 'react-native'
import CoreIcon from '../components/CoreIcon'
import { CoreIcons, SquareSizes } from '../constants'
import CoreSquare from '../components/CoreSquare'
import { Colors } from '../colors'
import React from 'react'
import { useFonts } from 'expo-font'
import { NavigationProp } from '@react-navigation/native'
import HabbitFields from '../components/HabbitFields'

interface PageProps {
  navigation: NavigationProp<any, any>
}

export default function EditPage({ navigation }: PageProps) {
  const [text, onChangeText] = React.useState('Useless Text')
  const [number, onChangeNumber] = React.useState('')
  const [fontsLoaded] = useFonts({
    'Outfit-Bold': require('../assets/fonts/Outfit-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <Text>noooo</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.navContainer,
          Platform.OS == 'android' && { marginTop: 40 },
        ]}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <CoreIcon icon={CoreIcons.Back} size={34} color="white" />
        </Pressable>

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
      </View>
      <HabbitFields navigation={navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    alignItems: 'center',
  },
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
})
