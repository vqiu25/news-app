import { React, useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import CategorySlider from "../components/home/CategorySlider";
import Colour from "../shared/Colour";
import Ionicons from "@expo/vector-icons/Ionicons";
import TopHeadlineSlider from "../components/home/TopHeadlineSlider";
import HeadlineList from "../components/home/HeadlineList";
import GlobalApi from "../services/GlobalApi";

function Home() {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    getTopHeadline();
  }, []);

  const getTopHeadline = async () => {
    try {
      const result = (await GlobalApi.getTopHeadline()).data;
      console.log(result);
      setNewsList(result.articles);
    } catch (error) {
      console.error("Error fetching top headlines:", error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.headerRow}>
          <Text style={styles.appName}>News</Text>
          <Ionicons name="notifications" size={24} color="black" />
        </View>
        <CategorySlider />
        <TopHeadlineSlider newsList={newsList} />
        <HeadlineList newsList={newsList} />
      </View>
    </ScrollView>
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
