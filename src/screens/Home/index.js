import React from 'react';
import {View, Text, Button } from 'react-native';
import styles from '../../style';

export class HomeScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>МАТФАК 3D</Text>
          
          <View style={styles.button}>
            <Button
             title="Кафедры"
              onPress={() => this.props.navigation.navigate('Departments')}
           />
          </View>
          <View style={styles.button}>
            <Button
            title="Абитуриенту"
            onPress={() => this.props.navigation.navigate('Enrolee')}
            /></View>
            <View style={styles.button}>
              <Button
            title="Виртуальный тур"
            onPress={() => this.props.navigation.navigate('Virt')}
            /></View>
            <View style={styles.button}>
              <Button
            title="О нас"
            onPress={() => this.props.navigation.navigate('AboutUs')}
          />
          </View>
        </View>
      );
    }  
  }