type PokemonPresentation = {
  name: string,
  frontDefault: string | null,
  id: number,
  types: Array<string>
}

type PokemonListType = {
  nextUrl: string,
  pokemonsInfo: Array<PokemonPresentation>
}

export {
  PokemonListType,
  PokemonPresentation
}
