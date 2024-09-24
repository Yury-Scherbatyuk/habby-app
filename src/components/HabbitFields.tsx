import { useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import {
  TextInput,
  View,
  StyleSheet,
  Button,
  Text,
  Pressable,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../colors'
import { NavigationProp } from '@react-navigation/native'

interface HabbitFieldsProps {
  navigation: NavigationProp<any, any>
}

type Inputs = {
  example: string
  exampleRequired: string
}

export default function HabbitFields({ navigation }: HabbitFieldsProps) {
  const [descriptionHeight, setDescriptionHeight] = useState(0)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [submittedData, setSubmittedData] = useState(null)

  const onSubmit = (data: any) => {
    // Simulate form submission
    console.log('Submitted Data:', data)
    setSubmittedData(data)
  }

  const [reminderData, setReminderData] = useState<{
    time: string
    days: string[]
  } | null>(null)

  return (
    <View style={{ width: '100%' }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Habbit Name</Text>
        <Controller
          control={control}
          name="habbitName"
          rules={{ required: 'This field is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize={'characters'}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Sample Name..."
              placeholderTextColor={Colors.lightGray}
            />
          )}
        />
        {errors.firstName && (
          <Text style={styles.errorText}>Error Habbit Name</Text>
        )}

        <Text style={styles.heading}>Habbit Description</Text>
        <Controller
          control={control}
          name="habbitDescription"
          rules={{ required: 'This field is required' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[
                styles.input,
                { height: Math.max(50, descriptionHeight) },
              ]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Sample Description..."
              placeholderTextColor={Colors.lightGray}
              multiline={true}
              onContentSizeChange={(event) =>
                setDescriptionHeight(event.nativeEvent.contentSize.height)
              }
            />
          )}
        />
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate('TaskScheduler', {
              onGoBack: (data: { time: string; days: string[] }) => {
                // Handle the data returned from TaskScheduler
                console.log('Data from TaskScheduler:', data)
                setReminderData(data)
              },
            })
          }
        >
          {(!reminderData || reminderData.days.length === 0) && (
            <Text>Select Reminder</Text>
          )}
          {reminderData && reminderData.days.length > 0 && (
            <View>
              <Text style={{ color: 'yellow' }}>
                {reminderData.time} | {reminderData.days.join(', ')}
              </Text>
            </View>
          )}
        </Pressable>
        {errors.lastName && (
          <Text style={styles.errorText}>Error Habbit Description</Text>
        )}
        {/* <Button title="Send" onPress={handleSubmit(onSubmit)} /> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 10,
  },
  input: {
    height: 50,
    borderColor: Colors.grayText,
    borderWidth: 1,
    marginBottom: 20,
    padding: 8,
    borderRadius: 10,
    fontFamily: 'Outfit-Bold',
    fontSize: 17,
    color: Colors.green.bright,
    paddingLeft: 30,
    maxHeight: 80,
  },
  heading: {
    fontFamily: 'Outfit-Bold',
    color: 'white',
    fontSize: 17,
    paddingBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    height: 50,
    width: 140,
    borderColor: Colors.grayText,
    borderWidth: 1,
    marginBottom: 20,
    marginLeft: 8,
    borderRadius: 10,
    maxHeight: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
