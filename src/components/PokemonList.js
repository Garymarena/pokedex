import React from "react";
import { StyleSheet, Text, FlatList, ActivityIndicator, Platform } from "react-native";
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

  // Adding styles for Android devices
const styles = StyleSheet.create({
    flatListContentContainer: {
      paddingHorizontal: 5,
      marginTop: Platform.OS === "android" ? 30 : 0,
    },
    spinner: {
      marginTop: 20,
      marginBottom: Platform.OS === "android" ? 90 : 0,
    },
  });