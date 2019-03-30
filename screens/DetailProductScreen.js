import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native"
import Swiper from 'react-native-swiper'
import { Card } from "react-native-elements";
import axios from 'axios';

export default class DetailProductScreen extends React.Component {



    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            dataSource: [],
    }
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

renderText() {
    if (this.state.dataSource.length > 0) {
        return this.state.dataSource.map((val, index) => 
        <View key={index}>
            <View header style={{borderBottomWidth:1,borderBottomColor:'#dee0e2'}}>
                <Text style={{fontSize: 24, marginLeft: 10, marginBottom: 20, fontWeight: '700'}}>{val.name}</Text>
            </View>
            
            <View header style={{borderBottomWidth:1,borderBottomColor:'#dee0e2'}}>
                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>CATEGORY</Text>
                <Text style={{ fontSize: 16, fontWeight: '200', marginTop: 2}}>{val.category}</Text>
                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>COLOR</Text>
                <Text style={{ fontSize: 16, fontWeight: '200', marginTop: 2}}>{val.color}</Text>
                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>PRICE</Text>
                <Text style={{ fontSize: 16, fontWeight: '200', marginTop: 2}}>{val.price}</Text>
                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>DESCRIPTION</Text>
                <Text style={{ fontSize: 16, fontWeight: '200', marginTop: 2 }}>{val.description}</Text>
            </View>
        </View>
        );
    }
}


    render() {
        return (
            <ScrollView scrollEventThrottle={16}>
{/* 
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
                </Card> */}

                <Card>
                    { this.renderText() }
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
  






// class App extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             isLoading: false,
//             dataSource: [],
//     }
// }
// CollectData(val){
//     console.log(val)
//     this.props.DataAdvisorAction(val)
//     Actions.Calendar();
//     }

// renderPage(image, index) {
//     return (
//         <View key={index}>
//             <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
//         </View>
//     );
// }

// componentDidMount() {
//     try{
//         axios.get(`http://192.168.43.212:8000/advisor/getaddata/` , {
//         headers: {
//             Authorization : `Token ${this.props.token}`,
//         }
//         })
//       .then(res => {
//         console.log('555',res.data)
//         this.setState({ dataSource : res.data});
//       })
//     }
//     catch(err){
//       console.log(err)
//     }
// }


//     renderText() {
//         if (this.state.dataSource.length > 0) {
//             return this.state.dataSource.map((val, index) => 
//             <View key={index} style={Styles.ContainerContacts}>
//                 <TouchableOpacity onPress={() => this.CollectData(val)}>
//                     <View style={{ flexDirection: 'row' }}>
//                         <Image style={Styles.drawerImage} source={require('../Image/user.png')} />
//                         <View style={Styles.Column}>
//                             <Text style={{ 
//                                 marginLeft : 10 ,
//                                 color : '#3e48a3' ,
//                                 fontSize: 15 ,
//                                 fontWeight: 'bold' ,
//                                 marginTop: 20 }} >{val.first_name}</Text>
//                             <Text style={{ marginLeft : 10 , color : '#777' }}>{val.telephone}</Text>
//                             <View style={{ flexDirection: 'row' }}>
//                                 <Ionicons name="ios-pin" size={15} style={{ color:'#777' , marginLeft: 22}} />
//                                 <Text style={{ marginLeft : 10 , color : '#c0c0c0' }}>{val.department}</Text>
//                             </View>
//                         </View>
//                     </View>
//                 </TouchableOpacity>
//             </View>
//             );
//         }
//     }


//     render(){
//         return( 
//                 <LinearGradient colors ={['#87daf3','#a69beb']} style={Styles.container}>
//                     <View >
//                         <Carousel
//                             autoplay
//                             autoplayTimeout={5000}
//                             loop
//                             index={0}
//                             pageSize={BannerWidth}
//                         >
//                             {images.map((image, index) => this.renderPage(image, index))}
//                         </Carousel>
//                     </View>
//                 <ScrollView>
//                     <View style={{ alignItems : 'flex-end' }}>
//                     </View>
//                         <View style={{flexDirection: 'column' , alignItems:'center'}}>
//                             { this.renderText() }
//                         </View>   
//                 </ScrollView>
//                 </LinearGradient>
//                 )

//     }
// }