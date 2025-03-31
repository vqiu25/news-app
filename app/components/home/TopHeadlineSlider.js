import React, { useEffect } from "react";
import { View, Text } from "react-native";
import GlobalApi from "../../services/GlobalApi";

function TopHeadlineSlider() {
  useEffect(() => {}, []);

  const getTopHeadline = async () => {
    try {
      const result = (await GlobalApi.getTopHeadline()).data;
      console.log(result);
    } catch (error) {
      console.error("Error fetching top headlines:", error);
    }
  };

  return (
    <View>
      <Text>Top Headline</Text>
    </View>
  );
}

export default TopHeadlineSlider;
