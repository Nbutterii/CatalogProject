import React from "react";
import { View, Text, StyleSheet, Picker, Alert, TextInput, TouchableOpacity } from "react-native"



export default class AddProductScreen extends React.Component {

    constructor(){
        super();
        this.state={
            PickerSelecteVal : ''
        }
    }

    getSelectedPickerValue=()=>{
        Alert.alert("Selected Category is : " +this.state.PickerSelecteVal);
    }

  render() {
    return (

            <View style={styles.container}>

                <Text style={{ marginTop:120, marginLeft:20, fontSize: 17 }}>
                    Product Name
                </Text>
                <TextInput style={{ padding: 7, backgroundColor:'#fff', borderColor: '#e7e7eb', 
                borderWidth: 1, marginLeft:20, marginRight:20 }} 
                underlineColorAndroid='transparent' />

                <Text style={{ marginTop:12, marginLeft:20, fontSize: 17 }}>
                    Category
                </Text>
                <View style={{ backgroundColor:'#fff', borderColor: '#e7e7eb', borderWidth: 1, marginLeft:20, marginRight:20 }}>
                    <Picker
                        selectedValue={this.state.PickerSelecteVal}
                        onValueChange={(itemValue, itemIndex) => this.setState({PickerSelecteVal: itemValue})} >
                        
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
                        selectedValue={this.state.PickerSelecteVal}
                        onValueChange={(itemValue, itemIndex) => this.setState({PickerSelecteVal: itemValue})} >
                        
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
                underlineColorAndroid='transparent' keyboardType={'numeric'} placeholder="ex.830" />

                <Text style={{ marginTop:12, marginLeft:20, fontSize: 17 }}>
                    Description
                </Text>
                <TextInput style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Type something..."
                numberOfLines={10}
                multiline={true} />

                <TouchableOpacity style={{ flex: 1, marginTop:12, backgroundColor: '#891c1c', borderRadius: 5, 
                marginBottom: 20, alignItems: 'center', padding: 10, marginLeft:50, marginRight:50}}
                onPress={ this.getSelectedPickerValue } >
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15}}>Agree</Text>
                </TouchableOpacity>
            </View>


    );
  }
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    
});