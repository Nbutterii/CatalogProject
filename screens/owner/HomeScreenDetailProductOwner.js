import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from "react-native-elements";
import axios from 'axios';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper'

class HomeScreenDetailProductOwner extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            dataSource: [],
        }
    }

    componentDidMount() {
        try{
            axios.get(`http://161.246.4.226:8009/shop/product/`)
        .then(res => {
            console.log('pass',res.data)
            this.setState({ dataSource : res.data});
        })
        }
        catch(err){
        console.log(err)
        }
    }

    render() {
        return (
            <ScrollView scrollEventThrottle={16}>

                <View style={{backgroundColor: '#fff', height: 450, marginBottom: 10}}>
                        <Swiper>
                            <View style={{flex:1}}>
                                <Image
                                style={{flex:1, height:null, width:null, resizeMode: 'contain'}}
                                source={{uri : this.props.val.image1}} />
                            </View>
                            <View style={{flex:1}}>
                            <Image
                                style={{flex:1, height:null, width:null, resizeMode: 'contain'}}
                                source={{uri : this.props.val.image2}} />
                            </View>
                            <View style={{flex:1}}>
                            <Image
                                style={{flex:1, height:null, width:null, resizeMode: 'contain'}}
                                source={{uri : this.props.val.image3}} />
                            </View>
                            <View style={{flex:1}}>
                            <Image
                                style={{flex:1, height:null, width:null, resizeMode: 'contain'}}
                                source={{uri : this.props.val.image4}} />
                            </View>
                        </Swiper> 
                </View>

                <Card>
                    <View header style={{ borderBottomWidth: 1, borderBottomColor:'#dee0e2'}}>
                        <TouchableOpacity onPress={() => Actions.EditProductPage()} style={{ zIndex: 1, lignSelf: 'flex-end', position: 'absolute', right: 10 }}>
                            <Icon name="ios-more" style={{ fontSize: 24, paddingTop: 8 }}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 24, marginLeft: 2, marginBottom: 20, fontWeight: '700', marginTop: 25 }}>{this.props.val.name}</Text>
                        </View>
                    </View>
                    
                    <View header style={{borderBottomWidth:1,borderBottomColor:'#dee0e2'}}>
                        <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>CATEGORY</Text>
                        <Text style={{ fontSize: 16, fontWeight: '200', marginTop: 2}}>{this.props.val.category}</Text>
                        <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>COLOR</Text>
                        <Text style={{ fontSize: 16, fontWeight: '200', marginTop: 2}}>{this.props.val.color}</Text>
                        <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>PRICE</Text>
                        <Text style={{ fontSize: 16, fontWeight: '200', marginTop: 2}}>{this.props.val.price}</Text>
                        <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>DESCRIPTION</Text>
                        <Text style={{ fontSize: 16, fontWeight: '200', marginTop: 2 , marginBottom: 10 }}>{this.props.val.description}</Text>
                    </View>


                    <View style={{flexDirection: 'row',justifyContent: 'center'}}>
                        <View style={{width: 80, height: 80, marginTop:20, backgroundColor: 'white'}}>
                            <Image
                            style={{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1}}
                                source={require('../../assets/emotionwow_icom.png')} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 35, fontWeight: '500', marginTop: 35 }}>{ this.props.val.total_Wow }</Text>
                        </View>
    
    
                        <View style={{width: 80, height: 80, marginTop:23, backgroundColor: 'white'}}>
                                <Image
                                style={{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1}}
                                    source={require('../../assets/emotionhappy_icom.png')} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 35, fontWeight: '500', marginTop: 35 }}>{ this.props.val.total_Happy }</Text>
                        </View>
    
    
                        <View style={{width: 80, height: 80, marginTop:20, backgroundColor: 'white'}}>
                                <Image
                                style={{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1}}
                                source={require('../../assets/emotionbad_icom.png')} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 35, fontWeight: '500', marginTop: 35 }}>{ this.props.val.total_Dislike }</Text>
                        </View>
                    </View>
                </Card>
            </ScrollView>
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
});
  
const mapStateToProps = ({ MenageReducers }) => {
    const { val } = MenageReducers;
    return { val };
}
export default connect(mapStateToProps)(HomeScreenDetailProductOwner);