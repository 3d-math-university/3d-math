import React from 'react';
import {View, Text, Image } from 'react-native';
import styles from '../../style';
import { MainMenuButton } from '../../components';


export class HomeScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
         <Image
          style={{height: 125, width: 152}}
          source={require('../../../media/img/logo.png')}
        />
          <Text>МАТФАК 3D</Text>
          
          <View style={styles.buttons}>
            <MainMenuButton
             title="Кафедры"
              onPress={() => this.props.navigation.navigate('Departments')}
           />

            <MainMenuButton
            title="Абитуриенту"
            onPress={() => this.props.navigation.navigate('Enrolee')}
            />
              <MainMenuButton
            title="Виртуальный тур"
            onPress={() => this.props.navigation.navigate('Virt')}
            />
              <MainMenuButton
            title="О нас"
            onPress={() => this.props.navigation.navigate('AboutUs')}
          />
          </View>
        </View>
      );
    }  
  }