type PokemonStats = {
  name: string
  baseStat: number
}

type PokemonType = {
  name: string
  id: number
  stats: PokemonStats[]
  types: string[]
  frontDefault: string | null
  frontFemale: string | null
  frontShiny: string | null
}

export default PokemonType
