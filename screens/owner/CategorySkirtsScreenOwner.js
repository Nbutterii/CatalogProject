import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import axios from 'axios';
import { Card } from "react-native-elements";
import { StoreDetailAction } from '../../Action';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';

class CategorySkirtsScreenOwner extends React.Component {

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
            axios.get(`http://10.66.4.239:8000/shop/product/?category=Skirt`)
        .then(res => {
            console.log('pass',res.data)
            this.setState({ dataSource : res.data});
        }),
        axios.get(`http://10.66.4.239:8000/shop/product/count/?category=Skirt`)
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
        Actions.DetailCategorySkirtsPageOwner();
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
                <ScrollView>
                    <View style={{ marginLeft: 5, marginRight: 5, marginTop: 15 }}>
                        <View header style={{borderBottomWidth:1,borderBottomColor:'#dee0e2'}}>
                            <Text style={{fontSize: 20, marginLeft: 10, marginBottom: 20, marginTop: 10, fontWeight: 'bold'}}>
                                {this.state.dataSourceCount} ITEMS
                            </Text>
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
        backgroundColor: '#fff'
    }
});

const mapDispatchToprops = dispatch => ({
    StoreDetailAction: (val) => dispatch(StoreDetailAction(val))
})
export default  connect(null , mapDispatchToprops)(CategorySkirtsScreenOwner);