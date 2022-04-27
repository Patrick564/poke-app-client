const addFavorites = async ({ id, favorites }: any) => {
  const request = await fetch(`https://poke-app-server.onrender.com/api/user/${id}/favorites/add`, {
    method: 'POST',
    body: JSON.stringify({ favorites }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const response = await request.json()

  return response
}

export default addFavorites
