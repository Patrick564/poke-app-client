import { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

import pokemonTypeColors from '../utils/pokemonTypeColors'

import PokemonPicture from '@components/PokemonPicture'
import PokemonStats from '@components/PokemonStats'

import addFavorites from '@api/addFavorites'
import removeFavorite from '@api/removeFavorite'
import getPokemonInfo from '@api/getPokemonData'

import { AuthContext } from '@context/authContext'
import { FavoritesContext } from '@context/favoritesContext'

import { PokemonType } from '@customTypes/PokemonData'

const AccountScreen = ({ route }: any) => {
  const { nextPokemon: nextList } = route.params || ''
  const { userData: user } = useContext(AuthContext)
  const { favorites, updateFavorites } = useContext(FavoritesContext)
  const [favoriteIcon, setFavoriteIcon] = useState<boolean>(false)
  const [pokemon, setPokemon] = useState<PokemonType>({
    name: '',
    id: 0,
    stats: [],
    types: [],
    frontDefault: '',
    frontFemale: '',
    frontShiny: ''
  })

  const handleFavorite = async () => {
    setFavoriteIcon(!favoriteIcon)

    const { updated }: { updated: Promise<string[]> } = favorites.includes(pokemon.name)
      ? await removeFavorite({ id: user.id, favorites: pokemon.name })
      : await addFavorites({ id: user.id, favorites: pokemon.name })

    updateFavorites(updated)
  }

  const fetchPokemon = async () => {
    const data = await getPokemonInfo({ name: nextList })

    setPokemon({ ...data })
  }

  useEffect(() => {
    let isMounted: boolean = true

    if (isMounted) { fetchPokemon() }

    return () => { isMounted = false }
  }, [nextList])

  useEffect(() => {
    let isMounted: boolean = true

    if (isMounted) {
      setFavoriteIcon(favorites.includes(pokemon.name))
    }

    return () => { isMounted = false }
  }, [pokemon])

  return (
    <View style={[styles.wrapper, { backgroundColor: pokemonTypeColors[pokemon.types[0]] || 'white' }]}>
      <PokemonPicture
        frontDefault={pokemon.frontDefault}
        id={pokemon.id}
        name={pokemon.name}
      />

      <PokemonStats
        userId={user.id}
        stats={pokemon.stats}
        types={pokemon.types}
        favorite={favoriteIcon}
        handleFavorite={handleFavorite}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'column'
  }
})

export default AccountScreen
