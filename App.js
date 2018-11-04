/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, 
  Image, TouchableOpacity, TextInput} from 'react-native';
import {createStackNavigator} from 'react-navigation'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



type Props = {};
class LoginScreen extends Component<Props> {



  render() {

    return (
      <View style={styles.container}>
        <Image source={require('./2XLogo.png')} />
        <Text style={styles.welcome}>Welcome to 2X</Text>
        <Text style={styles.instructions}>The healthy habit forming app</Text>
        {//<Text style={styles.instructions}>{instructions}</Text>
        }
        <TextInput
          placeholder='username'
          placeholderTextColor='rgba(10,10,10,.3)'
          underlineColorAndroid='transparent'
          returnKeyType='next'
          autoCapitalize='none'
          style={styles.input}
          />

          <TextInput
          placeholder='password'
          placeholderTextColor='rgba(10,10,10,.3)'
          underlineColorAndroid='transparent'
          returnKeyType='next'
          secureTextEntry
          autoCapitalize='none'
          style={styles.input}
          />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress = {()  => this.props.navigation.navigate('Home')}
          title = "Login">
            <Text style={styles.buttonText}>LOGIN</Text>

        </TouchableOpacity>
      </View>
    );
  }
}

class HomeScreen extends Component<Props> {

  static navigationOptions = {
    header: null
  }

  constructor() {
    super();
    this.state = {
      imgOpacity: 0,
      isSad: true
    }

    this.handlePress = this.handlePress.bind(this);
  }

  toggleImage() {
    if (this.state.imgOpacity === 1) {
      this.setState({
        imgOpacity: 0
      })
    } else {
      this.setState({
        imgOpacity: 1
      })
    }
  }

  handlePress()
  {
     this.setState({isSad: false});
  }


  render() {

        let pic;

        if(this.state.isSad){
          pic = <Image style={styles.sadtooth} source={require('./sadtooth.png')} />;
        }
        else{
          pic = <Image style={styles.happytooth} source={require('./happytooth.png')} />;
        }

    return (
      <View style={styles.container}>
        
        <Image source={require('./2XLogo.png')} />
        <Text style={styles.brushedyet}>Have you brushed yet, Denice?</Text>


        <TouchableOpacity onPress = {()  => this.handlePress()}>
          {pic}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainerOut}
          onPress = {()  => this.props.navigation.navigate('Login')}
          title = "Login">
            <Text style={styles.buttonText}>Sign Out</Text>

        </TouchableOpacity>


      </View>
    );
  }
}

export default createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen
})

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  brushedyet: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  sadtooth: {
    marginTop: 10,
    width: 220,
    height: 250,
  },
  happytooth: {
    marginTop: 10,
    width: 190,
    height: 250,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 15,
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    height: 50,
    width: 370,
  },
  buttonContainerOut: {
    backgroundColor: '#2980b9',
    height: 50,
    width: 370,
    marginTop: 50
  },
  buttonText: {
    paddingVertical: 15,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  input: {
    height: 40,
    width: 370,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderColor: 'rgba(10,10,10,1)',
    borderWidth: 0.2,
    marginBottom: 10,
    color: 'rgba(0,0,0,.8)',
    paddingHorizontal: 10
  }
});
