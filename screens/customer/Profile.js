import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            username: ''
        }
    }

    updateValue(text , field){
        if(field == 'first_name'){
            this.setState({
              first_name : text
            })
        }
        else if(field == 'last_name'){
            this.setState({
              last_name : text
            })
        }
    }

    EditProfile()
    {
        let collection={
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            }
        console.log(collection);
        fetch(`http://161.246.4.226:8009/rest-auth/user/`, {
            method: 'PATCH',
            body: JSON.stringify(collection),
            headers:{
                'Content-Type': 'application/json',
                Authorization : `Token ${this.props.token}`
            }
        }).then((res) => { console.log(res) })
        Actions.CustomerPage();
    }

    componentDidMount() {
        try{
            axios.get(`http://161.246.4.226:8009/rest-auth/user/`, {
            headers:{
                Authorization : `Token ${this.props.token}`
                }
            })
        .then(res => {
            console.log('pass',res.data)
            this.setState({
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                email: res.data.email,
                username: res.data.username
              });
        })
        }
        catch(err){
        console.log(err)
        }
    }

    render(){
        console.log('==Profile==', this.props.token)
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <View header style={{backgroundColor: '#ffffff', marginLeft:20, marginTop: 50 }}>

                    <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10, color: '#891C1C' }}>First Name</Text>
                    <TextInput style={{ padding: 7, backgroundColor:'#fff', borderColor: '#e7e7eb', 
                    borderWidth: 1, marginRight:20, marginTop: 5 }} 
                    underlineColorAndroid='transparent' onChangeText={(text) => this.updateValue(text, 'first_name')}> 
                        {this.state.first_name}
                    </TextInput>

                    <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10, color: '#891C1C' }}>Last Name</Text>
                    <TextInput style={{ padding: 7, backgroundColor:'#fff', borderColor: '#e7e7eb', 
                    borderWidth: 1, marginRight:20, marginTop: 5 }} 
                    underlineColorAndroid='transparent' onChangeText={(text) => this.updateValue(text, 'last_name')}>
                        {this.state.last_name}
                    </TextInput>

                    <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10, color: '#891C1C' }}>Username</Text>
                    <Text style={{ fontSize: 16, fontWeight: '200', marginTop: 2 , marginBottom: 10 }}>{this.state.username}</Text>

                    <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10, color: '#891C1C' }}>E-mail</Text>
                    <Text style={{ fontSize: 16, fontWeight: '200', marginTop: 2 , marginBottom: 10 }}>{this.state.email}</Text>

            </View>
                
                    <TouchableOpacity style={{ alignItems: 'center', padding: 8, position: 'absolute', left:55, right: 55, bottom: 100,
                    backgroundColor: '#891c1c', borderRadius: 5 }} onPress={() => this.EditProfile()}>
                        <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold'}}>Change my profile</Text>
                    </TouchableOpacity>

            </View>
        )
    }
        
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStandard: {
    fontSize: 18, 
    marginBottom: 10, 
    color: 'white'
  },
  countdown: {
    fontSize: 40,
    color: 'white'
  }
});

const mapStateToProps = ({  MenageLogin }) => {
    const { token } = MenageLogin;
        return { token };
  }
  export default connect(mapStateToProps)(Profile);