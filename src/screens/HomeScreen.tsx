import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import PokemonCard from '@components/PokemonCard'
import LoadingIcon from '@components/LoadIcon'

import getPokemons from '@api/getPokemonList'

import { PokemonListType } from '@customTypes/PokemonList'

const HomeScreen = ({ navigation }: any) => {
  const [pokemonList, setPokemonList] = useState<PokemonListType>({
    nextUrl: '',
    pokemonsInfo: []
  })

  const nextList = async () => {
    const nextPokemonList = await getPokemons({ nextUrl: pokemonList.nextUrl })

    setPokemonList({
      nextUrl: nextPokemonList.nextUrl,
      pokemonsInfo: [...pokemonList.pokemonsInfo, ...nextPokemonList.pokemonsInfo]
    })
  }

  useEffect(() => {
    let isMounted: boolean = true

    if (isMounted) { nextList() }

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1, width: '100%' }}
        data={pokemonList?.pokemonsInfo}
        renderItem={({ item }) => <PokemonCard pokemon={item} navigation={navigation} />}
        keyExtractor={(item) => item.name}
        onEndReached={nextList}
        onEndReachedThreshold={0.8}
        ListFooterComponent={() => <LoadingIcon />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignContent: 'center'
  }
})

export default HomeScreen
