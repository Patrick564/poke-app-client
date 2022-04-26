import 'react-native-gesture-handler'
import { useContext, createContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainNavigator from './src/navigations/MainNavigator'

import { AuthContext, userStatus } from '@context/authContext'

const App = () => {
  return (
    <AuthContext.Provider value={userStatus}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default App
