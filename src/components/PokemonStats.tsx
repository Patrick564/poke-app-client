import { View, Text, StyleSheet } from 'react-native'

import FavoriteIcon from '@components/FavoriteIcon'

import { PokemonStatsType } from '@customTypes/PokemonData'

type Params = {
  stats: PokemonStatsType[]
  types: string[]
  userId: string
  favorite: boolean
  handleFavorite: any
}

const PokemonStats = ({ stats, types, userId, favorite, handleFavorite }: Params) => {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.typesContainer}>
        <Text style={{ textTransform: 'capitalize', fontSize: 18 }}>Types: {types.join(' - ')}</Text>
        <FavoriteIcon
          favoriteStatus={favorite}
          changeFavoriteStatus={handleFavorite}
          userStatus={!!userId}
        />
      </View>

      <View style={styles.statsContainer}>
        {
          stats.map((stat, idx) => {
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
  )
}

const styles = StyleSheet.create({
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
  }
})

export default PokemonStats
