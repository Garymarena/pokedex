import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from '../components/PokemonList';

// useEfect is activate when the component is mount
// useState safe data and reload if the component change

export default function Pokedex() {
    // Create a constant to set an empty array of pokemons
    const [ pokemons, setPokemons ] = useState([]);
    console.log("pokemons--->", pokemons);

    useEffect(() => {
        (async () => {
            await loadPokemons();
        })();
    }, []);

    const loadPokemons = async () => {
        try {
          const response = await getPokemonsApi();
          
          // Now on the empty array lets bring the Data we need to show the Json format info to set the Data
          const pokemonsArray = [];
          for await (const pokemon of response.results) {
              const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

              // Lets push which Data we need to show

              pokemonsArray.push({
                  id: pokemonDetails.id,
                  name: pokemonDetails.name,
                  type: pokemonDetails.types[0].type.name,
                  order: pokemonDetails.order,
                  img: pokemonDetails.sprites.other["official-artwork"].front_default,
              });
          }

          setPokemons([...pokemons, ...pokemonsArray]);
        } catch (error) {
          console.error(error);
        }
      };

      // Import the new component/PoekmonList.js and print the names of each Pokémon

    return (
        <SafeAreaView>
            <PokemonList pokemons={pokemons} />
        </SafeAreaView>
    );
}
