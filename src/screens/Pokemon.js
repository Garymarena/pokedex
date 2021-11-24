
import React, { useState, useEffect } from 'react'
import { ScrollView } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';

// Create a new prop to catch all data from especific pokemon

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  // Render the specific card of each Pokémon
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
    </ScrollView>
  );
=======
import React from 'react'
import { View, Text } from 'react-native'

export default function Pokemon(props) {
    // Create a new prop for the navigation route
    const { navigation, route } = props;
    console.log(route);

    return (
        <View>
            <Text>Estamos en la vista de un Pokémon</Text>
        </View>
    )
}
