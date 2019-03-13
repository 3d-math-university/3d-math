import React from 'react';
import { View, ImageBackground } from 'react-native';
import { ImageButton} from '../components';
import styles from '../style';


export class DepartmentsScreen extends React.Component {
    render() {
      return (        
        //pictures provided via api        
        <ImageBackground source={require('../../media/img/background.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.DepartmentsContainer}>
          <ImageButton
            style={styles.imageButtonDepart}
            titleStyle={styles.imageButtonDepartTitle}
            width={'100%'} 
            height={'100%'}
            source={require('../../media/img/aud1.jpg')}        
            onPress={() => this.props.navigation.navigate('Departments')}
            title="Кафедра математики и информатики"
         />
          <ImageButton
            style={styles.imageButtonDepart}
            titleStyle={styles.imageButtonDepartTitle}
            width={'100%'}        
            height={'100%'}
            source={require('../../media/img/aud2.jpg')}
            onPress={() => this.props.navigation.navigate('Departments')}
            title="Кафедра математики и информатики"
          />
          <ImageButton
            style={styles.imageButtonDepart}
            titleStyle={styles.imageButtonDepartTitle}
            width={'100%'}      
            height={'100%'}
            source={require('../../media/img/aud3.jpg')}
            onPress={() => this.props.navigation.navigate('Departments')}
            title="Кафедра математики и информатики"
          />
          <ImageButton
            style={styles.imageButtonDepart}
            titleStyle={styles.imageButtonDepartTitle}
            width={'100%'}       
            height={'100%'}
            source={require('../../media/img/aud4.jpg')}
            onPress={() => this.props.navigation.navigate('Departments')}
            title="Кафедра математики и информатики"
          />
          <ImageButton
            style={styles.imageButtonDepart}
            titleStyle={styles.imageButtonDepartTitle}
            width={'100%'}     
            height={'100%'}            
            source={require('../../media/img/aud1.jpg')}
            onPress={() => this.props.navigation.navigate('Departments')}
            title="Кафедра математики и информатики"
          
          />
        </View>
      </ImageBackground>
     );
    }  
  }