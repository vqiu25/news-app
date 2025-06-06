import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Colour from "../../shared/Colour";
import { useNavigation } from "@react-navigation/native";

/**
 * Displays a vertical list of news headlines.
 * Each item is clickable and navigates to a detailed news screen.
 *
 * @param {Object} props
 * @param {Array<Object>} props.newsList - Array of news article objects to display.
 * @returns {JSX.Element} A list of headline cards.
 */
function HeadlineList({ newsList }) {
  const navigation = useNavigation();

  return (
    <View>
      {/* Divider line to separate top headlines from remaining list */}
      <View style={styles.divider} />

      {/* 
        Render vertical list of news items. 
        Each card displays a thumbnail, title, and source name.
        Navigates to the "News" screen with the full article when pressed.
      */}
      {newsList.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate("News", { news: item })}
          style={styles.card}
        >
          {/* Thumbnail image for the article */}
          <Image source={{ uri: item.urlToImage }} style={styles.image} />

          {/* News title and source*/}
          <View style={styles.textContainer}>
            <Text numberOfLines={4} style={styles.title}>
              {item.title}
            </Text>
            <Text style={styles.source}>{item?.source?.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: Colour.lightGrey,
    marginTop: 10,
  },
  card: {
    marginTop: 15,
    flexDirection: "row",
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
    width: "60%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  source: {
    color: Colour.primary,
  },
});

export default HeadlineList;
