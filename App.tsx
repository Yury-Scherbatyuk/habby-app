import { StyleSheet, Text, View } from 'react-native';
import TopBar from './components/TopBar';

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
  },
});
