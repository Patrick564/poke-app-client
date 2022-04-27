import { useContext, useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { useAuthRequest } from 'expo-auth-session/providers/google'

import getFavorites from '@api/getFavorites'
import loginUser from '@api/loginUser'
import registerUser from '@api/registerUser'

import AuthUser from '@customTypes/AuthUser'

import { AuthContext } from '@context/authContext'
import FavoritesContext from '@context/favoritesContext'

const LoginScreen = () => {
  const { userData, setUserData } = useContext(AuthContext)
  const { setUserFavorites } = useContext(FavoritesContext)
  const [auhtUser, setAuthUser] = useState<AuthUser | null>({ accessToken: '', tokenType: '' })
  const [request, response, promptAsync] = useAuthRequest({
    expoClientId: process.env.EXPO_CLIENT_ID
  })

  // @remind improve this in some way
  const loginOrRegisterUser = async () => {
    let login = await loginUser({ gid: userData.id })

    if (!login.exist) {
      const register = await registerUser({ ...userData })
      login = await loginUser({ gid: register.gid })
    }

    return login.exist
  }

  const getUserData = async () => {
    const googleProfileData = await fetch('https://www.googleapis.com/userinfo/v2/me', {
      headers: { Authorization: `Bearer ${auhtUser?.accessToken}` }
    })
    const { email, name, id, picture } = await googleProfileData.json()

    const userExist = await loginOrRegisterUser()
    const fa = await getFavorites({ id })

    if (userExist) {
      setUserData({ email, name, id, picture })
      setUserFavorites(fa)
    }
  }

  useEffect(() => {
    if (response?.type === 'success') {
      const info = response.authentication

      setAuthUser(info)
    }
  }, [response])

  useEffect(() => {
    const a = async () => {
      if (auhtUser?.accessToken) { await getUserData() }
    }

    a()
  }, [auhtUser])

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image style={{ borderColor: 'red', width: 100, height: 100 }} width={100} height={100} source={{ uri: userData.picture }} />
        <Text>{userData.name}</Text>
        <Text>{userData.email}</Text>
      </View>

      <Pressable style={styles.button} disabled={!request} onPress={() => promptAsync()}>
        <Text style={{ color: 'white' }}>Login</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    width: 340,
    borderRadius: 10,
    elevation: 1,
    padding: 20,
    marginTop: 150,
    maxHeight: 250
  },
  userContainer: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    alignSelf: 'center',
    borderRadius: 15
  }
})

export default LoginScreen
