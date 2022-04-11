import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import HomeNavigator from './HomeNavigator'

import LoginScreen from '../screens/AccountScreen'

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#e91e63'
      }}
    >
      <Tab.Screen
        name='Main'
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }: any) => (
            <MaterialCommunityIcons name='pokemon-go' color={color} size={size} />
          )
        }}
      />
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
  )
}

export default MainNavigator
