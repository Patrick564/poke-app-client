type Params = {
  id: string
  name: string
  email: string
  picture: string
}

const registerUser = async ({ id, name, email, picture }: Params) => {
  const register = await fetch('https://poke-app-server.onrender.com/api/user/register', {
    method: 'POST',
    body: JSON.stringify({
      id,
      name,
      email,
      picture
    }),
    headers: { 'Content-Type': 'application/json' }
  })
  const response = await register.json()

  return response.gid
}

export default registerUser
