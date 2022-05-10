import { Text, View, Image, StyleSheet } from 'react-native'

type Params = {
  frontDefault: string | undefined
  name: string
  id: number
}

const PokemonPicture = ({ frontDefault, name, id }: Params) => {
  return (
    <View style={styles.topContainer}>
      <Image
        style={styles.image}
        width={200}
        height={200}
        source={{ uri: frontDefault || undefined }}
      />

      <Text style={{ textAlign: 'center', textTransform: 'capitalize', fontWeight: '700', fontSize: 35, color: 'white' }}>{name}</Text>
      <Text style={{ textAlign: 'center', textTransform: 'capitalize' }}>{id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  image: {
    borderRadius: 100,
    backgroundColor: 'white',
    marginBottom: 25,
    alignSelf: 'center'
  }
})

export default PokemonPicture
