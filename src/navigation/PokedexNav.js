import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Pokedex from '../screens/Pokedex';
import Pokemon from '../screens/Pokemon';

// Lets import our Tab Navigation to de top of our View and Change the title to Spanish

// Also in this Component we import our Pokémons view after Pokedex, so when someone pick a Pokémon charge a view of that Poké

const Stack = createStackNavigator();

export default function PokedexNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pokedex" component={ Pokedex } options={{ title: "Pokédex" }}/>
            <Stack.Screen name="Pokemon" component={ Pokemon }/>
        </Stack.Navigator>
    )
}
