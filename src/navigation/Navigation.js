import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5";
import AccountNav from "./AccountNav";
import PokedexNav from "./PokedexNav";
import FavoriteNav from "./FavoriteNav";

const Tab = createBottomTabNavigator();
// To create our navigation tab we import all the screens we create before
export default function Navigation() {
    return (
        // Import Icon and Image to add some icons and the Pokeball to the Pokedex Tab in the NavBar
        <Tab.Navigator>
            <Tab.Screen name="Favorite" component={FavoriteNav} 
                options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" color={color} size={size} />
                    ),
                }} 
            />
            <Tab.Screen name="Pokedex" component={PokedexNav}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => renderPokeball(),
                }}
            />
            <Tab.Screen name="Account" component={AccountNav}
                options={{
                    tabBarLabel: "Mi Cuenta",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}


// Function that returns and  image for the Pokedex logo

function renderPokeball() {
    return(
        <Image 
            source={require('../assets/pokeball.png')}    
            style={{ width: 75, height: 75, top: -15 }}
        />
    )
}