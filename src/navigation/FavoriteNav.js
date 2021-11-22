import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Favorite from '../screens/Favorite';

// Lets import our Tab Navigation to de top of our View and Change the title to Spanish

const Stack = createStackNavigator();

export default function FavoriteNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Favorite" component={ Favorite }  options={{ title: "Favoritos"}}/>
        </Stack.Navigator>
    )
}
