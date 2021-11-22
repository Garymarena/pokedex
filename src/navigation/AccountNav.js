import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Account from '../screens/Account';

// Lets import our Tab Navigation to de top of our View and Change the title to Spanish

const Stack = createStackNavigator();

export default function AccountNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Account" component={ Account } options={{ title: "Mi Cuenta" }} />
        </Stack.Navigator>
    )
}
