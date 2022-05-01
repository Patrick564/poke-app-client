type Params = {
  gid: string
}

const loginUser = async ({ gid }: Params) => {
  const user = await fetch('https://poke-app-server.onrender.com/api/user/login', {
    method: 'POST',
    body: JSON.stringify({ id: gid }),
    headers: { 'Content-Type': 'application/json' }
  })

  return await user.json()
}

export default loginUser
