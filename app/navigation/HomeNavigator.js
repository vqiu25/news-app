import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import News from "../screens/News";

const Stack = createNativeStackNavigator();

/**
 * Navigation stack for the app.
 * Includes the Home and News screens.
 *
 * @returns {JSX.Element} The configured native stack navigator.
 */
function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="News" component={News} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
