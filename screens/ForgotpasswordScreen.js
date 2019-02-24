import React from "react";
import { View, Text, StyleSheet, Picker, Alert, TextInput, TouchableOpacity, Button, Image, ScrollView } from "react-native"

export default class AddProductScreen extends React.Component {
  render() {
    return (

            <View style={styles.container}>

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
