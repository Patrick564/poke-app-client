type Params = {
  id: string
  favorites: string
}

const removeFavorite = async ({ id, favorites }: Params) => {
  const request = await fetch(`https://poke-app-server.onrender.com/api/user/${id}/favorites/delete`, {
    method: 'POST',
    body: JSON.stringify({ favorites }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return await request.json()
}

export default removeFavorite
