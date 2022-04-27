const getFavorites = async ({ id }: any) => {
  const request = await fetch(`https://poke-app-server.onrender.com/api/user/${id}/favorites`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const { favorites } = await request.json()

  return favorites
}

export default getFavorites
