import { StyleSheet, View, SafeAreaView } from 'react-native'
import TopBar from './src/components/TopBar'
import { useState } from 'react'
import SettingsModal from './src/components/SettingsModal'
import CoreSquare from './src/components/CoreSquare'
import { SquareSizes, CoreIcons } from './src/constants'
import { Colors } from './src/colors'
import ManageHabbit from './src/pages/ManageHabbit'

export default function App() {
  const [settingsVisible, setSettingsVisible] = useState(false)

  const handleSettingsClick = () => {
    setSettingsVisible(!settingsVisible)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBar
        isModalVisible={settingsVisible}
        handleSettingsClick={handleSettingsClick}
      />
      <SettingsModal settingsVisible={settingsVisible} />
      <ManageHabbit />
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
