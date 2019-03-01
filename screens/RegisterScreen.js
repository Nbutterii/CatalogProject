import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import { Actions } from 'react-native-router-flux'

export default class RegisterScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: ''
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


async Register() {

  let collection={}
  collection.username=this.state.username,
  collection.email=this.state.email,
  collection.password1=this.state.password1,
  collection.password2=this.state.password2,
  console.log(collection);

  var url = 'http://10.66.2.134:8000/rest-auth/registration/'

  try{
      const response = await fetch( url, {
          method: 'POST',
          body: JSON.stringify(collection),
          headers: {
              'Content-Type' : 'application/json'
          }
      });
      console.log(response)
      if (response.ok === true) {
        Actions.account_customer();
      }
  }catch (error){
      console.log(error);
   } 
}

  render() {
    return (
        <View style={styles.container}>
        
          <View style={styles.regform}>
            <Text style={styles.header}>Register</Text>

            <View style={{flexDirection: 'row'}}>
              <Ionicons name="ios-contact"  style={styles.ColorIcon} underlineColorAndroid={'transparent'}/>
                <View style={{ flex: 1, marginLeft: 8}}>
                  <TextInput style={styles.textinput} placeholder="Username" 
                  onChangeText={ (username) => this.setState({username}) } />
                </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Ionicons name="ios-mail"  style={styles.ColorIcon} underlineColorAndroid={'transparent'}/>
                <View style={{ flex: 1, marginLeft: 8}}>
                  <TextInput style={styles.textinput} placeholder="Email address" 
                  onChangeText={ (email) => this.setState({email}) } keyboardType={'email-address'} />
                </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Ionicons name="ios-lock"  style={styles.ColorIcon} underlineColorAndroid={'transparent'}/>
                <View style={{ flex: 1, marginLeft: 8}}>
                  <TextInput style={styles.textinput} placeholder="Password (8 or more characters)" 
                  secureTextEntry={true} underlineColorAndroid={'transparent'} onChangeText={ (password1) => this.setState({password1}) }/>
                </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Ionicons name="ios-lock"  style={styles.ColorIcon} underlineColorAndroid={'transparent'}/>
                <View style={{ flex: 1, marginLeft: 8}}>
                  <TextInput style={styles.textinput} placeholder="Confirm password (8 or more characters)" 
                  secureTextEntry={true} underlineColorAndroid={'transparent'} onChangeText={ (password2) => this.setState({password2}) }/>
                </View>
            </View>

            <TouchableOpacity style={styles.buttonRed} onPress={() => this.Register()} >
              <Text style={styles.btntextWhite}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonGray} onPress={() => Actions.SignInPage()}>
              <Text style={styles.btntextGray}>Already have an account?</Text>
            </TouchableOpacity>
          </View>

        </View>
    );
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
  buttonRed: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#891c1c',
    marginTop: 30,
    borderRadius: 5
  },
  buttonGray: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#efefef',
    marginTop: 30,
    borderRadius: 5
  },
  btntextWhite: {
    fontSize: 18,
    marginTop: 5,
    color: '#fff',
    fontWeight: 'bold'
  },
  btntextGray: {
    fontSize: 18,
    marginTop: 5,
    color: '#a8a8a8',
  },
  ColorIcon: {
    fontSize: 30,
    color:'#a8a8a8',
    marginTop: 6
  }
});
