import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import RecommendedCardItem from '../../components/RecommendedCardItem'
import { Actions } from 'react-native-router-flux';

export default class ProductScreenOwner extends React.Component {
    render() {
        return (
            <View style={styles.container}>
        
                <View  style={{position: 'absolute', left:0, right:0, top:0, height:70, backgroundColor:'#891C1C', flexDirection:'row',
                 alignItems:'center', paddingHorizontal: 5, position: 'relative'}}>
                    <TouchableOpacity>
                        <View style={{ width: 100, backgroundColor: '#e7e7eb', height:50, borderRadius:4, padding: 10}}>
                            <Text style={{fontSize:15}}>Select</Text>
                            <Text style={{fontWeight: 'bold'}}>Category ▼</Text>
                        </View>
                    </TouchableOpacity>
        
                    <View style={{ flex: 1, height: "100%", marginLeft: 5, justifyContent: 'center' }}>
                        <View style={{ backgroundColor: 'white',paddingHorizontal: 10, borderRadius: 4, flexDirection: 'row', height:50}}>
                            <Icon name="ios-search" style={{ fontSize: 20, paddingTop: 15}}/>
                            <TextInput placeholder="Search" style={{ fontSize: 20, marginLeft: 5 }}/>
                        </View> 
                    </View>
                </View>
        
                <ScrollView>
                    <View style={{ marginLeft: 5, marginRight: 5, marginTop: 15 }}>
                        <View header style={{borderBottomWidth:1,borderBottomColor:'#dee0e2', flexDirection: 'row'}}>
                            <Text style={{ flex: 1, fontSize: 20, marginLeft: 10, marginTop:8}}>6 ITEMS</Text>
                            <TouchableOpacity style={{ flex: 1,backgroundColor: '#891c1c', borderRadius: 20, marginBottom: 20, alignItems: 'center', padding: 10, marginLeft:190, marginRight:20}} onPress={() => Actions.AddProductPage()}>
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15}}>+Add</Text>
                            </TouchableOpacity>
                        </View>
                        <RecommendedCardItem
                            itemName="Tie-hem top"
                            itemCreator="TOPS"
                            itemPrice="$21.38"
                            savings="7"
                            imageUri={require("../../assets/recommended_1.jpg") }
                            rating={5}
                        />
                        <RecommendedCardItem 
                            itemName="Super Skinny Biker Jeans"
                            itemCreator="JEANS"
                            itemPrice="$42.79"
                            savings="12"
                            imageUri={require("../../assets/recommended_2.jpg")}
                            rating={4}
                        />
                        <RecommendedCardItem 
                            itemName="Long-sleeved jersey top"
                            itemCreator="T-SHIRTS&TANKTOPS"
                            itemPrice="$30.55"
                            savings="15"
                            imageUri={require("../../assets/recommended_3.jpg")}
                            rating={5}
                        />
                        <RecommendedCardItem 
                            itemName="V-neck dress"
                            itemCreator="DRESSES"
                            itemPrice="$21.38"
                            savings="4"
                            imageUri={require("../../assets/recommended_4.jpg")}
                            rating={3}
                        />
                        <RecommendedCardItem 
                            itemName="Fine-knit cardigan"
                            itemCreator="CARDIGANS&JAMPERS"
                            itemPrice="$15.26"
                            savings="6"
                            imageUri={require("../../assets/recommended_5.jpg")}
                            rating={4}
                        />
                        <RecommendedCardItem
                            itemName="Tie-hem top"
                            itemCreator="TOPS"
                            itemPrice="$21.38"
                            savings="7"
                            imageUri={require("../../assets/recommended_1.jpg") }
                            rating={5}
                        />
                    </View>
                </ScrollView>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }, 
});
