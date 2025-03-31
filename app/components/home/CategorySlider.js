import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
} from "react-native";
import Colour from "../../shared/Colour";

function CategorySlider() {
  const [active, setActive] = useState(1);
  const categoryList = [
    { id: 1, name: "Latest" },
    { id: 2, name: "World" },
    { id: 3, name: "Business" },
    { id: 4, name: "Sports" },
  ];

  const onCategoryClick = (id) => {
    setActive(id);
  };

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onCategoryClick(item.id)}>
            <Text
              style={
                item.id == active ? styles.selectText : styles.unselectText
              }
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  unselectText: {
    marginRight: 10,
    fontSize: 17,
    fontWeight: "800",
    color: "black",
  },
  selectText: {
    marginRight: 10,
    fontSize: 17,
    fontWeight: "800",
    color: Colour.primary,
  },
});

export default CategorySlider;
