/* TODO:
  [x] Routing between screens
    [ ] Pass data between screens
  [ ] ManageHabbit screen fields (and their states to pass further)
  [ ] шрифты загружаются на каждой странице отдельно. 
        Надо грузить их в одном месте и отображать спинер вместо <p>noooo</p>
*/

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomePage from './src/pages/HomePage'
import EditPage from './src/pages/EditPage'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Edit" component={EditPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
