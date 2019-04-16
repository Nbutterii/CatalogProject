import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Swiper from 'react-native-swiper'
import Category from './components/Explore/Category'
import RecommendedCardItem from '../components/RecommendedCardItem'
import { Actions } from 'react-native-router-flux';

export default class HomeScreenVisitor extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView scrollEventThrottle={16}>

                    <Swiper autoplay={true} style={{height:100}}>
                        <View style={{flex:1}}>
                            <Image
                            style={{flex:1, height:null, width:null, resizeMode: 'contain'}}
                            source={require('../assets/swiper_1.jpg')} />
                        </View>
                        <View style={{flex:1}}>
                        <Image
                            style={{flex:1, height:null, width:null, resizeMode: 'contain'}}
                            source={require('../assets/swiper_2.jpg')} />
                        </View>
                        <View style={{flex:1}}>
                        <Image
                            style={{flex:1, height:null, width:null, resizeMode: 'contain'}}
                            source={require('../assets/swiper_3.jpg')} />
                        </View>
                    </Swiper>
    
                    <View style={{flex:1, backgroundColor: 'white', paddingTop: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                            Category
                        </Text>
    
                        <View style={{ height: 130, marginTop: 20}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                                <TouchableOpacity onPress={() => Actions.CategoryTopsScreenVisitorPage()}>
                                    <Category imageUri={require('../assets/Update1.jpg')} name="Tops" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => Actions.CategoryPantsScreenVisitorPage()}>
                                <Category imageUri={require('../assets/Update2.jpg')} name="Pants" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => Actions.CategorySkirtsScreenVisitorPage()}>
                                <Category imageUri={require('../assets/Update3.jpg')} name="Skirts" />
                                </TouchableOpacity>
                                
                            </ScrollView>
                        </View>
                    </View>
    
                    <ScrollView>
                        <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }} onPress={() => Actions.DetailProductPageCustomer()}>
                            TOP 5
                        </Text>
    
                        <View style={{ flexDirection: 'row'}} >
                            <Text style={{ fontSize: 30, paddingHorizontal: 20 , marginTop: 25 , marginLeft: 13}}>
                                1
                            </Text> 
                            <RecommendedCardItem
                                itemName="Tie-hem top"
                                itemCreator="TOPS"
                                itemPrice="$21.38"
                                savings="7"
                                imageUri={require("../assets/recommended_1.jpg") }
                                rating={5}
                            />
                        </View>
    
                        <View style={{ flexDirection: 'row'}} >
                            <Text style={{ fontSize: 30, paddingHorizontal: 20 , marginTop: 25 , marginLeft: 13}}>
                                2
                            </Text> 
                            <RecommendedCardItem 
                                itemName="Long-sleeved jersey top"
                                itemCreator="T-SHIRTS&TANKTOPS"
                                itemPrice="$30.55"
                                savings="15"
                                imageUri={require("../assets/recommended_3.jpg")}
                                rating={5}
                            />
                        </View>
    
                        <View style={{ flexDirection: 'row'}} >
                            <Text style={{ fontSize: 30, paddingHorizontal: 20 , marginTop: 25 , marginLeft: 13}}>
                                3
                            </Text> 
                            <RecommendedCardItem 
                                itemName="Super Skinny Biker Jeans"
                                itemCreator="JEANS"
                                itemPrice="$42.79"
                                savings="12"
                                imageUri={require("../assets/recommended_2.jpg")}
                                rating={4}
                            />
                        </View>
    
                        <View style={{ flexDirection: 'row'}} >
                            <Text style={{ fontSize: 30, paddingHorizontal: 20 , marginTop: 25 , marginLeft: 13}}>
                                4
                            </Text> 
                            <RecommendedCardItem 
                                itemName="Fine-knit cardigan"
                                itemCreator="CARDIGANS&JAMPERS"
                                itemPrice="$15.26"
                                savings="6"
                                imageUri={require("../assets/recommended_5.jpg")}
                                rating={4}
                            />
                        </View>
    
                        <View style={{ flexDirection: 'row'}} >
                            <Text style={{ fontSize: 30, paddingHorizontal: 20 , marginTop: 25 , marginLeft: 13}}>
                                5
                            </Text> 
                            <RecommendedCardItem 
                                itemName="V-neck dress"
                                itemCreator="DRESSES"
                                itemPrice="$21.38"
                                savings="4"
                                imageUri={require("../assets/recommended_4.jpg")}
                                rating={3}
                            />
                        </View>
                    </ScrollView>

                </ScrollView>
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
