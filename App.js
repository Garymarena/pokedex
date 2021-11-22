import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./src/navigation/Navigation";
export default function App() {

  // Main App, we export the Navigation Component
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>

  );
}

