import { SafeAreaView, StatusBar, StyleSheet, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./app/navigation/HomeNavigator";

/**
 * Root component of the app.
 * Wraps the app in a SafeAreaView and sets up navigation.
 *
 * @returns {JSX.Element} The main application UI.
 */
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // Adjust top padding based on platform to avoid overlap with status bar
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 20,
  },
});
