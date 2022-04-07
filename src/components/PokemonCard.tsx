import { StyleSheet, View, Text, Image, Pressable } from 'react-native'

import pokemonTypeColors from '../utils/pokemonTypeColors'
import { PokemonPresentation } from '../types/PokemonList'

type Params = {
  pokemon: PokemonPresentation
  navigation: any
}

const PokemonCard = ({ pokemon, navigation }: Params) => {
  return (
    <Pressable onPress={() => navigation.navigate('Account', { nextPokemon: pokemon.name })}>
      <View style={[styles.card, { backgroundColor: pokemonTypeColors[pokemon.types[0]] }]}>
        <View style={styles.info}>
          <View>
            <Text style={styles.text}># {pokemon.id}</Text>
            <Text style={styles.title}>{pokemon.name}</Text>
          </View>

          <View>
            {
              pokemon?.types?.map((type: any) => {
                return (
                  <Text key={type} style={styles.types}>{type}</Text>
                )
              })
            }
          </View>
        </View>
        <Image style={styles.image} source={{ uri: pokemon.frontDefault }} />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
    height: 170,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  info: {
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 25,
    color: 'white'
  },
  types: {
    textTransform: 'capitalize',
    fontWeight: '700',
    color: 'white'
  },
  text: {
    textTransform: 'capitalize',
    color: 'white'
  },
  image: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 100
  }
})

export default PokemonCard
