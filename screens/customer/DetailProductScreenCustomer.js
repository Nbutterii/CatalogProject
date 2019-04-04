import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Button  } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper'
import axios from 'axios';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import { Card } from "react-native-elements";
import CardRecommend from '../components/Explore/CardRecommend'

class DetailProductScreenCustomer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            dataSource: [],
            clickWow:0,
            clickHappy:0,
            clickDislike:0,
            show:true,
            ShowCardList : false
    }
}

IncrementItemWow() {
    this.setState({ clickWow: this.state.clickWow + 1 });
    if(this.state.clickWow > 0)
    {
        console.log("Wow");
        this.setState({ShowCardList : true})
        
    }
  }
IncrementItemHappy = () => {
    this.setState({ clickHappy: this.state.clickHappy + 1 });
}
IncrementItemDislike = () => {
    this.setState({ clickDislike: this.state.clickDislike + 1 });
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

                <View style={{ backgroundColor: '#fff' }}>
                    <View  style={{ height: 400, marginBottom: 50 }}> 
                    {/* Swiper */}
                        <View style={{  width: 300, height: 400, marginTop:20, marginLeft:55, backgroundColor: 'white'}}>
                            <Image
                            style={{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 3, borderWidth: 1, borderColor: '#dddddd'}}
                            source={{uri : this.props.val.image1}} />
                        </View>
                    </View>
                </View>

                <Card>
                    {/* <View header style={{ borderBottomWidth: 1, borderBottomColor:'#dee0e2', flexDirection: 'row' }}>
                        <Text style={{fontSize: 24, marginLeft: 2, marginBottom: 20, fontWeight: '700'}}>{this.props.val.name}</Text>
                        <TouchableOpacity onPress={() => Actions.EditProductPage()}>
                            <Icon name="ios-more" style={{ fontSize: 24, paddingTop: 8, marginLeft: 280}}/>
                        </TouchableOpacity>
                    </View> */}
                    
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


                    <View style={{flexDirection: 'row'}}>
                        <View style={ {marginTop:21, backgroundColor: 'white' }}>
                            <TouchableOpacity onPress={() => this.IncrementItemWow()}>
                                <Image
                                style={{flex:1, height: 80, width: 80, resizeMode: 'cover', borderRadius: 5, borderWidth: 1}}
                                    source={require('../../assets/emotionwow_icom.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ fontSize: 35, fontWeight: '500', marginTop: 35, marginLeft: 5 }}>{ this.state.clickWow }</Text>
                        </View>
    

                        <View style={{ marginLeft: 10, marginTop:25, backgroundColor: 'white' }}>
                            <TouchableOpacity onPress={() => this.IncrementItemHappy()}>
                                <Image
                                style={{flex:1, height: 80, width: 80, resizeMode: 'cover', borderRadius: 5, borderWidth: 1}}
                                    source={require('../../assets/emotionhappy_icom.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ fontSize: 35, fontWeight: '500', marginTop: 35, marginLeft: 5 }}>{ this.state.clickHappy }</Text>
                        </View>
    
    
                        <View style={{ marginLeft: 10, marginTop:22, backgroundColor: 'white' }}>
                            <TouchableOpacity onPress={() => this.IncrementItemDislike()}>
                                <Image
                                style={{flex:1, height: 80, width: 80, resizeMode: 'cover', borderRadius: 5, borderWidth: 1}}
                                source={require('../../assets/emotionbad_icom.png')} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ fontSize: 35, fontWeight: '500', marginTop: 35, marginLeft: 5 }}>{ this.state.clickDislike }</Text>
                        </View>
                    </View>
                    { this.state.ShowCardList && <CardRecommend/> }
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
export default connect(mapStateToProps)(DetailProductScreenCustomer);



// import React from "react";
// import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native"
// import Icon from 'react-native-vector-icons/Ionicons';
// import Swiper from 'react-native-swiper'
// import { Card } from "react-native-elements";
// import axios from 'axios';
// import { connect } from "react-redux";
// import { Actions } from 'react-native-router-flux';

// class DetailProductScreen extends React.Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             isLoading: false,
//             dataSource: [],
//     }
// }

// componentDidMount() {
//     try{
//         axios.get(`http://10.66.4.239:8000/shop/product/`)
//       .then(res => {
//         console.log('pass',res.data)
//         this.setState({ dataSource : res.data});
//       })
//     }
//     catch(err){
//       console.log(err)
//     }
// }

//     render() {
//         return (
//             <ScrollView scrollEventThrottle={16}>

//                 <View style={{ backgroundColor: '#fff' }}>
//                     <View  style={{ height: 250, marginBottom: 50 }}> 
//                     {/* Swiper */}
//                         <View style={{  width: 200, height: 250, marginTop:20, marginLeft:110, backgroundColor: 'white'}}>
//                             <Image
//                             style={{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 3, borderWidth: 1, borderColor: '#dddddd'}}
//                             source={{uri : this.props.val.image1}} />
//                         </View>
//                     </View>
//                 </View>

//                 <Card>
//                     <View header style={{ borderBottomWidth: 1, borderBottomColor:'#dee0e2', flexDirection: 'row' }}>
//                         <Text style={{fontSize: 20, marginLeft: 2, marginBottom: 20, fontWeight: '700'}}>{this.props.val.name}</Text>
//                         <TouchableOpacity onPress={() => Actions.EditProductPage()}>
//                             <Icon name="ios-more" style={{ fontSize: 24, paddingTop: 8, marginLeft: 280}}/>
//                         </TouchableOpacity>
//                     </View>
                    
//                     <View header style={{borderBottomWidth:1,borderBottomColor:'#dee0e2'}}>
//                         <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 10 }}>CATEGORY</Text>
//                         <Text style={{ fontSize:13, fontWeight: '200', marginTop: 2}}>{this.props.val.category}</Text>
//                         <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 10 }}>COLOR</Text>
//                         <Text style={{ fontSize: 13, fontWeight: '200', marginTop: 2}}>{this.props.val.color}</Text>
//                         <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 10 }}>PRICE</Text>
//                         <Text style={{ fontSize: 13, fontWeight: '200', marginTop: 2}}>{this.props.val.price}</Text>
//                         <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 10 }}>DESCRIPTION</Text>
//                         <Text style={{ fontSize: 13, fontWeight: '200', marginTop: 2 , marginBottom: 5 }}>{this.props.val.description}</Text>
//                     </View>


//                     <View style={{flexDirection: 'row'}}>
//                         <View style={{width: 60, height: 60, marginTop:5, backgroundColor: 'white', marginLeft: 7}}>
//                             <Image
//                             style={{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1}}
//                                 source={require('../assets/emotionwow_icom.png')} />
//                         </View>
//                         <View>
//                             <Text style={{ fontSize: 25, fontWeight: '500', marginTop: 20, marginLeft: 5 }}>1</Text>
//                         </View>
    
    
//                         <View style={{width: 60, height: 60, marginTop:8, marginLeft: 42, backgroundColor: 'white'}}>
//                                 <Image
//                                 style={{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1}}
//                                     source={require('../assets/emotionhappy_icom.png')} />
//                         </View>
//                         <View>
//                             <Text style={{ fontSize: 25, fontWeight: '500', marginTop: 20, marginLeft: 5 }}>2</Text>
//                         </View>
    
    
//                         <View style={{width: 60, height: 60, marginTop:5, marginLeft: 42, backgroundColor: 'white'}}>
//                                 <Image
//                                 style={{flex:1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1}}
//                                 source={require('../assets/emotionbad_icom.png')} />
//                         </View>
//                         <View>
//                             <Text style={{ fontSize: 25, fontWeight: '500', marginTop: 20, marginLeft: 5 }}>3</Text>
//                         </View>
//                     </View>
//                 </Card>
    
//             </ScrollView>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//     },
// });
  
// const mapStateToProps = ({ MenageReducers }) => {
//     const { val } = MenageReducers;
//     return { val };
// }
// export default connect(mapStateToProps)(DetailProductScreen);