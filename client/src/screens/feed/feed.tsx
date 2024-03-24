import React from "react";
import { View, Text, Alert, Button } from "react-native";

const Feed = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Feed</Text>
    <Button
      title="Press me"
      onPress={() => Alert.alert("Call Upload Button Handler")}
    />
  </View>
);

export default Feed;
