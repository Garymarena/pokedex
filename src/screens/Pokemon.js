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
