import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';


const ImageButton = ({ style, width, height, source, onPress }) => {
  const {
    containerStyle,
    imageStyle
  } = styles;

  return (
    <TouchableOpacity style={[containerStyle, style]} onPress={onPress}>
      <Image style={[{ width: width, height: height }, imageStyle]} source={source} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {

  },
  imageStyle: {
    margin: 0
  }
});

export { ImageButton };