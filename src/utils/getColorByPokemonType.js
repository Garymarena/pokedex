// Create a constant to export colors
import { POKEMON_TYPE_COLORS } from "./constants"

const getColorByPokemontype = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByPokemontype;