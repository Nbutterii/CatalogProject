import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';

export default class ChartScreen extends React.Component {

    async Signout() {
        var url = 'http://10.66.2.134:8000/rest-auth/logout/'
        try{
            const response = await fetch( url, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
            console.log(response)
            if (response.status === 200) {
                Actions.visitor();
            }
        }
        catch (error){
            console.log(error);
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={{ alignSelf: 'stretch', alignItems: 'center', 
                padding: 10, backgroundColor: '#891c1c', marginTop: 550, borderRadius: 5, 
                marginLeft:15, marginRight: 15 }} onPress={() => this.Signout()} >
                    <Text style={{ fontSize: 18, marginTop: 5, color: '#fff', fontWeight: 'bold'}}>Sign out</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});
  