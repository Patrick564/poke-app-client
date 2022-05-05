import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'

import MainNavigator from './src/navigations/MainNavigator'

import { FavoritesProvider } from '@context/favoritesContext'
import { AuthProvider } from '@context/authContext'

const App = () => {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </FavoritesProvider>
    </AuthProvider>
  )
}

export default App
