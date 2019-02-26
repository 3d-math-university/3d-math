import React from 'react';
import {View} from 'react-native';
import { ImageButton } from '../../components';
import styles from '../../style';
export class DepartmentsScreen extends React.Component {
    render() {
      return (
        
        //pictures provided via api
        <View style={{display: 'flex', flexDirection: 'row',  flexWrap: 'wrap'}}>
          <ImageButton
            style={styles.imageButtonStyle}
            /*width={'50%'} */        
            height={'100%'}
            source={require('../../../media/img/aud1.jpg')}        
            onPress={() => this.props.navigation.navigate('Departments')}
         />
          <ImageButton
            style={styles.imageButtonStyle}
          /*  width={'50%'}   */     
          height={'100%'}
            source={require('../../../media/img/aud2.jpg')}
            onPress={() => this.props.navigation.navigate('Departments')}
          />
          <ImageButton
            style={styles.imageButtonStyle}
           /* width={'50%'}    */      
         height={'100%'}
            source={require('../../../media/img/aud3.jpg')}
            onPress={() => this.props.navigation.navigate('Departments')}
          />
          <ImageButton
            style={styles.imageButtonStyle}
           /* width={'50%'}  */        
           height={'100%'}
            source={require('../../../media/img/aud4.jpg')}
            onPress={() => this.props.navigation.navigate('Departments')}
          />
          <ImageButton
            style={styles.imageButtonStyle}
           /* width={'50%'}     */     
          height={'100%'}
            source={require('../../../media/img/aud1.jpg')}
            onPress={() => this.props.navigation.navigate('Departments')}
          
          />
        </View>
      );
    }  
  }