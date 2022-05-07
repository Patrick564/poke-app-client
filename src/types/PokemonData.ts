type PokemonStatsType = {
  name: string
  baseStat: number
}

type PokemonType = {
  name: string
  id: number
  stats: PokemonStatsType[]
  types: string[]
  frontDefault: string | null
  frontFemale: string | null
  frontShiny: string | null
}

export {
  PokemonStatsType,
  PokemonType
}
