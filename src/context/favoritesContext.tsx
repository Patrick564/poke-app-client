import { createContext, useState } from 'react'

type FavoritesType = {
  favorites: Array<string>
  toggle: any
}

const favorites: FavoritesType = {
  favorites: [],
  toggle: () => { }
}

const FavoritesContext = createContext(favorites)

const FavoritesProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<Array<string>>([])
  const value = {
    favorites,
    toggle: (favs: any) => {
      setFavorites(favs)
    }
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export { FavoritesContext, FavoritesProvider }
