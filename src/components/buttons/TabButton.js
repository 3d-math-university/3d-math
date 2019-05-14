import React from 'react';
import { Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../../style';

const TabButton = ({
    source,
    header,
    onPress
}) => {
    const {tabButtonWrapper, tabButtonImage, tabButtonText} = styles;

    return (
        <TouchableOpacity style={tabButtonWrapper} onPress={onPress}>
            <ImageBackground source={source} style={tabButtonImage}></ImageBackground>
            <Text style={tabButtonText}>{header}</Text>
        </TouchableOpacity>
    );
};

export { TabButton };