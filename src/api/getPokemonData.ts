import { PokemonType } from '@customTypes/PokemonData'

type Params = {
  name: string
}

const getPokemonData = async ({ name }: Params) => {
  const data = await fetch(`https://poke-app-server.onrender.com/api/pokemon/${name}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const response: PokemonType = await data.json()

  return response
}

export default getPokemonData
