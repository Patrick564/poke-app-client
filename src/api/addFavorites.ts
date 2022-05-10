import { PokemonPresentation } from '@customTypes/PokemonList'

type Params = {
  id: string
  favorite: PokemonPresentation
}

const addFavorites = async ({ id, favorite }: Params) => {
  const request = await fetch(`https://poke-app-server.onrender.com/api/user/${id}/favorites/add`, {
    method: 'POST',
    body: JSON.stringify({ favorite }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const response = await request.json()

  return response
}

export default addFavorites
