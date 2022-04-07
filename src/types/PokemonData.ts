type PokemonStats = {
  name: string
  baseStat: number
}

type PokemonInfo = {
  name: string
  id: number
  stats: Array<PokemonStats>
  types: Array<string>
  frontDefault: string | null
  frontFemale: string | null
  frontShiny: string | null
}

export default PokemonInfo
