import React from "react";
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from 'native-base';

const placeDetail = ({ navigation: { state: { params: place}}, onItemDelete}) => (
  <View style={styles.container}>
    <View>
      <Image source={place.image} style={styles.placeImage} />
      <Text style={styles.placeName}>{place.name}</Text>
    </View>
    <TouchableOpacity onPress={onItemDelete}>
      <View>
        <Icon size={30} name="ios-trash" color="red" />
      </View>
    </TouchableOpacity>
  </View>
);


const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

export default placeDetail;
