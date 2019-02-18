import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'
import * as firebase from 'firebase';
import { Router, Scene ,Actions } from 'react-native-router-flux';

const firebaseConfig = {
      apiKey: "AIzaSyDY19gOHkaGHiTdE9eOG8w7zDMyArS8FDc",
    authDomain: "react-firebase-3dc78.firebaseapp.com",
    databaseURL: "https://react-firebase-3dc78.firebaseio.com",
    projectId: "react-firebase-3dc78",
    storageBucket: "react-firebase-3dc78.appspot.com",
};
firebase.initializeApp(firebaseConfig);


export default class SignInScreen extends React.Component {
    async loginWithFacebook() {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('229312021285089', { permissions: ['public_profile'] })
      
        if (type == 'success') {
      
          const credential = firebase.auth.FacebookAuthProvider.credential(token)
      
          firebase.auth().signInWithCredential(credential).catch((error) => {
            console.log(error)
          })
        }
      }

    constructor(props){
      super(props);
      this.state = {
        username: '',
        password: '',
      }
    }

    componentDidMount() {
      this._loadInitialState().done();
    }

    _loadInitialState = async () => {

      var value = await AsyncStorage.getItem('user');
      if (value !== null) {
      Actions.home();
      }

    }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.regform}>
                <Text style={styles.header}>Sign In</Text>

                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name="ios-mail"  style={styles.ColorIcon} underlineColorAndroid={'transparent'}/>
                            <View style={{ flex: 1, marginLeft: 8}}>
                                <TextInput style={styles.textinput} placeholder="Email Address" onChangeText={ (username) => this.setState({username}) } />
                            </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name="ios-lock"  style={styles.ColorIcon} underlineColorAndroid={'transparent'}/>
                            <View style={{ flex: 1, marginLeft: 8}}>
                                <TextInput style={styles.textinput} placeholder="Password" secureTextEntry={true} underlineColorAndroid={'transparent'} onChangeText={ (password) => this.setState({password}) }/>
                            </View>
                    </View>

                    <View>
                    <Text style={{marginLeft: 230}}>Forgot Password?</Text>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={this.login}>
                        <Text style={styles.btntext}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonFacebook} onPress={ () => this.loginWithFacebook()}>
                        <View style={{flexDirection: 'row'}}>
                            <Ionicons name="logo-facebook"  style={styles.ColorIconFacebook} />
                                <View style={{marginLeft: 8, marginTop: 2}}>
                                    <Text style={styles.btntext}>Sign in with Facebook</Text>
                                </View>
                        </View>
                    </TouchableOpacity>

            </View>
        </View>

    );
  }

  login = () => {

     fetch('http://192.168.43.221:8000/rest-auth/login' , {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
     })

     .then((response) => response.json())
     .then((res) => {

      alert(res.message);

      if (res.success === true) {
        AsyncStorage.setItem('user', res.user);
        Actions.home();
      }

      else {
        alert(res.message);
      }

     })
     .done();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  regform: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
  },
  header :{
    fontSize: 35,
    color: '#891c1c',
    paddingBottom: 10,
    marginBottom: 40,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color : '#000000',
    borderBottomColor: '#a8a8a8',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#891c1c',
    marginTop: 30,
    borderRadius: 5

  },
  buttonFacebook: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#3a589e',
    marginTop: 30,
    borderRadius: 2

  },
  buttonGoogle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffa528',
    marginTop: 30,
  },
  btntext: {
    fontSize: 18,
    marginTop: 5,
    color: '#fff',
    fontWeight: 'bold'
  },
  ColorIconFacebook: {
    fontSize: 35,
    color:'#fff'
  },
  ColorIcon: {
    fontSize: 30,
    color:'#a8a8a8',
    marginTop: 6
  }

});
