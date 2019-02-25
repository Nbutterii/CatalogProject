import React from "react";
import { View, Text, StyleSheet, Picker, Alert, TextInput, TouchableOpacity, Button, Image, ScrollView } from "react-native"
import { Actions } from 'react-native-router-flux';

export default class AddProductScreen extends React.Component {
  render() {
    return (

            <View style={styles.container}>
                 <Text style={{ marginLeft:50, fontSize:30, marginTop: 30, color:'#891C1C' }}>Forgot your password?</Text>
                 <Text style={{ marginLeft:20, fontSize:15, marginTop: 20 }}>Enter your email address to reset your password.</Text>
                 <TextInput style={{ marginTop: 10, padding: 7, backgroundColor:'#fff', borderColor: '#e7e7eb', 
                borderWidth: 1, marginLeft:20, marginRight:20 }} 
                underlineColorAndroid='transparent' placeholder="Email address"/>
                <TouchableOpacity style={{ marginTop:18, backgroundColor: '#891c1c', borderRadius: 5, 
                marginBottom: 20, alignItems: 'center', padding: 10, marginLeft:80, marginRight:80}}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15}}>Agree</Text>
                </TouchableOpacity>
            </View>



    );
  }
}







const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    textArea: {
        height: 100,
        justifyContent: "flex-start",
        marginLeft: 20,
        marginRight: 20,
        backgroundColor:'#fff', 
        borderColor: '#e7e7eb', 
        borderWidth: 1,
        textAlignVertical: "top"
    },
    
});
