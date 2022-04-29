import { createContext, useState } from 'react'

type Example = {
  favorites: Array<string>
  toggle: any
}

const favoritesList: Example = {
  favorites: [],
  toggle: () => { }
}

const FavoritesContext = createContext(favoritesList)

const Provider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<Array<string>>([])
  const value = {
    favorites,
    toggle: ({ favorites }: any) => {
      setFavorites(favorites)
    }
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export { FavoritesContext, Provider }
