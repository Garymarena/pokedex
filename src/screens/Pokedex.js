import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";

// useEfect is activate when the component is mount
// useState safe data and reload if the component change

export default function Pokedex() {
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
          
          const pokemonsArray = [];
          for await (const pokemon of response.results) {
              const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);


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

    return (
        <SafeAreaView>
            <Text>Pokedex</Text>
        </SafeAreaView>
    );
}
