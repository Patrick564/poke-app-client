import { createStackNavigator } from '@react-navigation/stack'

import AccountScreen from '../screens/PokemonScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Pokemon' component={AccountScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigator
