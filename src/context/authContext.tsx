import { createContext } from 'react'

const userStatus = {
  userData: {
    name: '',
    id: '',
    email: '',
    picture: '',
  },
  setUserData: (user: any) => { }
}

const AuthContext = createContext(userStatus)

export {
  userStatus,
  AuthContext
}
