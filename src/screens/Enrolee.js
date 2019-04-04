import React from 'react';
import { Button, Text, View, ScrollView } from 'react-native';
import styles from '../style';

export class EnroleeScreen extends React.Component {
    render() {
      return (
            <ImageBackground source={require('../../media/img/background.jpg')} style={{width: '100%', height: '100%'}}>

            <ScrollView style={styles.container}>
                // <Text>EnroleeScreen</Text>
                // <Button
                //     title="Go back"
                //     onPress={() => this.props.navigation.goBack()}
                // />
            </ScrollView>
        );
    }
}
