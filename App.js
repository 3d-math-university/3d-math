import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

var styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

class HomeScreen extends React.Component {
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

class DepartmentsScreen extends React.Component {
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
class EnroleeScreen extends React.Component {
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
class VirtScreen extends React.Component {
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
class AboutUsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AboutUsScreen</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
          
        />  
      </View>
    );
  }  
}

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Departments: {
    screen: DepartmentsScreen,
  },
  Enrolee: {
    screen: EnroleeScreen,
  },
  Virt: {
    screen: VirtScreen,
  },
  AboutUs: {
    screen: AboutUsScreen,
  },
}, {
    initialRouteName: 'Home',
});

const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


