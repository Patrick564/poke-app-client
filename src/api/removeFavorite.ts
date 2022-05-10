type Params = {
  id: string
  favorite: string
}

const removeFavorite = async ({ id, favorite }: Params) => {
  const request = await fetch(`https://poke-app-server.onrender.com/api/user/${id}/favorites/delete`, {
    method: 'POST',
    body: JSON.stringify({ favorite }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return await request.json()
}

export default removeFavorite
