import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from '../style';

export class EnroleeScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>EnroleeScreen</Text>
          <Button 
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }  
  }