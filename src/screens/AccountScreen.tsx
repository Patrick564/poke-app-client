import { useContext, useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { useAuthRequest } from 'expo-auth-session/providers/google'

import loginUser from '@api/loginUser'
import registerUser from '@api/registerUser'

import UserInfo from '@customTypes/UserInfo'
import AuthUser from '@customTypes/AuthUser'

import { AuthContext } from '@context/authContext'

const LoginScreen = () => {
  const tests = useContext(AuthContext)
  const [userData, setUserData] = useState<UserInfo>({ email: '', name: '', id: '', picture: '' })
  const [auhtUser, setAuthUser] = useState<AuthUser | null>({ accessToken: '', tokenType: '' })
  const [request, response, promptAsync] = useAuthRequest({
    expoClientId: process.env.EXPO_CLIENT_ID
  })

  useEffect(() => {
    if (response?.type === 'success') {
      const info = response.authentication

      setAuthUser(info)
    }
  }, [response])

  useEffect(() => {
    const getUserData = async () => {
      const googleProfileData = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${auhtUser?.accessToken}` }
      })
      const googleProfile = await googleProfileData.json()

      setUserData({
        email: googleProfile.email,
        name: googleProfile.name,
        id: googleProfile.id,
        picture: googleProfile.picture
      })
    }

    getUserData()
  }, [auhtUser])

  // useEffect(() => {
  //   const loginOrRegisterUser = async () => {
  //     const login = await loginUser({ gid: userData.id })

  //     if (!login.exist) {
  //       await registerUser({ ...userData })
  //     }
  //   }

  //   loginOrRegisterUser()
  // }, [userData])

  console.log(tests.logged)

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image width={80} height={80} source={{ uri: userData.picture }} />
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
