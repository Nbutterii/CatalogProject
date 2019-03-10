import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from 'react-native-vector-icons'
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

export default class CustomerScreen extends React.Component {

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
    }catch (error){
        console.log(error);
    }
  }
  
    render() {
      return (
            <View style={styles.container}>

                <View header style={{ borderBottomWidth:1, borderBottomColor:'#dee0e2', flexDirection:'row' }}>
                    <Text style={{ flex:1, fontSize: 20, marginLeft: 10, marginTop:20, marginBottom: 20}}>Profile</Text>
                    <Icon name="ios-arrow-forward" style={{ fontSize: 25, paddingTop: 25, marginRight:15 }}/>
                </View>
                <View header style={{ borderBottomWidth:1, borderBottomColor:'#dee0e2', flexDirection:'row' }}>
                    <Text style={{ flex:1, fontSize: 20, marginLeft: 10, marginTop:20, marginBottom: 20}}>Wish list</Text>
                    <Icon name="ios-arrow-forward" style={{ fontSize: 25, paddingTop: 25, marginRight:15 }}/>
                </View>
                
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Text style={styles.btntextBlackContactTitle} >Contact Us</Text>
                    </View>
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <Ionicons name="ios-phone-portrait"  style={styles.ColorIcon}/>
                            <Text style={styles.btntextBlackContact}>Phone: (+66)84-904-8771</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Ionicons name="ios-mail"  style={styles.ColorIcon}/>
                            <Text style={styles.btntextBlackContact}>Email: admin@catalog.co.th</Text>
                        </View>
                        <View>
                            <Text style={styles.btntextBlackContact}>Available Monday to Friday 9am-4pm</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={{ alignSelf: 'stretch', alignItems: 'center', padding: 10, backgroundColor: '#891c1c', 
                marginTop: 80, borderRadius: 5, marginLeft:15, marginRight: 15 }} onPress={() => this.Signout()} >
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
},
buttonRed: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#891c1c',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 7
},
buttonGray: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#efefef',
    marginTop: 30,
    marginLeft:10,
    borderRadius: 7
},
btntextWhite: {
    fontSize: 18,
    marginTop: 5,
    color: '#fff',
    fontWeight: 'bold'
},
btntextBlack: {
    fontSize: 18,
    marginTop: 5,
    color: '#000',
    fontWeight: 'bold'
},
btntextBlackContactTitle: {
    fontSize: 23,
    marginTop: 30,
    color: '#606060',
    marginLeft: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginTop: 150
},
btntextBlackContact: {
    fontSize: 18,
    marginTop: 30,
    color: '#606060',
    marginLeft: 10,
},
TextBlackTitle: {
    fontSize: 18,
    marginTop: 30,
    color: '#000',
    marginLeft: 10,
    fontWeight: 'bold'
},
ColorIcon: {
    fontSize: 30,
    color:'#606060',
    marginTop: 25,
}

});
  