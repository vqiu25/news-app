import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
  Text,
  View,
} from "react-native";
import Home from "./app/screens/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.paddingContainer}>
        <Home />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 20,
  },
  paddingContainer: {
    padding: 20,
  },
});
