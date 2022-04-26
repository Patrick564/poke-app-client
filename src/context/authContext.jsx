import { createContext } from 'react'

const userStatus = {
  logged: false,
  id: '',
  toggle: () => { }
}

const AuthContext = createContext(userStatus)

export {
  userStatus,
  AuthContext
}
