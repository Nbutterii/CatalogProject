import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { Card } from "react-native-elements";
import axios from 'axios';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { StoreDetailAction } from '../../Action';
import { connect } from "react-redux";

class ProductScreenOwner extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            dataSource: [],
            dataSourceCount: []
        }
    }

    componentDidMount() {
        try{
            axios.get(`http://10.66.4.239:8000/shop/product/`)
        .then(res => {
            console.log('pass',res.data)
            this.setState({ dataSource : res.data});
        }),
        axios.get(`http://10.66.4.239:8000/shop/product/count/`)
        .then(res => {
            console.log('pass',res.data)
            this.setState({ dataSourceCount : res.data});
        })
        }
        catch(err){
        console.log(err)
        }
    }

    ViewDetailProduct(val){
        this.props.StoreDetailAction(val)
        console.log(val)
        Actions.DetailProductPageOwner();
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
                            <SearchInput 
                            style={styles.searchInput}
                            placeholder="Type a message to search.."
                            />
                        </View>
                    </View>
                </View>
        
                <ScrollView>
                    <View style={{ marginLeft: 5, marginRight: 5, marginTop: 15 }}>
                        <View header style={{borderBottomWidth:1,borderBottomColor:'#dee0e2',flexDirection: 'row'}}>
                            <Text style={{fontSize: 20, marginLeft: 10, marginBottom: 20, marginTop: 10, fontWeight: 'bold' }}>
                                {this.state.dataSourceCount} ITEMS
                            </Text>
                            <TouchableOpacity style={{ flex: 1,backgroundColor: '#891c1c', borderRadius: 20, marginBottom: 20, alignItems: 'center', 
                            padding: 10, marginLeft:190, marginRight:20}} onPress={() => Actions.AddProductPage()}>
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15}}>+Add</Text>
                            </TouchableOpacity>
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
    searchInput:{
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 4
    }
});

const mapDispatchToprops = dispatch => ({
    StoreDetailAction: (val) => dispatch(StoreDetailAction(val))
})
export default  connect(null , mapDispatchToprops)(ProductScreenOwner);