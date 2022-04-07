import PokemonData from '../types/PokemonInfo'

type Params = {
  name: string
}

const getPokemonData = async ({ name }: Params) => {
  const data = await fetch(`https://pokeapp-server.herokuapp.com/api/pokemon/${name}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const repsonse: PokemonData = await data.json()

  return repsonse
}

export default getPokemonData
