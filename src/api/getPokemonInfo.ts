const getPokemonInfo = async ({ name = '' }) => {
  const info = await fetch(`https://pokeapp-server.herokuapp.com/api/pokemon/${name}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return await info.json()
}

export default getPokemonInfo
