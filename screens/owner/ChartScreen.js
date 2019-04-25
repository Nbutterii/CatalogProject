import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Actions } from 'react-native-router-flux';
import { GetTokenAction } from '../../Action';
import { connect } from 'react-redux'
import Category from '../components/Explore/Category'
import { StackedBarChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native'
import axios from 'axios';

class ChartScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            EmotionTop: '',
        }
    }

    async Signout(token) {
        console.log(this.props.token)
        const response = await fetch(`http://10.66.4.239:8000/rest-auth/logout/` , {
            method: 'POST',
            headers: {
                Authorization : `Token ${this.props.token}`,
            }   
                
        });
            this.props.dispatch({
                type: 'Logout'
            })
            console.log(response)
                if (response.status === 200) {
                    Actions.visitor();
                }
        Actions.replace()
    }
    
    
    componentDidMount() {
        try{
            axios.get(`http://10.66.4.239:8000/shop/product/emotionall/?category=Top`)
        .then(res => {
            console.log('Happy',res.data)
            this.setState({ EmotionTop : res.data});
        })
        }
        catch(err){
        console.log(err)
        }
    }

    render() {
        console.log('ON ChartScreen', this.props.token)
        return (
            <View style={styles.container}>
                <ScrollView>
                    <StackedBarChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    />
                    <View style={{ height: 130, marginTop: 20}}>
                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }} onPress={() => Actions.TopTopsPage()}>
                                <Image style={{ height: 90, width: 90, marginLeft: 20 }} 
                                source={require('../../assets/iconTop.png')}/>
                                <Text style={{ fontSize: 20, fontWeight: '300', paddingHorizontal: 20, marginTop: 25 }} >Ranked Tops </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }} onPress={() => Actions.TopPantsPage()}>
                                <Image style={{ height: 90, width: 90, marginLeft: 20 }} 
                                source={require('../../assets/iconPant.png')}/>
                                <Text style={{ fontSize: 20, fontWeight: '300', paddingHorizontal: 20, marginTop: 25 }} >Ranked Pants </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }} onPress={() => Actions.TopSkirtsPage()}>
                                <Image style={{ height: 90, width: 90, marginLeft: 20 }} 
                                source={require('../../assets/iconSkirt.png')}/>
                                <Text style={{ fontSize: 20, fontWeight: '300', paddingHorizontal: 20, marginTop: 25 }} >Ranked Skirts </Text>
                            </TouchableOpacity>
                    </View>

                        <TouchableOpacity style={{ alignSelf: 'stretch', alignItems: 'center', 
                        padding: 10, backgroundColor: '#891c1c', marginTop: 200, borderRadius: 5, 
                        marginLeft:15, marginRight: 15, marginBottom: 10 }} onPress={() => this.Signout()} >
                            <Text style={{ fontSize: 18, marginTop: 5, color: '#fff', fontWeight: 'bold'}}>Sign out</Text>
                        </TouchableOpacity>

                </ScrollView>
            </View>
        );
    }
}

const data ={
    labels: ['Top', 'Pant', 'Skirt'],
    legend: ['Wow', 'Happy', 'Dislike'],
    data: [
      [10, 15, 5],
      [16,10,10],
      [20,7,9], 
    ],
    barColors: ['#891C1C', '#df6363', '#f3c5c5'],
   }

const screenWidth = Dimensions.get('window').width

const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#891C1C',
    color: (opacity = 1) => `rgba(54, 11, 11, ${opacity})`,
    strokeWidth: 2 // optional, default 3
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});
const mapStateToProps = ({  MenageLogin }) => {
    const { token } = MenageLogin;
        return { token };
  }
export default connect(mapStateToProps)(ChartScreen);
  