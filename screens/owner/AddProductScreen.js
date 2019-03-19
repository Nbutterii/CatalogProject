import React from "react";
import { View, Text, StyleSheet, Picker, TextInput, TouchableOpacity, Image, ScrollView, Alert } from "react-native"
import { ImagePicker } from 'expo';



export default class AddProductScreen extends React.Component {

    constructor(props){
        super(props);
        this.state={
            image: [],
            ProductName: '',
            PickerSelecteValCategory: '',
            PickerSelecteValColor: '',
            Price: '',
            Description: '',
        }
    }

    _renderImages() {
    let images = [];
    //let remainder = 4 - (this.state.devices % 4);
    this.state.image.map((item, index) => {
        images.push(
        <Image
            key={index}
            source={{ uri: item }}
            style={{ width: 80, height: 80, margin: 10 }}
        />
        );
    });
        return images;
    }

    _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
    });

    console.log(result);

    // i = 0
    image = []
    if (!result.cancelled) {
        this.setState({
        image: this.state.image.concat([result.uri]),
        });
    }
    // if ( i < 2 ){
    //     image[i] = i++;
    //     alert("True");
    // }
    // else {
    //     alert("Stop");
    // }
    };

    AddProduct()
    {

        const { ProductName }  = this.state ;
        const { PickerSelecteValCategory }  = this.state ;
        const { PickerSelecteValColor }  = this.state ;
        const { Price }  = this.state ;
        const { Description }  = this.state ;
        const { image }  = this.state ;
      
        if(ProductName == '' || PickerSelecteValCategory == '' || PickerSelecteValColor == '' || Price == '' || Description == '' || image == '')
        {
            Alert.alert("Please Enter All the Values.");
        }
        else{
            let collection={
                ProductName: this.state.ProductName,
                PickerSelecteValCategory: this.state.PickerSelecteValCategory,
                PickerSelecteValColor: this.state.PickerSelecteValColor,
                Price: this.state.Price,
                Description: this.state.Description,
                image: this.state.image
                }
            console.log(collection);
            var url = 'http://10.66.2.134:8000/shop/product'
    
            fetch(url, {
              method: 'POST',
              body: JSON.stringify(collection),
              headers:{
                'Content-Type' : 'application/json'
              }
            }).then(res => res.json())
            .then(respon => console.log('Success:', JSON.stringify(Response)))
            .catch(error => console.error('Error:', error));
        }
    }

  render() {
    return (

        <View style={styles.container}>
            <ScrollView>

                <View style= {{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 5 }}>
                    {this._renderImages()}
                    <TouchableOpacity onPress={this._pickImage}>
                        <Image style={{ width: 80, height: 80, margin: 10 }} source={require('../../assets/AddImage.png')} />
                    </TouchableOpacity>
                </View>

                <Text style={{ marginTop: 10, marginLeft:20, fontSize: 17 }}>
                    Product Name
                </Text>
                <TextInput style={{ padding: 7, backgroundColor:'#fff', borderColor: '#e7e7eb', 
                borderWidth: 1, marginLeft:20, marginRight:20 }} 
                underlineColorAndroid='transparent' onChangeText={ ProductName => this.setState({ProductName}) }/>

                <Text style={{ marginTop:12, marginLeft:20, fontSize: 17 }}>
                    Category
                </Text>
                <View style={{ backgroundColor:'#fff', borderColor: '#e7e7eb', borderWidth: 1, marginLeft:20, marginRight:20 }}>
                    <Picker
                        selectedValue={this.state.PickerSelecteValCategory}
                        onValueChange={(itemValue1, itemIndex) => this.setState({PickerSelecteValCategory: itemValue1})} >
                        
                        <Picker.Item label="Please choose a category" value="Please choose a category" />
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
                        selectedValue={this.state.PickerSelecteValColor}
                        onValueChange={(itemValue2, itemIndex) => this.setState({PickerSelecteValColor: itemValue2})} >
                        
                        <Picker.Item label="Please choose a color" value="Please choose a color" />
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
                onChangeText={ Price => this.setState({Price}) }/>

                <Text style={{ marginTop:12, marginLeft:20, fontSize: 17 }}>
                    Description
                </Text>
                <TextInput style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Type something..."
                numberOfLines={10}
                multiline={true} onChangeText={ Description => this.setState({Description}) }/>

                <TouchableOpacity style={{ flex: 1, marginTop:12, backgroundColor: '#891c1c', borderRadius: 5, 
                marginBottom: 20, alignItems: 'center', padding: 10, marginLeft:50, marginRight:50}}
                onPress={() => this.AddProduct()}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15}}>Agree</Text>
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
        // Set border Hex Color Code Here.
        borderColor: '#FF5722', 
    }
});
