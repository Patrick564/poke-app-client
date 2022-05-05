import { createContext, useState } from 'react'

import UserDataType from '@customTypes/UserInfo'

type DefaultAuthUserType = {
  userData: UserDataType
  updateUserData: any
}

const defaultAuthUser: DefaultAuthUserType = {
  userData: {
    email: 'ditto@pokemon.com',
    name: 'Ditto',
    id: '123',
    picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png'
  },
  updateUserData: () => { }
}

const AuthContext = createContext(defaultAuthUser)

const AuthProvider = ({ children }: any) => {
  const [userData, setUserData] = useState<UserDataType>(Object)
  const value = {
    userData,
    updateUserData: (newUserData: any) => {
      setUserData(newUserData)
    }
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
