import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./app/screens/Home";
import News from "./app/screens/News";

const Stack = createNativeStackNavigator();

/**
 * Root component of the app.
 * Wraps the app in a SafeAreaView and sets up the navigation stack.
 *
 * @returns {JSX.Element} The main application UI.
 */
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="News" component={News} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 20,
  },
});
