import { StyleSheet, View, SafeAreaView } from 'react-native'
import TopBar from '../components/TopBar'
import { useState } from 'react'
import SettingsModal from '../components/SettingsModal'
import { Colors } from '../colors'
import { NavigationProp } from "@react-navigation/native";

interface PageProps {
    navigation: NavigationProp<any,any>
  }

export default function HomePage({ navigation } : PageProps) {
  const [settingsVisible, setSettingsVisible] = useState(false)

  const handleSettingsClick = () => {
    setSettingsVisible(!settingsVisible)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBar
        isModalVisible={settingsVisible}
        handleSettingsClick={handleSettingsClick}
        navigation={navigation}
      />
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
