import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Swiper from 'react-native-swiper'
import Category from '../components/Explore/Category'
import { Card } from "react-native-elements";
import { Actions } from 'react-native-router-flux';
import { GetTokenAction } from '../../Action';
import { connect } from 'react-redux'
import axios from 'axios';
import { StoreDetailAction } from '../../Action';

class HomeScreenCustomer extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            dataSource: [],
        }
    }

    componentDidMount() {
        try{
                axios.get(`http://10.66.4.239:8000/shop/product/top5/`)
            .then(res => {
                console.log('pass',res.data)
                this.setState({ dataSource : res.data});
            })
        }
        catch(err){
        console.log(err)
        }
    }

    
    ViewDetailProduct(val){
        this.props.StoreDetailAction(val)
        console.log(val)
        Actions.HomePageDetailProductCustomer();
    }

    renderText() {
        if (this.state.dataSource.length > 0) {
            return this.state.dataSource.map((val, index) => 
                <Card key={index}>
                    <TouchableOpacity  onPress={() => this.ViewDetailProduct(val)}>
                        <View style={{ flex: 1, marginTop: 10 }}>
                            <View style={{flexDirection: 'row'}}>
                                <Image style={{height: 120, width: 90, marginLeft:10, borderRadius: 3}} source={{uri : val.image1}}/>
                                <View style={{flex:1,alignItems:'flex-start', height: 90, paddingHorizontal: 20,}}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold'}}>{val.name}</Text>
                                    <Text style={{ fontSize: 14, color:'grey' }}>{val.category}</Text>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold'}}>{val.price}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Card>
            );
        }
    }
    render() {
        console.log('ON HomescreenCustomer', this.props.token)
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

                                <TouchableOpacity onPress={() => Actions.CategoryTopsScreenCustomerPage()}>
                                    <Category imageUri={require('../../assets/Update1.jpg')} name="Tops" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => Actions.CategoryPantsScreenCustomerPage()}>
                                <Category imageUri={require('../../assets/Update2.jpg')} name="Pants" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => Actions.CategorySkirtsScreenCustomerPage()}>
                                <Category imageUri={require('../../assets/Update3.jpg')} name="Skirts" />
                                </TouchableOpacity>
                                
                            </ScrollView>
                        </View>
                    </View>

                    <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, color:'#891C1C' }}>
                        TOP 5
                    </Text>
                    <View style={{ marginBottom: 10 }}>
                        { this.renderText() }
                    </View>

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
const mapDispatchToprops = dispatch => ({
StoreDetailAction: (val) => dispatch(StoreDetailAction(val))
})
export default connect(mapStateToProps,mapDispatchToprops)(HomeScreenCustomer);