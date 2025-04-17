import { React, useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import CategorySlider from "../components/home/CategorySlider";
import Colour from "../shared/Colour";
import Ionicons from "@expo/vector-icons/Ionicons";
import TopHeadlineSlider from "../components/home/TopHeadlineSlider";
import HeadlineList from "../components/home/HeadlineList";
import GlobalApi from "../services/GlobalApi";

function Home() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getNewsByCategory("latest");
  }, []);

  const getNewsByCategory = async (category) => {
    try {
      setLoading(true);
      const result = (await GlobalApi.getByCategory(category)).data;
      // console.log(result);
      setNewsList(result.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news by category:", error);
      setLoading(false);
    }
  };

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
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "white" }}
    >
      <View style={styles.paddingContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.appName}>News</Text>
          <Ionicons name="notifications" size={24} color="black" />
        </View>
        <CategorySlider
          selectCategory={(category) => getNewsByCategory(category)}
        />

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={Colour.primary} />
          </View>
        ) : (
          <>
            <TopHeadlineSlider newsList={newsList} />
            <HeadlineList newsList={newsList} />
          </>
        )}
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
  paddingContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 400, // or use Dimensions.get("window").height if you want full screen
  },
});

export default Home;
