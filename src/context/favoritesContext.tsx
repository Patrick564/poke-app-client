import { createContext } from 'react'

type Example = {
  userFavorites: Array<string>
  setUserFavorites: any
}

const favoritesList: Example = {
  userFavorites: [],
  setUserFavorites: (favorites: any) => { }
}

const FavoritesContext = createContext(favoritesList)

export default FavoritesContext
