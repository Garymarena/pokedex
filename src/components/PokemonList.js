import React from "react";
import { StyleSheet, Text, FlatList, ActivityIndicator } from "react-native";
// import the PokemonCard Component
import PokemonCard from "./PokemonCard";
// Let's build this prop to List our items using FlatList

export default function PokemonList(props) {
    const { pokemons, loadPokemons, isNext } = props;

    const loadMore = () => {
      loadPokemons();
    };
  
    return (
      <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={isNext && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isNext && (
            <ActivityIndicator
              size="large"
              style={styles.spinner}
              color="#AEAEAE"
            />
          )
        }
      />
    );
  }

const styles = StyleSheet.create({
    flatListContentContainer: {
      paddingHorizontal: 5,
    },
    spinner: {
      marginTop: 20,
      marginBottom: 60,
    },
  });