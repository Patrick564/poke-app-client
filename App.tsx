import 'react-native-gesture-handler'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainNavigator from './src/navigations/MainNavigator'

import { AuthContext } from '@context/authContext'
import { FavoritesProvider } from '@context/favoritesContext'
import UserInfo from '@customTypes/UserInfo'

const App = () => {
  const [userData, setUserData] = useState<UserInfo>({
    email: 'ditto@pokemon.com',
    name: 'Ditto',
    id: '123',
    picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png'
  })

  const authValue = { userData, setUserData }

  return (
    <AuthContext.Provider value={authValue}>
      <FavoritesProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </FavoritesProvider>
    </AuthContext.Provider>
  )
}

export default App
