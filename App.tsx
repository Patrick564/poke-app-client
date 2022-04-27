import 'react-native-gesture-handler'
import { useContext, createContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainNavigator from './src/navigations/MainNavigator'

import { AuthContext, userStatus } from '@context/authContext'
import UserInfo from '@customTypes/UserInfo'

const App = () => {
  const [userData, setUserData] = useState<UserInfo>({
    email: 'ditto@pokemon.com',
    name: 'Ditto',
    id: '123',
    picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png'
  })
  const value = { userData, setUserData }

  return (
    <AuthContext.Provider value={value}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default App
