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
import { NavigationProp, RouteProp } from '@react-navigation/native'
import HabbitFields from '../components/ManageHabbitFields'
import DateTimePicker from '@react-native-community/datetimepicker' // npm install https://github.com/react-native-datetimepicker/datetimepicker

interface PageProps {
  navigation: NavigationProp<any, any>
  route: RouteProp<any, any>
}

export default function TaskScheduler({ navigation, route }: PageProps) {
  const [fontsLoaded] = useFonts({
    'Outfit-Bold': require('../assets/fonts/Outfit-Bold.ttf'),
  })
  const [showPicker, setShowPicker] = React.useState(false)
  const [timePressed, setTimePressed] = React.useState(false)
  const [time, setTime] = React.useState(() => {
    const defaultTime = new Date()
    defaultTime.setHours(2)
    defaultTime.setMinutes(0)
    return defaultTime // Set the default time to 2:00 AM
  })
  

  const [coreSquarePressed, setCoreSquarePressed] = React.useState<{
    [key: string]: boolean
  }>({
    Mo: false,
    Tu: false,
    We: false,
    Th: false,
    Fr: false,
    Sa: false,
    Su: false,
  }) // pressable dlya dnevnyh coreSquares.
  // inactive days selector const [selectedInactiveDays, setSelectedInactiveDays] = React.useState<'week' | 'calendar'>('week')

  const formattedTime = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}` //Bez etogo time button mozhet vyvoditj vremya bez leading zeros

  const onChange = (event: any, selectedTime: any) => {
    if (event.type === 'set' && selectedTime) {
      setShowPicker(false)
      setTime(selectedTime)
      setTimePressed(true) // eto nuzhno dlya izmenenija cveta knopki pri OK
    } else {
      setShowPicker(false)
    }
  }

  const coreSquaresInteraction = (day: string) => {
    setCoreSquarePressed((prev) => ({
      ...prev,
      [day]: !prev[day], // izmenenie cveta coreSquare
    }))
  }

  const showTimePicker = () => {
    setShowPicker(true) // Show the time picker
  }

  if (!fontsLoaded) {
    return <Text>noooo</Text>
  }

  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] //Array for CoreSquares text

  const selectedDays = Object.keys(coreSquarePressed).filter(
    (day) => coreSquarePressed[day],
  )

  // funkcija dlja vozvrata date & time na predyduwij ekran
  const handleSave = () => {
    const selectedData = {
      time: formattedTime,
      days: selectedDays,
    }

    navigation.navigate({
      name: 'Edit',
      params: { data: selectedData },
      merge: true,
    })
    console.log("selectedData: ", selectedData)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View //HEADING
        style={[
          styles.navContainer,
          Platform.OS == 'android' && { marginTop: 40 },
        ]}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <CoreIcon icon={CoreIcons.Back} size={34} color="white" />
        </Pressable>

        <Text style={styles.heading}>Select Reminder</Text>

        <Pressable onPress={handleSave}>
          <CoreSquare //knopka sprava vverhu, submit dannyh i vozvrat na prowlij ekran
            color={Colors.purple}
            size={SquareSizes.Big}
            icon={CoreIcons.Tick}
            isHighlited={false}
            iconSize={30}
            iconColor={Colors.white}
          />
        </Pressable>
      </View>
      {/* Date + squares */}
      <View style={styles.viewBox}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text style={styles.heading}>
              Days
              {/* {habbitText} */}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-evenly',
          }}
        >
          {daysOfWeek.map((day, i) => (
            <Pressable onPress={() => coreSquaresInteraction(day)} key={i}>
              <CoreSquare
                color={coreSquarePressed[day] ? Colors.purple : Colors.lightGray}
                size={SquareSizes.Big}
                isHighlited={coreSquarePressed[day] ? true : false}
                icon={day}
                iconColor="white"
              />
            </Pressable>
          ))}
        </View>
      </View>
      {/* time + selector */}
      <View style={styles.viewBox}>
        <View>
          <Text style={styles.heading}>Time</Text>
        </View>

        {/*SELECTOR*/}
        <View>
          <Pressable onPress={showTimePicker} style={styles.button}>
            <Text
              style={[
                styles.buttonText,
                { color: timePressed ? Colors.purple : Colors.lightGray },
                { opacity: timePressed ? 1 : 0.3 },
              ]}
            >
              {`${formattedTime}`}
            </Text>
          </Pressable>

          {showPicker && (
            <DateTimePicker
              value={time} // Initial time value
              mode="time" // Time picker mode
              is24Hour={true} // Use 24-hour time format
              display="spinner" // Native picker UI (can be 'spinner' or 'clock')
              onChange={onChange} // Handle time change
            />
          )}
        </View>
      </View>
      {/*Inactive Days
      <View style={styles.viewBox}>

        <View>
          <Text style={styles.heading}>Inactive Days</Text>
        </View>

        <View style={styles.navContainer}>
          <Pressable onPress={() => selectInactiveDays('week')} style={[styles.button, {backgroundColor: selectedInactiveDays === "week" ? Colors.purple : Colors.lightGray}, {width: '45%'}]}>
            <Text>Week</Text>
          </Pressable>
          <Pressable onPress={() => selectInactiveDays('calendar')} style={[styles.button, {backgroundColor: selectedInactiveDays === "calendar" ? Colors.purple : Colors.lightGray}, {width: '45%'}]}>
            <Text>Calendar</Text>
          </Pressable>
        </View>
      </View>
      */}
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
    padding: 10,
  },
  space: {
    width: '30%',
  },
  viewBox: {
    //backgroundColor:'rgba(111, 207, 151, 0.15)',
    width: '92%',
    height: '18%',
    borderRadius: 13,
    paddingBottom: 10,
  },
  button: {
    height: 50,
    width: 100,
    borderColor: Colors.grayText,
    borderWidth: 1,
    marginBottom: 20,
    marginLeft: 8,
    borderRadius: 10,
    maxHeight: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.lightGray,
    fontFamily: 'Outfit-Bold',
    fontSize: 17,
  },
})
