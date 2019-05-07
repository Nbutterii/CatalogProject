import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import { StackedBarChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native'
import axios from 'axios';

class ChartScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            EmotionTop: '',
            EmotionPant: '',
            EmotionSkirt: ''
        }
    }

    async Signout(token) {
        console.log(this.props.token)
        const response = await fetch(`http://161.246.4.226:8009/rest-auth/logout/` , {
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
                    Actions.replace('visitor')
                }
    }

    DataChart () {
    const DataEmotionTop = Object.values( this.state.EmotionTop );
    const DataEmotionPant = Object.values( this.state.EmotionPant );
    const DataEmotionSkirt = Object.values( this.state.EmotionSkirt );
    const data ={
        labels: ['Top', 'Pant', 'Skirt'],
        legend: ['Wow', 'Happy', 'Dislike'],
        data: [
          DataEmotionTop,
          DataEmotionPant,
          DataEmotionSkirt, 
        ],
        barColors: ['#891C1C', '#df6363', '#f3c5c5'],
       }
    return data;
    }
    
    componentDidMount() {
        try{
            axios.get(`http://161.246.4.226:8009/shop/product/emotionall/?category=Top`)
        .then(res => {
            this.setState({ EmotionTop : res.data});
        }),
            axios.get(`http://161.246.4.226:8009/shop/product/emotionall/?category=Pant`)
        .then(res => {
            this.setState({ EmotionPant : res.data});
        }),
            axios.get(`http://161.246.4.226:8009/shop/product/emotionall/?category=Skirt`)
        .then(res => {
            this.setState({ EmotionSkirt : res.data});
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
                    data={this.DataChart()}
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
  