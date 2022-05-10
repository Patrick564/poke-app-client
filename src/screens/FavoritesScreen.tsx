import { useContext } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import PokemonCard from '@components/PokemonCard'

import { FavoritesContext } from '@context/favoritesContext'

const FavoritesScreen = ({ navigation }: any) => {
  const { favorites } = useContext(FavoritesContext)

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({ item }) =>
          <PokemonCard pokemon={item} navigation={navigation} />
        }
        keyExtractor={(item) => item.name}
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

export default FavoritesScreen
