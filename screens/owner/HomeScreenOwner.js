import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Swiper from 'react-native-swiper'
import Category from '../components/Explore/Category'
import { Actions } from 'react-native-router-flux';
import { GetTokenAction } from '../../Action';
import { connect } from 'react-redux'

class HomeScreenOwner extends React.Component {
    render() {
        console.log('ON HomeScreenOwner', this.props.token)
        return (
            <View style={styles.container}>
                <ScrollView scrollEventThrottle={16}>

                    <Swiper autoplay={true} style={{height:100}}>
                        <View style={{flex:1}}>
                            <Image
                            style={{flex:1, height:null, width:null, resizeMode: 'contain'}}
                            source={require('../../assets/swiper_1.jpg')} />
                        </View>
                        <View style={{flex:1}}>
                        <Image
                            style={{flex:1, height:null, width:null, resizeMode: 'contain'}}
                            source={require('../../assets/swiper_2.jpg')} />
                        </View>
                        <View style={{flex:1}}>
                        <Image
                            style={{flex:1, height:null, width:null, resizeMode: 'contain'}}
                            source={require('../../assets/swiper_3.jpg')} />
                        </View>
                    </Swiper>
    
                    <View style={{flex:1, backgroundColor: 'white', paddingTop: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                            Category
                        </Text>
    
                        <View style={{ height: 130, marginTop: 20}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                                <TouchableOpacity onPress={() => Actions.CategoryTopsScreenOwnerPage()}>
                                    <Category imageUri={require('../../assets/Update1.jpg')} name="Tops" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => Actions.CategoryPantsScreenOwnerPage()}>
                                <Category imageUri={require('../../assets/Update2.jpg')} name="Pants" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => Actions.CategorySkirtsScreenOwnerPage()}>
                                <Category imageUri={require('../../assets/Update3.jpg')} name="Skirts" />
                                </TouchableOpacity>
                                
                            </ScrollView>
                        </View>
                    </View>
    
                    <ScrollView>
                        <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }} onPress={() => Actions.DetailProductPageCustomer()}>
                            TOP 5
                        </Text>
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

const mapStateToProps = ({  MenageLogin }) => {
    const { token } = MenageLogin;
        return { token };
  }
export default connect(mapStateToProps)(HomeScreenOwner);
