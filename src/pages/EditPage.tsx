import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  Pressable,
} from 'react-native'
import { useFonts } from 'expo-font'
import CoreIcon from '../components/CoreIcon'
import { CoreIcons, SquareSizes } from '../constants'
import CoreSquare from '../components/CoreSquare'
import { Colors } from '../colors'
import { useEffect, useState} from 'react'

import { NavigationProp, RouteProp } from '@react-navigation/native'
import ManageHabbitFields from '../components/ManageHabbitFields'

interface PageProps {
  navigation: NavigationProp<any, any>
  route: RouteProp<any, any>
}

export default function EditPage({ navigation, route }: PageProps) {
  const [text, onChangeText] = useState('Useless Text')
  const [number, onChangeNumber] = useState('')

  const [reminderData, setReminderData] = useState<{
    time: string
    days: string[]
  } | null>(null)

  const [fontsLoaded] = useFonts({
    'Outfit-Bold': require('../assets/fonts/Outfit-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <Text>noooo</Text>
  }

  useEffect(() => {
    if (route.params?.data) {
      setReminderData(route.params.data)
    }
  }, [route.params?.data]);

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
      <ManageHabbitFields navigation={navigation} reminderData={reminderData} />
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
