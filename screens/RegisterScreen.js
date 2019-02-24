import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import { Actions } from 'react-native-router-flux'

export default class RegisterScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      Username: '',
      Email: '',
      Password: '',
      ConfirmPassword: ''
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

  Register()
{
  let collection={}
  collection.Username=this.state.Username,
  collection.Email=this.state.Email,
  collection.Password=this.state.Password,
  collection.ConfirmPassword=this.state.ConfirmPassword,
  console.log(collection);

  var url = 'http://10.66.2.134:8000/rest-auth/registration/'

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(collection),
    header:{
      'Content-Type' : 'application/json'
    }
  }).then(res => res.json())
  .then(respon => console.log('Success:', JSON.stringify(Response)))
  .catch(error => console.error('Error:', error));

}


  render() {
    return (
        <View style={styles.container}>
            <View style={styles.regform}>
                <Text style={styles.header}>Register</Text>

                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name="ios-contact"  style={styles.ColorIcon} underlineColorAndroid={'transparent'}/>
                            <View style={{ flex: 1, marginLeft: 8}}>
                                <TextInput style={styles.textinput} placeholder="Username" onChangeText={ (Username) => this.setState({Username}) } />
                            </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name="ios-mail"  style={styles.ColorIcon} underlineColorAndroid={'transparent'}/>
                            <View style={{ flex: 1, marginLeft: 8}}>
                                <TextInput style={styles.textinput} placeholder="Email Address" onChangeText={ (Email) => this.setState({Email}) } keyboardType={'email-address'} />
                            </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name="ios-lock"  style={styles.ColorIcon} underlineColorAndroid={'transparent'}/>
                            <View style={{ flex: 1, marginLeft: 8}}>
                                <TextInput style={styles.textinput} placeholder="Password" secureTextEntry={true} underlineColorAndroid={'transparent'} onChangeText={ (Password) => this.setState({Password}) }/>
                            </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name="ios-lock"  style={styles.ColorIcon} underlineColorAndroid={'transparent'}/>
                            <View style={{ flex: 1, marginLeft: 8}}>
                                <TextInput style={styles.textinput} placeholder="Confirm password" secureTextEntry={true} underlineColorAndroid={'transparent'} onChangeText={ (ConfirmPassword) => this.setState({ConfirmPassword}) }/>
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

// Register = () => {
//    fetch('http://10.66.2.134:8000/rest-auth/registration/' , {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         Username: this.state.Username,
//         Email: this.state.Email,
//         Password: this.state.Password,
//         ConfirmPassword: this.state.ConfirmPassword,
//       })
//    })
   
//    .then((response) => response.json())
   
//    .then((res) => {
    
//     if (res.key !== 0 ) {
//       AsyncStorage.setItem('user', res.user);
//         Actions.home();
//       }

//       else {
//         Actions.product();
//       }

//     })
//       .done();
  
// }




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
