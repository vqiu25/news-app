import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Colour from "../../shared/Colour";
import { useNavigation } from "@react-navigation/native";

function HeadlineList({ newsList }) {
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={{
          height: 1,
          backgroundColor: Colour.lightGrey,
          marginTop: 10,
        }}
      />
      {newsList.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate("News", { news: item })}
          style={{
            marginTop: 15,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            source={{ uri: item.urlToImage }}
            style={{ width: 130, height: 130, borderRadius: 10 }}
          />
          <View style={{ marginLeft: 10, width: "60%" }}>
            <Text
              numberOfLines={4}
              style={{ fontSize: 18, fontWeight: "bold" }}
            >
              {item.title}
            </Text>
            <Text style={{ color: Colour.primary }}>{item?.source?.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default HeadlineList;
