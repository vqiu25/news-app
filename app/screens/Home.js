import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CategorySlider from "../components/home/CategorySlider";
import Colour from "../shared/Colour";
import Ionicons from "@expo/vector-icons/Ionicons";
import TopHeadlineSlider from "../components/home/TopHeadlineSlider";

function Home() {
  return (
    <View>
      <View style={styles.headerRow}>
        <Text style={styles.appName}>News</Text>
        <Ionicons name="notifications" size={24} color="black" />
      </View>
      <CategorySlider />
      <TopHeadlineSlider />
    </View>
  );
}

const styles = StyleSheet.create({
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colour.primary,
  },
  headerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Home;
