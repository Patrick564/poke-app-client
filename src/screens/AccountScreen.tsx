import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { useEffect, useState } from 'react'

import getPokemonInfo from '../api/getPokemonInfo'

import PokemonData from '../types/PokemonData'
import pokemonTypeColors from '../utils/pokemonTypeColors'

const AccountScreen = ({ route, navigation }: any) => {
  const { nextPokemon } = route.params || ''
  const [pokemonData, setPokemonData] = useState<PokemonData>({
    name: '',
    id: 0,
    stats: [],
    types: [],
    frontDefault: '',
    frontFemale: '',
    frontShiny: ''
  })

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
        <Text>{pokemonData.types}</Text>

        <View style={styles.stats}>
          {
            pokemonData?.stats.map((stat, idx) => {
              return (
                <View style={{ height: 60, width: 130, marginHorizontal: 20 }} key={idx}>
                  <Text style={{ fontSize: 15, textTransform: 'capitalize', textAlign: 'center', borderBottomWidth: 2 }}>{stat.baseStat}</Text>
                  <Text style={{ fontSize: 15, textTransform: 'capitalize', textAlign: 'center' }}>{stat.name}</Text>
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
  stats: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: 50,
    alignContent: 'center'
  },
  image: {
    borderRadius: 100,
    backgroundColor: 'white',
    marginBottom: 25,
    alignSelf: 'center'
  }
})

export default AccountScreen
