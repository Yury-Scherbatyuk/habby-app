import { StyleSheet, View, SafeAreaView } from 'react-native'
import TopBar from './components/TopBar'
import { useState } from 'react'
import SettingsModal from './components/SettingsModal'

export default function App() {
  const [settingsVisible, setSettingsVisible] = useState(false)

  const handleSettingsClick = () => {
    setSettingsVisible(!settingsVisible)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBar isModalVisible={settingsVisible} handleSettingsClick={handleSettingsClick}/>
      <SettingsModal settingsVisible={settingsVisible}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
  },
})
