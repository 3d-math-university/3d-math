import React from 'react';
import { View, ScrollView, ImageBackground, Text } from 'react-native';
import { ImageButton} from '../components';
import styles from '../style';

export class DepartmentsScreen extends React.Component {
    render() {
      return (
        <ImageBackground source={require('../../media/img/background.jpg')} style={{width: '100%', height: '100%'}}>
        <ScrollView >
        <View style={styles.departmentsContainer}>
            <ImageButton
                style={styles.departmentsButton}
                titleStyle={styles.departmentsButtonTitle}
                width={'100%'}
                height={'100%'}
                source={require('../../media/img/aud1.jpg')}
                onPress={() => this.props.navigation.navigate('Departments')}
                title="Кафедра алгебры и функционального анализа"
            />
            <ImageButton
                style={styles.departmentsButton}
                titleStyle={styles.departmentsButtonTitle}
                width={'100%'}
                height={'100%'}
                source={require('../../media/img/aud2.jpg')}
                onPress={() => this.props.navigation.navigate('Departments')}
                title="Кафедра дифференциальных уравнений"
            />
            <ImageButton
                style={styles.departmentsButton}
                titleStyle={styles.departmentsButtonTitle}
                width={'100%'}
                height={'100%'}
                source={require('../../media/img/aud3.jpg')}
                onPress={() => this.props.navigation.navigate('Departments')}
                title="Кафедра информатики"
            />
            <ImageButton
                style={styles.departmentsButton}
                titleStyle={styles.departmentsButtonTitle}
                width={'100%'}
                height={'100%'}
                source={require('../../media/img/aud4.jpg')}
                onPress={() => this.props.navigation.navigate('Departments')}
                title="Кафедра математического анализа"
            />
            <ImageButton
                style={styles.departmentsButton}
                titleStyle={styles.departmentsButtonTitle}
                width={'100%'}
                height={'100%'}
                source={require('../../media/img/aud1.jpg')}
                onPress={() => this.props.navigation.navigate('Departments')}
                title="Кафедра прикладной математики"
            />
            </View>

            <Text style={styles.footerText}>CFU Labs &copy; 2019</Text>
        </ScrollView>

      </ImageBackground>
     );
    }
  }
