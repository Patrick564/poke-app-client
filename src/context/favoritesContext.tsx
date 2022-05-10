import { PokemonPresentation } from '@customTypes/PokemonList'
import { createContext, useState } from 'react'

type DefaultFavoritesType = {
  favorites: PokemonPresentation[]
  updateFavorites: any
}

const defaultFavorites: DefaultFavoritesType = {
  favorites: [],
  updateFavorites: () => { }
}

const FavoritesContext = createContext(defaultFavorites)

const FavoritesProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<PokemonPresentation[]>([])
  const value = {
    favorites,
    updateFavorites: (newFavorites: PokemonPresentation[]) => {
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
