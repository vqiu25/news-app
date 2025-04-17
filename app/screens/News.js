import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Share,
  StyleSheet,
} from "react-native";
import Colour from "../shared/Colour";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

/**
 * Displays a detailed view of a selected news article.
 * Includes title, image, description, and source info,
 * with options to share or read more in an external browser.
 *
 * @returns {JSX.Element} News detail screen.
 */
function News() {
  const news = useRoute().params.news;
  const navigation = useNavigation();

  const shareNews = () => {
    Share.share({
      message: news.title + "\nRead More: " + news.description,
    });
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={32} color={Colour.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={shareNews}>
          <Ionicons name="share" size={32} color={Colour.primary} />
        </TouchableOpacity>
      </View>

      <Image source={{ uri: news.urlToImage }} style={styles.image} />

      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.source}>{news.source.name}</Text>
      <Text style={styles.description}>{news.description}</Text>

      <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(news.url)}>
        <Text style={styles.readMore}>Read More</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 20,
  },
  topBar: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 15,
  },
  title: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  source: {
    marginTop: 10,
    fontSize: 16,
    color: Colour.primary,
  },
  description: {
    marginTop: 10,
    fontSize: 18,
    color: Colour.grey,
  },
  readMore: {
    marginTop: 10,
    fontSize: 18,
    color: Colour.primary,
    fontWeight: "bold",
  },
});

export default News;
