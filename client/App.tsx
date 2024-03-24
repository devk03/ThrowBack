import React from "react";
import { View, Text, FlatList, Dimensions, StyleSheet } from "react-native";
import Feed from "./src/screens/feed/feed";
import User from "./src/screens/user/user";
import Gallery from "./src/screens/gallery/gallery";

const pages = [
  { key: "Feed", component: "Feed" },
  { key: "Gallery", component: "Gallery" },
  { key: "User", component: "User" },
];

const components = {
  Feed: Feed,
  Gallery: Gallery,
  User: User,
};
interface Item {
  key: string;
  component: string;
}
const renderItem = ({ item }: { item: Item }) => {
  const PageComponent: React.ComponentType<any> =
    components[item.component as keyof typeof components];
  if (!PageComponent) return null; // Return null or a fallback component if component not found

  return (
    <View style={{ width: Dimensions.get("window").width }}>
      <PageComponent />
    </View>
  );
};

const App = () => {
  return (
    <FlatList
      data={pages}
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 22,
  },
});

export default App;
