type PokemonStatsType = {
  name: string
  baseStat: number
}

type PokemonType = {
  name: string
  id: number
  stats: PokemonStatsType[]
  types: string[]
  frontDefault: string | undefined
  frontFemale: string | undefined
  frontShiny: string | undefined
}

export {
  PokemonStatsType,
  PokemonType
}
