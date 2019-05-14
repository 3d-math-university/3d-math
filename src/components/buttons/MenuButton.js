import React from 'react';
import { Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../../style';

const MenuButton = ({
    text,
    source,
    onPress
}) => {
    const { menuButtonWrapper, menuButtonText, menuButtonIcon } = styles;

    return (
        <TouchableOpacity style={menuButtonWrapper} onPress={onPress}>
            <ImageBackground source={source} style={menuButtonIcon}></ImageBackground>
            <Text style={menuButtonText}>{text}</Text>
        </TouchableOpacity>
    );
};

export { MenuButton };