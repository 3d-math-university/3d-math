import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from '../../style';


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

export { ImageButton };
