import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import Colour from "../../shared/Colour";
import { useNavigation } from "@react-navigation/native";

/**
 * Displays a horizontally scrollable slider of the top four news headlines.
 * Each item is clickable and navigates to a detailed news screen.
 *
 * @param {Object} props
 * @param {Array<Object>} props.newsList - List of top headline news articles.
 * @returns {JSX.Element} Horizontal scrollable slider of top news cards.
 */
function TopHeadlineSlider({ newsList }) {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("screen").width;

  const styles = getStyles(screenWidth);

  return (
    <View style={styles.container}>
      {/* 
        Horizontally scrollable list of top news headlines.
        Each card includes an image, title, and source, and navigates to the News screen on press.
      */}
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("News", { news: item })}
            style={styles.card}
          >
            {/* News thumbnail image */}
            <Image source={{ uri: item.urlToImage }} style={styles.image} />

            {/* News title and source*/}
            <Text numberOfLines={3} style={styles.title}>
              {item.title}
            </Text>
            <Text style={styles.source}>{item?.source?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const getStyles = (screenWidth) =>
  StyleSheet.create({
    container: {
      marginTop: 15,
    },
    card: {
      marginRight: 15,
      width: screenWidth * 0.8,
    },
    image: {
      height: screenWidth * 0.7,
      borderRadius: 10,
    },
    title: {
      marginTop: 10,
      fontSize: 20,
      fontWeight: "bold",
    },
    source: {
      marginTop: 5,
      color: Colour.primary,
    },
  });

export default TopHeadlineSlider;
