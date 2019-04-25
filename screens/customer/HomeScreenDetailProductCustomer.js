import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Button, Alert } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import { Card } from "react-native-elements";
import CardRecommend from '../components/Explore/CardRecommend'
import { GetTokenAction } from '../../Action';
import { RecommendProductAction } from '../../Action';

class HomeScreenDetailProductCustomer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            dataSource: [],
            clickWow:this.props.val.total_Wow,
            clickHappy:this.props.val.total_Happy,
            clickDislike:this.props.val.total_Dislike,
            show:true,
            ShowCardList : false
        }
    }

    RecommendProduct() {
        return fetch(`http://10.66.4.239:8000/shop/product/?category=${this.props.val.category}&color=${this.props.val.color}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then((responseData) => {
            console.log('===RecommendProduct===',responseData)
            this.props.RecommendProductAction(responseData)
          })
    }

    IncrementItemWow() {
        // this.setState({ clickWow: this.state.clickWow + 1 });
        // if(this.state.clickWow > -1)
        // {
            console.log("Wow");
            this.setState({ShowCardList : true})
            
        // }

        fetch(url ='http://10.66.4.239:8000/emotion/express/', {
          method: 'POST',
          body: JSON.stringify({
              'product_id' : this.props.val.id,
              'emotion' : 'Wow'
          }),
          headers:{
          'Content-Type' : 'application/json',
          Authorization : `Token ${this.props.token}`
          }
      }).then(res => res.json())
    }

    IncrementItemHappy = () => {
            // this.setState({ clickHappy: this.state.clickHappy + 1 });
            console.log("Happy");
            this.setState({ShowCardList : true})
        
    
        fetch(url ='http://10.66.4.239:8000/emotion/express/', {
          method: 'POST',
          body: JSON.stringify({
              'product_id' : this.props.val.id,
              'emotion' : 'Happy'
          }),
          headers:{
          'Content-Type' : 'application/json',
          Authorization : `Token ${this.props.token}`
          }
      }).then(res => res.json())
    }

    IncrementItemDislike = () => {
        // this.setState({ clickDislike: this.state.clickDislike + 1 });

        fetch(url ='http://10.66.4.239:8000/emotion/express/', {
          method: 'POST',
          body: JSON.stringify({
              'product_id' : this.props.val.id,
              'emotion' : 'Dislike'
          }),
          headers:{
          'Content-Type' : 'application/json',
          Authorization : `Token ${this.props.token}`
          }
      }).then(res => res.json())
    }

    OpenCamera() {
        Alert.alert(
            'Alert',
            'Open camera?',
            [
                { text: 'No', onPress: () => console.log('Cancel open'), style: 'cancel'},
                {
                    text: 'Yes', onPress: () => {
                        console.log('Open camera')
                    }
                },
            ],
        )
    }

    componentDidMount() {
        try{
            axios.get(`http://10.66.4.239:8000/shop/product/`)
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

                <View style={{ backgroundColor: '#fff', height: 450, marginBottom: 10 }}>
                    <View style={{  alignItems: 'center' }}>
                        <View style={{  width: 300, height: 400, marginTop:25 }}>
                            <Image
                            style={{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 3, borderWidth: 1, borderColor: '#dddddd'}}
                            source={{uri : this.props.val.image1}} />
                        </View>
                    </View>
                </View>

                <Card>
                    <View header style={{ borderBottomWidth: 1, borderBottomColor:'#dee0e2', flexDirection: 'row' }}>
                        <Text style={{fontSize: 24, marginLeft: 2, marginBottom: 20, fontWeight: '700'}}>{this.props.val.name}</Text>
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

                    <TouchableOpacity style={{ flex: 1,backgroundColor: '#891c1c', borderRadius: 10, marginTop: 10, alignItems: 'center', 
                            padding: 10, marginLeft:230, marginRight:2}}  onPress={() => this.OpenCamera()}>
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 10}}>+Review</Text>
                    </TouchableOpacity>


                    <View style={{flexDirection: 'row',justifyContent: 'center'}}>
                        <View style={ {marginTop:21, backgroundColor: 'white'}}>
                            <TouchableOpacity onPress={() => { this.IncrementItemWow(); this.RecommendProduct()}}>
                                <Image
                                style={{flex:1, height: 80, width: 80, resizeMode: 'cover', borderRadius: 5, borderWidth: 1}}
                                    source={require('../../assets/emotionwow_icom.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ fontSize: 35, fontWeight: '500', marginTop: 35 }}>{ this.state.clickWow }</Text>
                        </View>
    

                        <View style={{ marginTop:25, backgroundColor: 'white' }}>
                            <TouchableOpacity onPress={() => { this.IncrementItemHappy(); this.RecommendProduct()}}>
                                <Image
                                style={{flex:1, height: 80, width: 80, resizeMode: 'cover', borderRadius: 5, borderWidth: 1}}
                                    source={require('../../assets/emotionhappy_icom.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ fontSize: 35, fontWeight: '500', marginTop: 35 }}>{ this.state.clickHappy }</Text>
                        </View>
    
    
                        <View style={{ marginTop:22, backgroundColor: 'white' }}>
                            <TouchableOpacity onPress={() => this.IncrementItemDislike()}>
                                <Image
                                style={{flex:1, height: 80, width: 80, resizeMode: 'cover', borderRadius: 5, borderWidth: 1}}
                                source={require('../../assets/emotionbad_icom.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ fontSize: 35, fontWeight: '500', marginTop: 35 }}>{ this.state.clickDislike }</Text>
                        </View>
                    </View>
                </Card>

                <View style={{ marginTop: 5, marginBottom: 5 }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                { this.state.ShowCardList && <CardRecommend/> }
                            </ScrollView>
                </View>

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
  
const mapStateToProps = ({ MenageReducers, MenageLogin }) => {
    const { val } = MenageReducers;
    const { token } = MenageLogin;
    return { val, token };
}
const mapDispatchToprops = dispatch => ({
    RecommendProductAction: (recommend) => dispatch(RecommendProductAction(recommend)),
})
export default connect(mapStateToProps,mapDispatchToprops)(HomeScreenDetailProductCustomer);