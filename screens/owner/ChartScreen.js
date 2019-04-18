import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';
import { GetTokenAction } from '../../Action';
import { connect } from 'react-redux'

class ChartScreen extends React.Component {

    async Signout(token) {
        console.log(this.props.token)
        const response = await fetch(`http://10.66.4.239:8000/rest-auth/logout/` , {
            method: 'POST',
            headers: {
                Authorization : `Token ${this.props.token}`,
            }   
                
        });
            this.props.dispatch({
                type: 'Logout'
            })
            console.log(response)
                if (response.status === 200) {
                    Actions.visitor();
                }
    
    }

    render() {
        console.log('ON ChartScreen', this.props.token)
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
const mapStateToProps = ({  MenageLogin }) => {
    const { token } = MenageLogin;
        return { token };
  }
export default connect(mapStateToProps)(ChartScreen);
  