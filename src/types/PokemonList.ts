type PokemonPresentation = {
  name: string
  frontDefault: string | undefined
  id: number
  types: Array<string>
}

type PokemonListType = {
  nextUrl: string
  pokemonsInfo: Array<PokemonPresentation>
}

export {
  PokemonListType,
  PokemonPresentation
}
