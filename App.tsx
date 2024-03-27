import { StyleSheet, View, SafeAreaView } from 'react-native'
import TopBar from './components/TopBar'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
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
