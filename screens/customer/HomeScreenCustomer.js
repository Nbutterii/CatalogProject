import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";


export default class HomeScreenCustomer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Test </Text>
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
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
});
