import React from 'react';
import {View, Text, Button } from 'react-native';
import styles from '../../style';

export class VirtScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>VirtScreen</Text>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }  
  }
  