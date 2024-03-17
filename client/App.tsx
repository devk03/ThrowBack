import React from "react";
import { View, FlatList, Text, Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const data = [
  { key: "Page 1", color: "tomato" },
  { key: "Page 2", color: "skyblue" },
  { key: "Page 3", color: "limegreen" },
  // Add more pages as needed
];

const renderItem = ({ item }) => (
  <View style={[styles.pageStyle, { backgroundColor: item.color }]}>
    <Text style={styles.textStyle}>{item.key}</Text>
  </View>
);

const App = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.key}
    />
  );
};

const styles = StyleSheet.create({
  pageStyle: {
    width: width, // Each page has the width of the screen
    justifyContent: "center", // Center the content vertically
    alignItems: "center", // Center the content horizontally
  },
  textStyle: {
    fontSize: 24,
    color: "white",
  },
});

export default App;
