import React, { useState, useEffect } from "react";
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

function TopHeadlineSlider({ newsList }) {
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={newsList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
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
