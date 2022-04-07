type PokemonPresentation = {
  name: string,
  frontDefault: string,
  id: number,
  types: Array<string>
}

type PokemonList = {
  nextUrl: string,
  pokemonsInfo: Array<PokemonPresentation>
}

export {
  PokemonList,
  PokemonPresentation
}
