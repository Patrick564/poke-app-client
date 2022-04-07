import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AccountScreen from './src/screens/AccountScreen'
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'

const Tab: any = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Account' component={AccountScreen} />
        <Tab.Screen name='Login' component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
