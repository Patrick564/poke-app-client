import { PokemonList } from '../types/PokemonList'

type Params = {
  nextUrl: string
}

const getPokemonList = async ({ nextUrl }: Params) => {
  const data = await fetch(`https://poke-app-server.onrender.com/api/pokemon/list?next=${nextUrl}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const response: PokemonList = await data.json()

  return response
}

export default getPokemonList
