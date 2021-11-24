import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
// import the PokemonCard Component
import PokemonCard from "./PokemonCard";
// Let's build this prop to List our items using FlatList

export default function PokemonList(props) {
    const { pokemons } = props;
  
    return (
      <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.flatListContentContainer}
      />
    );
  }

const styles = StyleSheet.create({
    flatListContentContainer: {
      paddingHorizontal: 5,
    },
  });