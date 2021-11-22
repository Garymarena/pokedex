import React from 'react'
import { Text } from 'react-native';
// With Android device we need to install react-native-safe-area-context
import { SafeAreaView } from "react-native-safe-area-context";


// Once react-native-safe-area-context is installed and imported we can use right in our code
export default function Favorite() {
    return (
        <SafeAreaView>
            <Text>Favorite</Text>
        </SafeAreaView>
    )
}
