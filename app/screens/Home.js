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
import TopHeadlineSlider from "../components/home/TopHeadlineSlider";
import HeadlineList from "../components/home/HeadlineList";
import GlobalApi from "../services/GlobalApi";

/**
 * Home screen displaying categorised news with top headlines and a full list.
 * Fetches and updates news based on selected category.
 *
 * @returns {JSX.Element} Main news display UI.
 */
function Home() {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [remainingNews, setRemainingNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewsByCategory("latest");
  }, []);

  /**
   * Fetches news by category and updates state with top headlines and others.
   *
   * @param {string} category - The news category to fetch.
   */
  const getNewsByCategory = async (category) => {
    try {
      setLoading(true);
      const result = (await GlobalApi.getByCategory(category)).data;
      const articles = result.articles;
      setTopHeadlines(articles.slice(0, 4));
      setRemainingNews(articles.slice(4));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news by category:", error);
      setLoading(false);
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
        </View>

        <CategorySlider selectCategory={getNewsByCategory} />

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={Colour.primary} />
          </View>
        ) : (
          <>
            <TopHeadlineSlider newsList={topHeadlines} />
            <HeadlineList newsList={remainingNews} />
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
    height: 400,
  },
});

export default Home;
