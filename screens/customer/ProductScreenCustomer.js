import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { Card } from "react-native-elements";
import axios from 'axios';

export default class ProductScreenCustomer extends React.Component {

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

ViewDetailProduct(val){
    console.log(val)
}

renderText() {
    if (this.state.dataSource.length > 0) {
        return this.state.dataSource.map((val, index) => 
        <Card key={index}>
            <TouchableOpacity  onPress={() => this.ViewDetailProduct(val)}>
                <View style={{ flex: 1, marginTop: 10 }}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={{height: 120, width: 90, marginLeft:10}} source={{uri : val.image1}}/>
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
        return (
            <View style={styles.container}>
        
                <View  style={{ position: 'absolute', left:0, right:0, top:0, height:70, backgroundColor:'#891C1C',
                flexDirection:'row', alignItems:'center', paddingHorizontal: 5, position: 'relative' }}>
                    <View style={{ flex: 1, height: "100%", marginLeft: 5, justifyContent: 'center' }}>
                        <View style={{ backgroundColor: 'white',paddingHorizontal: 10, borderRadius: 4, flexDirection: 'row', height:50}}>
                            <Icon name="ios-search" style={{ fontSize: 20, paddingTop: 15}}/>
                            <TextInput placeholder="Search" style={{ fontSize: 20, marginLeft: 5 }}/>
                        </View>
                    </View>
                </View>
        
                <ScrollView>
                    <View style={{ marginLeft: 5, marginRight: 5, marginTop: 15 }}>
                        <View header style={{borderBottomWidth:1,borderBottomColor:'#dee0e2'}}>
                            <Text style={{fontSize: 20, marginLeft: 10, marginBottom: 20}} onPress={() => Actions.AddProductPage()}>6 ITEMS</Text>
                        </View>

                        <View>
                            { this.renderText() }
                        </View>
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
