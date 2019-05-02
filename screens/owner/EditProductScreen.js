import React from "react";
import { View, Text, StyleSheet, Picker, TextInput, TouchableOpacity, Image, ScrollView, Alert } from "react-native"
import { ImagePicker, Constants } from 'expo';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { connect } from "react-redux";
import { GetTokenAction } from '../../Action';

class EditProductScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: this.props.val.id,
            name: this.props.val.name,
            category: this.props.val.category,
            color: this.props.val.color,
            price: this.props.val.price,
            description: this.props.val.description,
            pickerResult: this.props.val.image1,
            isLoading: false,
            dataSource: [],
        }
    }

    _pickImg = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
          base64: true,
          allowsEditing: false,
          aspect: [3, 4],
        });
    
        this.setState({
          pickerResult,
        });
    };
    
    AddProduct()
    {
        // Actions.ProductOwnerPage()
        const { name }  = this.state ;
        const { category }  = this.state ;
        const { color }  = this.state ;
        const { price }  = this.state ;
        const { description }  = this.state ;
        const { pickerResult }  = this.state ;
        
        if(name == '' || category == '' || color == '' || price == '' || description == '' || pickerResult == null) {
            Alert.alert("Please fill up this form.");
        }
        else{
            // Actions.product_owner();
            let collection={
                name: this.state.name,
                category: this.state.category,
                color: this.state.color,
                price: this.state.price,
                description: this.state.description,
                image1: this.state.pickerResult.base64
                }
            console.log(collection);
            fetch(`http://10.66.4.239:8000/shop/product/${this.props.val.id}/`, {
                method: 'PATCH',
                body: JSON.stringify(collection),
                headers:{
                    'Content-Type': 'application/json',
                    Authorization : `Token ${this.props.token}`
                }
            }).then((res) => {
                if (res.ok == true) {
                  Actions.ProductOwnerPage();
                }
              })
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

    DeleteProduct() {
        Alert.alert(
            'Alert',
            'Are you sure you want to delete?',
            [
                { text: 'No', onPress: () => console.log('Cancel pressed'), style: 'cancel'},
                {
                    text: 'Yes', onPress: () => {
                        console.log('Agree')
                        return fetch(`http://10.66.4.239:8000/shop/product/${this.props.val.id}/`, {
                            method: 'delete',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization : `Token ${this.props.token}`
                            }
                        })
                        .then((res) => {
                            if (res.ok == true) {
                              Actions.ProductOwnerPage();
                            }
                          })
                    }
                },
            ],
        )
    }

  render() {
    console.log('ON EditProductScreen', this.props.token)

    let { pickerResult } = this.state;
    let imageUri = pickerResult ? `data:image/jpg;base64,${pickerResult.base64}` : null;
    imageUri && console.log({uri: imageUri.slice(0, 100)});

    return (
        <View style={styles.container}>
            <ScrollView>

                <View style={{ alignItems: 'center' }} >{/* <View style= {{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 5 }}> */}
                    <Image source={{uri : this.props.val.image1}} style={{ width: 100, height: 100 }}/>
                    <Image source={{uri: imageUri}} style={{ width: 100, height: 100 , position: 'absolute'}}/>
                    <TouchableOpacity onPress={this._pickImg}>
                        <Image style={{ width: 120, height: 40, margin: 10, alignItems: 'center' }} source={require('../../assets/AddImage2.png')} />
                    </TouchableOpacity>
                </View>

                <Text style={{ marginTop: 10, marginLeft:20, fontSize: 17 }}>
                    Product Name
                </Text>
                <TextInput style={{ padding: 7, backgroundColor:'#fff', borderColor: '#e7e7eb', 
                borderWidth: 1, marginLeft:20, marginRight:20 }} 
                underlineColorAndroid='transparent' onChangeText={ name => this.setState({name})}>
                    {this.props.val.name}
                </TextInput>

                <Text style={{ marginTop:12, marginLeft:20, fontSize: 17 }}>
                    Category
                </Text>
                <View style={{ backgroundColor:'#fff', borderColor: '#e7e7eb', borderWidth: 1, marginLeft:20, marginRight:20 }}>
                    <Picker
                        selectedValue={this.state.category}
                        onValueChange={(itemValue1, itemIndex) => this.setState({category: itemValue1})} >
                        
                        <Picker.Item label={this.props.val.name} value={this.props.val.name} />
                        <Picker.Item label="Top" value="Top" />
                        <Picker.Item label="Pant" value="Pant" />
                        <Picker.Item label="Skirt" value="Skirt" />
                    </Picker>
                </View>
                
                <Text style={{ marginTop:12, marginLeft:20, fontSize: 17 }}>
                    Color
                </Text>
                <View style={{ backgroundColor:'#fff', borderColor: '#e7e7eb', borderWidth: 1, marginLeft:20, marginRight:20 }}>
                    <Picker
                        selectedValue={this.state.color}
                        onValueChange={(itemValue2, itemIndex) => this.setState({color: itemValue2})} >
                        
                        <Picker.Item label={this.props.val.color} value={this.props.val.color} />
                        <Picker.Item label="Black" value="Black" />
                        <Picker.Item label="Brown" value="Brown" />
                        <Picker.Item label="Grey" value="Grey" />
                        <Picker.Item label="White" value="White" />
                        <Picker.Item label="Yellow" value="Yellow" />
                        <Picker.Item label="Orange" value="Orange" />
                        <Picker.Item label="Red" value="Red" />
                        <Picker.Item label="Pink" value="Pink" />
                        <Picker.Item label="Purple" value="Purple" />
                        <Picker.Item label="Blue" value="Blue" />
                        <Picker.Item label="Green" value="Green" />
                        <Picker.Item label="Multicolor" value="Multicolor" />
                        <Picker.Item label="etc." value="etc." />
                    </Picker>
                </View>

                <Text style={{ marginTop:12, marginLeft:20, fontSize: 17 }} >
                    Price
                </Text>
                <TextInput style={{ padding: 7, backgroundColor:'#fff', borderColor: '#e7e7eb', 
                borderWidth: 1, marginLeft:20, marginRight:20 }} 
                underlineColorAndroid='transparent' keyboardType={'numeric'} placeholder="ex.830"  
                onChangeText={ price => this.setState({price}) }>
                    {this.props.val.price}
                </TextInput>

                <Text style={{ marginTop:12, marginLeft:20, fontSize: 17 }}>
                    Description
                </Text>
                <TextInput style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Type something..."
                numberOfLines={10}
                multiline={true} onChangeText={ description => this.setState({description}) }>
                    {this.props.val.description}
                </TextInput>

                <TouchableOpacity style={{ flex: 1, marginTop:12, backgroundColor: '#891c1c', borderRadius: 5, 
                marginBottom: 5, alignItems: 'center', padding: 10, marginLeft:50, marginRight:50}}
                onPress={() => this.AddProduct()}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15}}>Edit product</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, marginTop:5, backgroundColor: '#ffffff', borderRadius: 5, 
                borderColor: '#891c1c', borderWidth: 1, marginBottom: 20, alignItems: 'center', padding: 10, marginLeft:50, marginRight:50}}
                onPress={() => this.DeleteProduct()}>
                        <Text style={{ color: '#891c1c', fontWeight: 'bold', fontSize: 15}}>Delete product</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
    textArea: {
        height: 100,
        justifyContent: "flex-start",
        marginLeft: 20,
        marginRight: 20,
        backgroundColor:'#fff', 
        borderColor: '#e7e7eb', 
        borderWidth: 1,
        textAlignVertical: "top"
    },
    MainContainer :{
        justifyContent: 'center',
        flex:1,
        margin: 10
        },
    TextInputStyleClass: {
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: '#FF5722', 
    }
});

const mapStateToProps = ({ MenageReducers,MenageLogin }) => {
    const { val } = MenageReducers;
    const { token } = MenageLogin;
    return { val,token };
}
export default connect(mapStateToProps)(EditProductScreen);