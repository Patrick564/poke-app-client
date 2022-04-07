// import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { FlatList, StyleSheet, View } from 'react-native'
import { useEffect, useState } from 'react'

import PokemonCard from '../components/PokemonCard'
import LoadIcon from '../components/LoadIcon'

import { PokemonList } from '../types/PokemonList'
import getPokemons from '../api/getPokemons'

const HomeScreen = ({ navigation }: any) => {
  const [pokemons, setPokemons] = useState<PokemonList>({ nextUrl: '', pokemonsInfo: [] })

  const loadMorePokemons = async () => {
    const morePokemons = await getPokemons({ nextUrl: pokemons.nextUrl })

    setPokemons({
      nextUrl: morePokemons.nextUrl,
      pokemonsInfo: [...pokemons.pokemonsInfo, ...morePokemons.pokemonsInfo]
    })
  }

  useEffect(() => {
    let isMounted: boolean = true

    if (isMounted) { loadMorePokemons() }

    return () => {
      isMounted = false
    }
  }, [])

  return (
    // <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1, width: '100%' }}
        data={pokemons?.pokemonsInfo}
        renderItem={({ item }) => <PokemonCard pokemon={item} navigation={navigation} />}
        keyExtractor={(item) => item.name}
        onEndReached={loadMorePokemons}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => <LoadIcon />}
      />
    </View>
    // <ExpoStatusBar style='auto' />
    // </SafeAreaView>
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
