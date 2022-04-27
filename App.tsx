import 'react-native-gesture-handler'
import { useContext, createContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainNavigator from './src/navigations/MainNavigator'

import { AuthContext, userStatus } from '@context/authContext'
import FavoritesContext from '@context/favoritesContext'
import UserInfo from '@customTypes/UserInfo'

type Favorites = {
  favorites: Array<string>
}

const App = () => {
  const [userFavorites, setUserFavorites] = useState([])
  const [userData, setUserData] = useState<UserInfo>({
    email: 'ditto@pokemon.com',
    name: 'Ditto',
    id: '123',
    picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png'
  })
  const favoritesValue = { userFavorites, setUserFavorites }
  const authValue = { userData, setUserData }

  return (
    <AuthContext.Provider value={authValue}>
      <FavoritesContext.Provider value={favoritesValue}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </FavoritesContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
