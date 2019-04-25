import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { connect } from "react-redux";
import { RecommendProductAction } from '../../../Action';
import { Actions } from 'react-native-router-flux';
import { StoreDetailAction } from '../../../Action';

class CardRecommend extends Component {

    ViewDetailProduct(val){
        this.props.StoreDetailAction(val)
        console.log(val)
        Actions.DetailProductPageCustomer();
    }

    renderText() {
        if (this.props.recommend.length > 0) {
            return this.props.recommend.map((val, index) => 
                <Card key={index}>
                    <TouchableOpacity  onPress={() => this.ViewDetailProduct(val)}>
                        <Image style={{ height: 70, width: 70}}  source={{uri : val.image1}}/>
                        <Text>{val.name}</Text>
                        <Text style={{ color:'grey', fontSize: 11}}>{val.category}</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f'}}>{val.price}</Text>
                    </TouchableOpacity>
                </Card>
            );
        }
    }

    render(){
        console.log("==CARD NAJA==",this.props.recommend)
        return (
                <View style={{flexDirection: 'row', marginLeft: 5}}>
                    { this.renderText() }
                </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const mapStateToProps = ({  RecommendProductReducers }) => {
    const { recommend } = RecommendProductReducers;
        return { recommend };
  }
const mapDispatchToprops = dispatch => ({
StoreDetailAction: (val) => dispatch(StoreDetailAction(val))
})
export default connect(mapStateToProps,mapDispatchToprops)(CardRecommend);