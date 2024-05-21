import { StyleSheet, View, SafeAreaView, Platform } from 'react-native'
import { useState } from 'react'
import { Colors } from '../colors'
import { NavigationProp } from '@react-navigation/native'
import TopBar from '../components/TopBar'
import SettingsModal from '../components/SettingsModal'

interface PageProps {
  navigation: NavigationProp<any, any>
}

export default function HomePage({ navigation }: PageProps) {
  const [settingsVisible, setSettingsVisible] = useState(false)

  const handleSettingsClick = () => {
    setSettingsVisible(!settingsVisible)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={Platform.OS == 'android' && { marginTop: 40 }}>
        <TopBar
          isModalVisible={settingsVisible}
          handleSettingsClick={handleSettingsClick}
          navigation={navigation}
        />
      </View>

      <SettingsModal settingsVisible={settingsVisible} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    alignItems: 'center',
  },
})
