import React from 'react';
import { Image, ImageBackground, Text, View, Linking } from 'react-native';
import { MainMenuButton } from '../components';
import styles from '../style';


export class HomeScreen extends React.Component {
    render() {
      return (
        <ImageBackground source={require('../../media/img/background.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={styles.homeContainer}>
          <View style={styles.logo}>
            <Image
              style={{height: 125, width: 152}}
              source={require('../../media/img/logo.png')}
            />
            </View>
            <Text style={styles.homePageHeader}>3D МАТФАК</Text>
            <View style={styles.homePageMainMenu}>
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
              onPress={() => {Linking.openURL('https://skycolor.space/wp/panoram/')}}
              />
              <MainMenuButton
                title="О нас"
                onPress={() => this.props.navigation.navigate('AboutUs')}
              />
            </View>
          </View>
          <Text style={styles.footerText}>CFU Labs &copy; 2019</Text>
        </ImageBackground>
      );
    }
  }
