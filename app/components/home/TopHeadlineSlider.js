import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import GlobalApi from "../../services/GlobalApi";
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

  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={newsList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("News", { news: item });
            }}
            style={{
              width: Dimensions.get("screen").width * 0.8,
              marginRight: 15,
            }}
          >
            <Image
              source={{ uri: item.urlToImage }}
              style={{
                height: Dimensions.get("screen").width * 0.7,
                borderRadius: 10,
              }}
            />
            <Text
              numberOfLines={3}
              style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}
            >
              {item.title}
            </Text>
            <Text style={{ marginTop: 5, color: Colour.primary }}>
              {item?.source?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default TopHeadlineSlider;
