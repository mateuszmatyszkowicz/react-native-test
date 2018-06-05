import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const listItem = ({ placeName, placeImage, onItemPressed }) => (
  <TouchableOpacity onPress={onItemPressed}>
    <View style={styles.listItem}>
      <Image source={placeImage} style={styles.placeImage} resizeMode="cover"/>
      <Text>{placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    marginBottom: 5,
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    alignItems: "center",
  },
  placeImage: {
      marginRight: 5,
      width: 30,
      height: 30,
  }
});

export default listItem;
