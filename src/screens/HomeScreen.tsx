// import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react'

import PokemonCard from '../components/PokemonCard'

import PokemonState from '../types/PokemonsState'
import getPokemons from '../api/getPokemons'

const A = () => {
  return (
    <View>
      <ActivityIndicator animating size={'large'} color={'black'} style={{ marginVertical: 50 }} />
    </View>
  )
}

const HomeScreen = ({ navigation }: any) => {
  const [pokes, setPokes] = useState<PokemonState>({ nextUrl: '', pokemonsInfo: [] })

  const loadMorePokemons = async () => {
    const morePokemons = await getPokemons({ nextUrl: pokes.nextUrl })

    setPokes({
      nextUrl: morePokemons.pokemons.nextUrl,
      pokemonsInfo: [...pokes.pokemonsInfo, ...morePokemons.pokemons.pokemonsInfo]
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
        data={pokes?.pokemonsInfo}
        renderItem={({ item }) => <PokemonCard pokemon={item} navigation={navigation} />}
        keyExtractor={(item) => item.name}
        onEndReached={loadMorePokemons}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => <A />}
      />
    </View>
    /* <ExpoStatusBar style='auto' /> */
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
