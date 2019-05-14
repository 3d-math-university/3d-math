import React, { Component } from 'react';
import {View } from "react-native";
import {TabButton} from "./buttons/TabButton";
import styles from '../style';

export class TabBar extends Component{
    const changeScreen = () => {
      alert('triggered');
    };

    render() {
        const {tabBarWrapper} = styles;

        return(
            <View style={tabBarWrapper}>
                <TabButton source={require('../../media/icons/tabbar/art.png')}  header="История" onPress={this.changeScreen}/>
                <TabButton source={require('../../media/icons/tabbar/book.png')} header="Дисциплины" onPress={this.changeScreen}/>
                <TabButton source={require('../../media/icons/tabbar/tree.png')} header="Перспективы" onPress={this.changeScreen}/>
                <TabButton source={require('../../media/icons/tabbar/star.png')} header="Достижения" onPress={this.changeScreen}/>
            </View>
        )
    }
}
