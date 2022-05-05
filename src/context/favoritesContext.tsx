import { createContext, useState } from 'react'

type DefaultFavoritesType = {
  favorites: Array<string>
  updateFavorites: any
}

const defaultFavorites: DefaultFavoritesType = {
  favorites: [],
  updateFavorites: () => { }
}

const FavoritesContext = createContext(defaultFavorites)

const FavoritesProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<Array<string>>([])
  const value = {
    favorites,
    updateFavorites: (newFavorites: string[]) => {
      setFavorites(newFavorites)
    }
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export { FavoritesContext, FavoritesProvider }
