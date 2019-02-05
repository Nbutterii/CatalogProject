import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native"
import Swiper from 'react-native-swiper'
import { Card } from "react-native-elements";

const DetailProductScreen = () => {
    return (

        <ScrollView scrollEventThrottle={16}>
            <View style={{ backgroundColor: '#fff' }}>
                <Swiper  style={{ height: 400, marginBottom: 50 }}>
                    <View style={{  width: 300, height: 400, marginTop:20, marginLeft:55, backgroundColor: 'white'}}>
                        <Image
                        style={{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd'}}
                        source={require('../assets/Product1.jpg')} />
                    </View>
                    <View style={{  width: 300, height: 400, marginTop:20, marginLeft:55, backgroundColor: 'white'}}>
                        <Image
                        style={{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd'}}
                        source={require('../assets/Product2.jpg')} />
                    </View>
                    <View style={{  width: 300, height: 400, marginTop:20, marginLeft:55, backgroundColor: 'white'}}>
                        <Image
                        style={{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd'}}
                        source={require('../assets/Product3.jpg')} />
                    </View>
                    <View style={{ width: 300, height: 400, marginTop:20, marginLeft:55, backgroundColor: 'white'}}>
                        <Image
                        style={{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd'}}
                        source={require('../assets/Product4.jpg')} />
                    </View>
                </Swiper>
            </View>

            <Card>
                <View header style={{borderBottomWidth:1,borderBottomColor:'#dee0e2'}}>
                    <Text style={{fontSize: 24, marginLeft: 10, marginBottom: 20, fontWeight: '700'}}>Tie-hem top</Text>
                </View>
                
                <View header style={{borderBottomWidth:1,borderBottomColor:'#dee0e2'}}>
                    <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>PRICE</Text>
                    <Text style={{ fontSize: 16, fontWeight: '200', marginTop: 2, color: '#c4402f' }}>$21.38</Text>
                    <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>DESCRIPTION</Text>
                    <Text style={{ fontSize: 15, fontWeight: '200', marginTop: 2 }}>Top in a crinkled weave with a decorative tie at the waist and long sleeves with ribbed cuffs.</Text>
                    <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>DETAILS</Text>
                    <Text style={{ fontSize: 15, fontWeight: '200', marginTop: 2 , marginBottom: 15}}>98% polyester, 2% elastane. Machine wash at 30˚</Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <View style={{width: 80, height: 80, marginTop:20, backgroundColor: 'white'}}>
                        <Image
                        style={{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1}}
                            source={require('../assets/emotionhappy_icom.png')} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 35, fontWeight: '500', marginTop: 35, marginLeft: 5 }}>1</Text>
                    </View>


                    <View style={{width: 80, height: 80, marginTop:20, marginLeft: 15, backgroundColor: 'white'}}>
                            <Image
                            style={{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1}}
                                source={require('../assets/emotionwow_icom.png')} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 35, fontWeight: '500', marginTop: 35, marginLeft: 5 }}>2</Text>
                    </View>


                    <View style={{width: 80, height: 80, marginTop:20, marginLeft: 15, backgroundColor: 'white'}}>
                            <Image
                            style={{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1}}
                                source={require('../assets/emotionbad_icom.png')} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 35, fontWeight: '500', marginTop: 35, marginLeft: 5 }}>3</Text>
                    </View>
                </View>

            </Card>

        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default DetailProductScreen;