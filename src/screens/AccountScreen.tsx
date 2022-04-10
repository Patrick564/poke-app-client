import { View, Text, Button, Image } from 'react-native'
import { useAuthRequest } from 'expo-auth-session/providers/google'
import { useEffect, useState } from 'react'

import UserInfo from '../types/UserInfo'
import AuthUser from '../types/AuthUser'

const LoginScreen = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({ email: '', name: '', id: '', picture: '' })
  const [auhtUser, setAuthUser] = useState<AuthUser | null>({ accessToken: '', tokenType: '' })
  const [request, response, promptAsync] = useAuthRequest({
    expoClientId: '922041246401-o6ec34ikqvvgd4ii4g26opt1tgsmti11.apps.googleusercontent.com'
  })

  // @remind update to get user info of url
  useEffect(() => {
    if (response?.type === 'success') {
      const info = response.authentication
      setAuthUser(info)
    }
  }, [response])

  useEffect(() => {
    const callb = async () => {
      const googleProfileData = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${auhtUser?.accessToken}` }
      })
      const b = await fetch('https://www.googleapis.com/auth/userinfo.profile', {
        headers: { Authorization: `Bearer ${auhtUser?.accessToken}` }
      })
      console.log(await b.json())
      const googleProfile = await googleProfileData.json()

      setUserInfo({
        email: googleProfile.email,
        name: googleProfile.name,
        id: googleProfile.id,
        picture: googleProfile.picture
      })
    }

    callb()
  }, [auhtUser])

  console.log(auhtUser)
  console.log(userInfo)

  return (
    <View>
      <Text>Hi</Text>
      <Text>{userInfo.id}</Text>
      <Text>{userInfo.name}</Text>
      <Text>{userInfo.email}</Text>
      <Image width={50} height={50} source={{ uri: userInfo.picture }} />
      <Button title='Login' disabled={!request} onPress={() => promptAsync()} />
    </View>
  )
}

export default LoginScreen
