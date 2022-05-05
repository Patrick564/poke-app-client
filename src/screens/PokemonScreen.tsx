import { useContext, useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

import pokemonTypeColors from '../utils/pokemonTypeColors'

import FavoriteIcon from '@components/FavoriteIcon'

import addFavorites from '@api/addFavorites'
import removeFavorite from '@api/removeFavorite'
import getPokemonInfo from '@api/getPokemonData'

import { AuthContext } from '@context/authContext'
import { FavoritesContext } from '@context/favoritesContext'

import PokemonType from '@customTypes/PokemonData'

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
      <View style={styles.topContainer}>
        <Image
          style={styles.image}
          width={200}
          height={200}
          source={{ uri: pokemon.frontDefault || undefined }}
        />

        <Text style={{ textAlign: 'center', textTransform: 'capitalize', fontWeight: '700', fontSize: 35, color: 'white' }}>{pokemon.name}</Text>
        <Text style={{ textAlign: 'center', textTransform: 'capitalize' }}>{pokemon.id}</Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.typesContainer}>
          <Text style={{ textTransform: 'capitalize', fontSize: 18 }}>Types: {pokemon.types.join(' - ')}</Text>
          <FavoriteIcon
            favoriteStatus={favoriteIcon}
            changeFavoriteStatus={handleFavorite}
            userStatus={!!user.id}
          />
        </View>

        <View style={styles.statsContainer}>
          {
            pokemon?.stats.map((stat, idx) => {
              return (
                <View style={{ height: 60, width: 130, marginHorizontal: 20 }} key={idx}>
                  <Text style={styles.baseStat}>{stat.baseStat}</Text>
                  <Text style={{ fontSize: 15, textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold' }}>{stat.name}</Text>
                </View>
              )
            })
          }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'column'
  },
  topContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  bottomContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 35,
    height: 350
  },
  typesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: 50,
    alignContent: 'center'
  },
  baseStat: {
    fontSize: 20,
    textTransform: 'capitalize',
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  image: {
    borderRadius: 100,
    backgroundColor: 'white',
    marginBottom: 25,
    alignSelf: 'center'
  }
})

export default AccountScreen
