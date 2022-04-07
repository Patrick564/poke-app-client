import { View, Text, Button, Image } from 'react-native'
import { useAuthRequest } from 'expo-auth-session/providers/google'
import { useEffect, useState } from 'react'

type AuthUser = {
  accessToken: string,
  tokenType: 'Bearer' | string
  expiresIn?: number | undefined,
  state?: string | undefined,
}

type UserInfo = {
  id: string,
  name: string,
  email: string,
  picture: string
}

const LoginScreen = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({ email: '', name: '', id: '', picture: '' })
  const [auhtUser, setAuthUser] = useState<AuthUser | null>({ accessToken: '', tokenType: '' })
  const [request, response, promptAsync] = useAuthRequest({
    expoClientId: '922041246401-o6ec34ikqvvgd4ii4g26opt1tgsmti11.apps.googleusercontent.com'
  })

  // @remind update to get user info of url
  useEffect(() => {
    // response.authentication
    if (response?.type === 'success') {
      const info = response.authentication
      setAuthUser(info)
    }
  }, [response])

  // @remind typescript structure
  //   Object {
  //     "email": "pvilchez794@gmail.com",
  //       "family_name": "Vilchez",
  //         "given_name": "Patrick",
  //           "id": "114210639962502247798",
  //             "locale": "es-419",
  //               "name": "Patrick Vilchez",
  //                 "picture": "https://lh3.googleusercontent.com/a-/AOh14GicQTchmb-zk0oq9Fm3y81PLsHWkBj5f4zj6CsMNK8=s96-c",
  //                   "verified_email": true,
  // }
  useEffect(() => {
    const callb = async () => {
      const a = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${auhtUser?.accessToken}` }
      })
      const b = await fetch('https://www.googleapis.com/auth/userinfo.profile', {
        headers: { Authorization: `Bearer ${auhtUser?.accessToken}` }
      })
      console.log(await b.json())
      const bae = await a.json()
      setUserInfo({
        email: bae.email,
        name: bae.name,
        id: bae.id,
        picture: bae.picture
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
