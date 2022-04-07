import PokemonsState from '../types/PokemonsState'

type Params = {
  nextUrl: number
}

const getPokemonList = async ({ nextUrl }: Params) => {
  const data = await fetch(`https://pokeapp-server.herokuapp.com/api/pokemons?next=${nextUrl}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const response: PokemonsState = await data.json()

  return response
}

export default getPokemonList
