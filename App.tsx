import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from './src/screens/HomeScreen'
import AccountScreen from './src/screens/AccountScreen'

const Tab: any = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Account' component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
