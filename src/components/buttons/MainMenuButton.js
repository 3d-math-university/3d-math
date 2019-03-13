import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../style';

/*import fonts from '../../fonts';*/

const MainMenuButton = ({ style, backgroundColor, textColor, title, enable = true, onPress }) => {
  const {
    containerStyle,
    MainMenuTextStyle,
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
      <Text style={[{ color: textColor }, MainMenuTextStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};


export { MainMenuButton };
