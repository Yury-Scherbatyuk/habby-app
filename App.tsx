import { StyleSheet, Text, View } from 'react-native';
import TopBar from './components/TopBar';
import CoreSquare from './components/CoreSquare';
import { SquareSizes, Icons } from './constants';

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
    <CoreSquare color='red' size={SquareSizes.Big} icon={Icons.Tick} isHighlited={true}/> 
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
