import React from 'react';
import {View, Text, Button } from 'react-native';
import styles from '../../style';

export class DepartmentsScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>DepartmentsScreen</Text>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }  
  }