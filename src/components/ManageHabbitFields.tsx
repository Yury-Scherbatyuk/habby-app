import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native'
import { Colors } from '../colors'
import { NavigationProp } from '@react-navigation/native'

interface HabbitFieldsProps {
  navigation: NavigationProp<any, any>
  reminderData: {
    time: string
    days: string[]
  } | null
}

export default function HabbitFields({ navigation, reminderData }: HabbitFieldsProps) {
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

        <Text style={styles.heading}>Reminder</Text>

        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate('TaskScheduler')
          }
        >
          {(!reminderData || reminderData.days.length === 0) && (
            <Text style={styles.buttonInput}>Select Days</Text>
          )}
          {reminderData && reminderData.days.length > 0 && (
            <View>
              <Text style={[styles.buttonInput, { color: Colors.green.bright }]}>
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
  buttonInput: {
    fontFamily: 'Outfit-Bold',
    fontSize: 17,
    color: Colors.lightGray,
    padding: 10,
    paddingLeft: 10,
    flexGrow: 0.2,

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
    width: 140,
    borderColor: Colors.grayText,
    borderWidth: 1,
    marginBottom: 20,

    borderRadius: 10,
    maxHeight: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
})