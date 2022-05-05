import { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Button, Image } from 'react-native'
import { useAuthRequest } from 'expo-auth-session/providers/google'

import UserCard from '@components/UserCard'

import getFavorites from '@api/getFavorites'
import loginUser from '@api/loginUser'
import registerUser from '@api/registerUser'

import AuthUser from '@customTypes/AuthUser'

import { AuthContext } from '@context/authContext'
import { FavoritesContext } from '@context/favoritesContext'

import UserInfo from '@customTypes/UserInfo'

const LoginScreen = () => {
  const { userData, updateUserData } = useContext(AuthContext)
  const { updateFavorites } = useContext(FavoritesContext)
  const [authUser, setAuthUser] = useState<AuthUser|null>({
    accessToken: '',
    tokenType: ''
  })
  const [, response, promptAsync] = useAuthRequest({
    expoClientId: process.env.EXPO_CLIENT_ID
  })

  const loginOrRegisterUser = async ({ id, name, picture, email }: UserInfo) => {
    const login = await loginUser({ gid: id })

    if (!login.exist) {
      const register = await registerUser({ id, name, email, picture })

      return updateUserData({
        id: register.gid,
        name: register.name,
        email: register.email,
        picture: register.picture
      })
    }

    updateFavorites(await getFavorites({ id }))
    updateUserData({ id, name, email, picture })
  }

  const fetchUserData = async () => {
    const googleProfileData = await fetch(
      'https://www.googleapis.com/userinfo/v2/me',
      {
        headers:
          {
            Authorization: `Bearer ${authUser?.accessToken}`
          }
      }
    )
    const { email, name, id, picture } = await googleProfileData.json()

    await loginOrRegisterUser({ email, name, id, picture })
  }

  useEffect(() => {
    if (response?.type === 'success') {
      const info = response.authentication

      setAuthUser(info)
    }
  }, [response])

  useEffect(() => {
    if (authUser?.accessToken) {
      fetchUserData()
    }
  }, [authUser])

  return (
    <View style={styles.container}>
      {
        !authUser?.accessToken
          ? <Image
              style={{ width: 150, height: 150 }}
              source={{
                uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png'
              }}
            />
          : <UserCard name={userData.name} email={userData.email} picture={userData.picture} />
      }

      <Button title='Login' disabled={!!userData.id} onPress={() => promptAsync()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    width: 340,
    borderRadius: 10,
    elevation: 1,
    padding: 20,
    marginTop: 150,
    maxHeight: 265
  }
})

export default LoginScreen
