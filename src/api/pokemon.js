import { API_HOST } from "../utils/constants";

export async function getPokemonsApi() {
  try {
      // Lets build the URL
    const url = `${API_HOST}/pokemon?limit=50&offset=0`;
      // Execute the HTTP petition to the server
    const response = await fetch(url);
      // Change the recibe data to Json format
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

// Lets bring the Deatils of each Pokémon for the List

export async function getPokemonDetailsByUrlApi(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }

  // Now get the dat afor the Pokémos Cards

  export async function getPokemonDetailsApi(id) {
    try {
      const url = `${API_HOST}/pokemon/${id}`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }