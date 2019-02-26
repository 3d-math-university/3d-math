import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

/*import fonts from '../../fonts';*/

const MainMenuButton = ({ style, backgroundColor, textColor, title, enable = true, onPress }) => {
  const {
    containerStyle,
    textStyle
  } = styles;

  return (
    <TouchableOpacity
        style={[{
          opacity: enable ? 1 : 0.5,
          backgroundColor
        }, containerStyle, style]}
        disabled={!enable}
        onPress={onPress}
    >
      <Text style={[{ color: textColor }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    borderRadius: 5,
    margin: 5,
    height: 30
  },
  textStyle: {
    /*fontFamily: fonts.regular,*/
    fontSize: 16,
    margin: 10
  }
});

export { MainMenuButton };