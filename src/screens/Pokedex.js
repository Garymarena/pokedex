import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi } from "../api/pokemon";

// useEfect is activate when the component is mount
// useState safe data and reload if the component change

export default function Pokedex() {
    useEffect(() => {
        (async () => {
            await loadPokemons();
        })();
    }, []);

    const loadPokemons = async () => {
        try {
          const response = await getPokemonsApi();
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <SafeAreaView>
            <Text>Pokedex</Text>
        </SafeAreaView>
    )
}
