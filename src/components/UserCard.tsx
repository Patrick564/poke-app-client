import { View, Image, Text, StyleSheet } from 'react-native'

type Params = {
  name: string
  email: string
  picture: string
}

const UserCard = ({ name, email, picture }: Params) => {
  return (
    <View style={styles.container}>
      <Image style={styles.picture} source={{ uri: picture }} />
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 20
  },
  picture: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 20
  }
})

export default UserCard
