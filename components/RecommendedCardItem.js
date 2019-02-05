import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StarRating from 'react-native-star-rating'



class RecommendedCardItem extends Component{
    render(){
        return (
            <View style={{ flex: 1, marginTop: 10 }}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={{height: 90, width: 60, marginLeft:10}}
                    source={this.props.imageUri}/>
                    <View style={{flex:1,alignItems:'flex-start', height: 90, paddingHorizontal: 20,}}>
                        <Text>{this.props.itemName}</Text>
                        <Text style={{ color:'grey', fontSize: 11}}>{this.props.itemCreator}</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f'}}>{this.props.itemPrice}</Text>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={this.props.rating}
                            starSize={12}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
export default RecommendedCardItem;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});
