import React from 'react';
import { Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../../style';

const ImageButton = ({
    style,
    titleStyle,
    width,
    height,
    source,
    onPress,
    title }) => {
  const {
    containerStyle,
    imageStyle,
  } = styles;

  return (
    <TouchableOpacity style={[containerStyle, style]} onPress={onPress}>
        <ImageBackground style={[{ width: width, height: height }, imageStyle]} source={source} >
            <Text style={[titleStyle]}>{title}</Text>
        </ImageBackground>
    </TouchableOpacity>
  );
};

export { ImageButton };
