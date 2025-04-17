import { React, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Colour from "../shared/Colour";
import { Ionicons } from "@expo/vector-icons";

function News() {
  const news = useRoute().params.news;
  const navigation = useNavigation();
  useEffect(() => {
    console.log(news);
  });

  return (
    <View style={{ backgroundColor: "white", flex: 1, paddingHorizontal: 20 }}>
      <View
        style={{
          marginTop: 10,
          marginBottom: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={36} color={Colour.primary} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="share" size={36} color={Colour.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: news.urlToImage }}
        style={{ width: "100$", height: 300, borderRadius: 15 }}
      />
      <Text style={{ marginTop: 10, fontSize: 22, fontWeight: "bold" }}>
        {news.title}
      </Text>
      <Text style={{ marginTop: 10, color: Colour.primary, fontSize: 16 }}>
        {news.source.name}
      </Text>
      <Text style={{ marginTop: 10, fontSize: 18, color: Colour.grey }}>
        {news.description}
      </Text>
      <Text
        style={{
          marginTop: 10,
          fontSize: 18,
          color: Colour.primary,
          fontWeight: "bold",
        }}
      >
        Read More
      </Text>
    </View>
  );
}
export default News;
