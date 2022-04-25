import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { useEffect, useState } from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import { FavoriteIcon, FavoriteIconOutline } from '../components/FavoriteIcon'

import getPokemonInfo from '../api/getPokemonData'

import PokemonData from '../types/PokemonData'
import pokemonTypeColors from '../utils/pokemonTypeColors'

const AccountScreen = ({ route, navigation }: any) => {
  const { nextPokemon } = route.params || ''
  const [fav, setFav] = useState<boolean>(false)
  const [pokemonData, setPokemonData] = useState<PokemonData>({
    name: '',
    id: 0,
    stats: [],
    types: [],
    frontDefault: '',
    frontFemale: '',
    frontShiny: ''
  })

  const changeFav = () => {
    setFav(!fav)
  }

  const pokemonInfo = async () => {
    const data = await getPokemonInfo({ name: nextPokemon })

    setPokemonData({ ...data })
  }

  useEffect(() => {
    let isMounted: boolean = true

    if (isMounted) { pokemonInfo() }

    return () => {
      isMounted = false
    }
  }, [nextPokemon])

  return (
    <View style={[styles.wrapper, { backgroundColor: pokemonTypeColors[pokemonData.types[0]] || 'white' }]}>
      <View style={styles.topContainer}>
        <Image style={styles.image} width={200} height={200} source={{ uri: pokemonData.frontDefault || '' }} />

        <Text style={{ textAlign: 'center', textTransform: 'capitalize', fontWeight: '700', fontSize: 35, color: 'white' }}>{pokemonData.name}</Text>
        <Text style={{ textAlign: 'center', textTransform: 'capitalize' }}>{pokemonData.id}</Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.typesContainer}>
          <Text style={{ textTransform: 'capitalize', fontSize: 18 }}>Types: {pokemonData.types.join(' - ')}</Text>
          <FavoriteIcon favoriteStatus={fav} changeFavoriteStatus={changeFav} />
        </View>

        <View style={styles.statsContainer}>
          {
            pokemonData?.stats.map((stat, idx) => {
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
