import { StyleSheet, View, SafeAreaView } from 'react-native'
import TopBar from './components/TopBar'
import { useState } from 'react'
import SettingsModal from './components/SettingsModal'
import CoreSquare from './components/CoreSquare'
import {SquareSizes, CoreIcons } from './constants'

export default function App() {
  const [settingsVisible, setSettingsVisible] = useState(false)

  const handleSettingsClick = () => {
    setSettingsVisible(!settingsVisible)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBar isModalVisible={settingsVisible} handleSettingsClick={handleSettingsClick}/>
      <SettingsModal settingsVisible={settingsVisible}/>
      <CoreSquare color="red" size={SquareSizes.Big} icon={CoreIcons.Tick} isHighlited={true} iconSize={228} iconColor="black" />
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
