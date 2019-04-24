import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from 'react-native-vector-icons'
import { Actions } from 'react-native-router-flux';

export default class ContactScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                
                <Image
                style={{height:100, width:200}}
                source={require('../assets/CatalogCon.png')} />
            
                <View>
                    <Text style={styles.TextBlackTitle}>Access your Wishlist on any of your devices.</Text>
                </View>

                <View style={{ flexDirection: 'row'}} >
                    <TouchableOpacity style={styles.buttonGray} onPress={() => Actions.RegisterPage()}>
                        <Text style={styles.btntextBlack}>Create Account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonRed} onPress={() => Actions.SignInPage()}>
                        <Text style={styles.btntextWhite}>Sign In</Text>
                    </TouchableOpacity>
                </View>
    
                {/* <View>
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
                        <Text style={styles.btntextBlackContact}>Available Monday to Friday 9am-4pm </Text>
                    </View>
                </View> */}
    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    buttonRed: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 15,
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
        padding: 15,
        backgroundColor: '#efefef',
        marginTop: 30,
        marginLeft:10,
        borderRadius: 7
    },
    btntextWhite: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold'
    },
    btntextBlack: {
        fontSize: 15,
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
        fontSize: 15,
        marginTop: 30,
        color: '#606060',
        marginLeft: 10
    },
    TextBlackTitle: {
        fontSize: 15,
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
  