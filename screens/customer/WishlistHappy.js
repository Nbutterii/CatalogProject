import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import axios from 'axios';
import { Card } from "react-native-elements";
import { StoreDetailAction } from '../../Action';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import { GetTokenAction } from '../../Action';

class WishlistHappy extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            dataSource: [],
        }
    }   

    componentDidMount() {
        try{
            axios({ method: 'get', 
            url: 'http://10.66.4.239:8000/shop/product/myhappy/', 
            headers: { Authorization: `Token ${this.props.token}` } })
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
        Actions.DetailProductWishlistHappyPage();
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
        console.log('ON WishlistHappy', this.props.token)
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ marginLeft: 5, marginRight: 5, marginTop: 15 }}>
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

const mapStateToProps = ({  MenageLogin }) => {
    const { token } = MenageLogin;
        return { token };
}
const mapDispatchToprops = dispatch => ({
    StoreDetailAction: (val) => dispatch(StoreDetailAction(val))
})
export default  connect(mapStateToProps , mapDispatchToprops)(WishlistHappy);