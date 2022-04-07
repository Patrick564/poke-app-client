type AuthUser = {
  accessToken: string,
  tokenType: 'Bearer' | string
  expiresIn?: number | undefined,
  state?: string | undefined,
}

export default AuthUser
