import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../style';

/*import fonts from '../../fonts';*/

const MainMenuButton = (
    {   style,
        backgroundColor,
        textColor,
        title,
        enable = true,
        onPress }) => {
          const {
              containerStyle,
              homePageLink
          } = styles;

  return (
    <TouchableOpacity
        style = {[{
            opacity: enable ? 1 : 0.25, 
            backgroundColor
        }, containerStyle, style]}

        disabled = { !enable }
        onPress = { onPress }
    >
      <Text style={[{ color: textColor }, homePageLink]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};


export { MainMenuButton };
