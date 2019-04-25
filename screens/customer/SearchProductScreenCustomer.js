import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { Card } from "react-native-elements";
import axios from 'axios';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { StoreDetailAction } from '../../Action';
import { connect } from "react-redux";
import { SearchProductAction } from '../../Action';

class SearchProductScreenCustomer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            dataSource: [],
            SearchInput: '',
            dataSourceCount: []
        }
    }

    ViewDetailProduct(val){
        this.props.StoreDetailAction(val)
        console.log(val)
        Actions.DetailProductPageCustomer();
    }

    renderText() {
        if (this.props.search.length > 0) {
            return this.props.search.map((val, index) => 
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
        console.log('===SEARCH===', this.props.search)
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
    },
    searchInput:{
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 4
    }
});

const mapStateToProps = ({  SearchProductReducers }) => {
    const { search } = SearchProductReducers;
        return { search };
  }
const mapDispatchToprops = dispatch => ({
StoreDetailAction: (val) => dispatch(StoreDetailAction(val))
})
export default connect(mapStateToProps,mapDispatchToprops)(SearchProductScreenCustomer);