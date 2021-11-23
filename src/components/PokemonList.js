import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";

// Let's build this prop to List our items using FlatList

export default function PokemonList(props) {
  const { pokemons } = props;

  return (
    <FlatList
      data={ pokemons }
      numColumns={ 2 }
      showsVerticalScrollIndicator={ false }
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});