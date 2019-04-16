import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Card } from "react-native-elements";

class CardRecommend extends Component {
    render(){
        return (
                <View style={{flexDirection: 'row', marginLeft: -23}}>
                    <Card>
                        <Image style={{ height: 70, width: 70}}  source={require('../../../assets/Update2.jpg')}/>
                        <Text>Pant</Text>
                        <Text style={{ color:'grey', fontSize: 11}}>Pants</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f'}}>500</Text>
                    </Card>
                    <Card>
                        <Image style={{ height: 70, width: 70}}  source={require('../../../assets/Update2.jpg')}/>
                        <Text>Pant</Text>
                        <Text style={{ color:'grey', fontSize: 11}}>Pants</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f'}}>500</Text>
                    </Card>
                    <Card>
                    <Image style={{ height: 70, width: 70}}  source={require('../../../assets/Update2.jpg')}/>
                        <Text>Pant</Text>
                        <Text style={{ color:'grey', fontSize: 11}}>Pants</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f'}}>500</Text>
                    </Card>
                </View>
        );
    }
}
export default CardRecommend;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});