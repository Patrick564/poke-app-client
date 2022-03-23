const getPokemons = async ({ nextUrl = '' }) => {
  const info = await fetch(`https://pokeapp-server.herokuapp.com/api/pokemons?next=${nextUrl}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return await info.json()
}

export default getPokemons
