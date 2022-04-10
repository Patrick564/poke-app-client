import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AccountScreen from './src/screens/AccountScreen'
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'

const Stack = createStackNavigator()
const Tab: any = createBottomTabNavigator()

const Example = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Pokemon' component={AccountScreen} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          tabBarActiveTintColor: '#e91e63'
        }}
      >
        <Tab.Screen
          name='Home'
          component={Example}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }: any) => (
              <MaterialCommunityIcons name='home' color={color} size={size} />
            )
          }}
        />
        {/* <Tab.Screen
          name='Account'
          component={AccountScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, size }: any) => (
              <MaterialCommunityIcons name='account' color={color} size={size} />
            )
          }}
        /> */}
        <Tab.Screen
          name='Account'
          component={LoginScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, size }: any) => (
              <MaterialCommunityIcons name='account' color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
