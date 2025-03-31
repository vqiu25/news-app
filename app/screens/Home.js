import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CategorySlider from "../components/home/CategorySlider";
import Colour from "../shared/Colour";

function Home() {
  return (
    <View>
      <Text style={styles.appName}>News</Text>
      <CategorySlider />
    </View>
  );
}

const styles = StyleSheet.create({
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colour.primary,
  },
});

export default Home;
