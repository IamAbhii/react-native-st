import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetails = ({ title, imageSource, imageScore }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score-{imageScore}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageDetails;
