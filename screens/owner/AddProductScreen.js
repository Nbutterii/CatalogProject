import React from "react";
import { View, Text, StyleSheet, Picker, TextInput, TouchableOpacity, Image, ScrollView, Alert } from "react-native"
import { ImagePicker, Constants } from 'expo';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'

class AddProductScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            category: '',
            color: '',
            price: '',
            description: '',
            pickerResult1: null,
            pickerResult2: null,
            pickerResult3: null,
            pickerResult4: null,
        }
      }

    // state = {
    //     pickerResult: null,
    //   };

    // _renderImages() {
    // let images = [];
    // //let remainder = 4 - (this.state.devices % 4);
    // this.state.image.map((item, index) => {
    //     images.push(
    //     <Image
    //         key={index}
    //         source={{ uri: item }}
    //         style={{ width: 80, height: 80, margin: 10 }}
    //     />
    //     );
    // });
    //     return images;
    // }

    // _pickImage = async () => {
    // let result = await ImagePicker.launchImageLibraryAsync({
    //     allowsEditing: true,
    //     aspect: [1, 1],
    // });

    // console.log(result);

    // // i = 0
    // image = []
    // if (!result.cancelled) {
    //     this.setState({
    //     image: this.state.image.concat([result.uri]),
    //     });
    // }
    // // if ( i < 2 ){
    // //     image[i] = i++;
    // //     alert("True");
    // // }
    // // else {
    // //     alert("Stop");
    // // }
    // };

    // _pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //       allowsEditing: true,
    //       aspect: [4, 3],
    //     });
    
    //     console.log(result);
    
    //     if (!result.cancelled) {
    //       this.setState({ image1: result.uri });
    //     }
    // }

    _pickImg1 = async () => {
        let pickerResult1 = await ImagePicker.launchImageLibraryAsync({
          base64: true,
          allowsEditing: false,
          aspect: [3, 4],
        });
        console.log(pickerResult1);
        this.setState({
          pickerResult1,
        });
    };

    _pickImg2 = async () => {
        let pickerResult2 = await ImagePicker.launchImageLibraryAsync({
          base64: true,
          allowsEditing: false,
          aspect: [3, 4],
        });
        console.log(pickerResult2);
        this.setState({
          pickerResult2,
        });
    };

    _pickImg3 = async () => {
        let pickerResult3 = await ImagePicker.launchImageLibraryAsync({
          base64: true,
          allowsEditing: false,
          aspect: [3, 4],
        });
        console.log(pickerResult3);
        this.setState({
          pickerResult3,
        });
    };

    _pickImg4 = async () => {
        let pickerResult4 = await ImagePicker.launchImageLibraryAsync({
          base64: true,
          allowsEditing: false,
          aspect: [3, 4],
        });
        console.log(pickerResult4);
        this.setState({
          pickerResult4,
        });
    };
    
    AddProduct()
    {
        
        const { name }  = this.state ;
        const { category }  = this.state ;
        const { color }  = this.state ;
        const { price }  = this.state ;
        const { description }  = this.state ;
        const { pickerResult1 }  = this.state ;
        const { pickerResult2 }  = this.state ;
        const { pickerResult3 }  = this.state ;
        const { pickerResult4 }  = this.state ;
        
        if(name == '' || category == '' || color == '' || price == '' || description == '' || 
            pickerResult1 == null || pickerResult2 == null || pickerResult3 == null || pickerResult4 == null) {
            Alert.alert("Please fill up this form.");
        }
        else{
            let collection={
                name: this.state.name,
                category: this.state.category,
                color: this.state.color,
                price: this.state.price,
                description: this.state.description,
                image1: this.state.pickerResult1.base64,
                image2: this.state.pickerResult2.base64,
                image3: this.state.pickerResult3.base64,
                image4: this.state.pickerResult4.base64,
                }
            console.log(collection);
            // Actions.ProductOwnerPage()
            var url = 'http://10.66.4.239:8000/shop/product/'
    
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(collection),
                headers:{
                'Content-Type' : 'application/json',
                Authorization : `Token ${this.props.token}`
                }

            })
            .then((res) => {
              if (res.ok == true) {
                Actions.ProductOwnerPage();
              }
            })
        }
    }
    

  render() {

    let { pickerResult1 } = this.state;
    let imageUri1 = pickerResult1 ? `data:image/jpg;base64,${pickerResult1.base64}` : null;
    imageUri1 && console.log({uri: imageUri1.slice(0, 100)});

    let { pickerResult2 } = this.state;
    let imageUri2 = pickerResult2 ? `data:image/jpg;base64,${pickerResult2.base64}` : null;
    imageUri2 && console.log({uri: imageUri2.slice(0, 100)});

    let { pickerResult3 } = this.state;
    let imageUri3 = pickerResult3 ? `data:image/jpg;base64,${pickerResult3.base64}` : null;
    imageUri3 && console.log({uri: imageUri3.slice(0, 100)});

    let { pickerResult4 } = this.state;
    let imageUri4 = pickerResult4 ? `data:image/jpg;base64,${pickerResult4.base64}` : null;
    imageUri4 && console.log({uri: imageUri4.slice(0, 100)});

    return (
        <View style={styles.container}>
            <ScrollView>

                <View style={{ flexDirection: 'row' }} >{/* <View style= {{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 5 }}> */}
                    
                    <TouchableOpacity onPress={this._pickImg1} style={{ marginLeft: 10 }}>
                        <Image style={{ width: 90, height: 90}} source={require('../../assets/AddImage.png')} />
                        <Image source={{uri: imageUri1}} style={{ width: 90, height: 90, position: 'absolute' }}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this._pickImg2} style={{ marginLeft: 10 }}>
                        <Image style={{ width: 90, height: 90}} source={require('../../assets/AddImage.png')} />
                        <Image source={{uri: imageUri2}} style={{ width: 90, height: 90, position: 'absolute' }}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this._pickImg3} style={{ marginLeft: 10 }}>
                        <Image style={{ width: 90, height: 90}} source={require('../../assets/AddImage.png')} />
                        <Image source={{uri: imageUri3}} style={{ width: 90, height: 90, position: 'absolute' }}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this._pickImg4} style={{ marginLeft: 10 }}>
                        <Image style={{ width: 90, height: 90}} source={require('../../assets/AddImage.png')} />
                        <Image source={{uri: imageUri4}} style={{ width: 90, height: 90, position: 'absolute' }}/>
                    </TouchableOpacity>

                </View>

                <Text style={{ marginTop: 10, marginLeft:20, fontSize: 17 }}>
                    Product Name
                </Text>
                <TextInput style={{ padding: 7, backgroundColor:'#fff', borderColor: '#e7e7eb', 
                borderWidth: 1, marginLeft:20, marginRight:20 }} 
                underlineColorAndroid='transparent' onChangeText={ name => this.setState({name})}/>

                <Text style={{ marginTop:12, marginLeft:20, fontSize: 17 }}>
                    Category
                </Text>
                <View style={{ backgroundColor:'#fff', borderColor: '#e7e7eb', borderWidth: 1, marginLeft:20, marginRight:20 }}>
                    <Picker
                        selectedValue={this.state.category}
                        onValueChange={(itemValue1, itemIndex) => this.setState({category: itemValue1})} >
                        
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
                        selectedValue={this.state.color}
                        onValueChange={(itemValue2, itemIndex) => this.setState({color: itemValue2})} >
                        
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
                onChangeText={ price => this.setState({price}) }/>

                <Text style={{ marginTop:12, marginLeft:20, fontSize: 17 }}>
                    Description
                </Text>
                <TextInput style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Type something..."
                numberOfLines={10}
                multiline={true} onChangeText={ description => this.setState({description}) }/>

                <TouchableOpacity style={{ flex: 1, marginTop:12, backgroundColor: '#891c1c', borderRadius: 5, 
                marginBottom: 20, alignItems: 'center', padding: 10, marginLeft:50, marginRight:50}}
                onPress={() => this.AddProduct()}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15}}>Submit</Text>
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
const mapStateToProps = ({  MenageLogin }) => {
    const { token } = MenageLogin;
        return { token };
  }
export default connect(mapStateToProps)(AddProductScreen);





// import React from "react";
// import { View, Text, StyleSheet, Picker, TextInput, TouchableOpacity, Image, ScrollView, Alert } from "react-native"
// import { ImagePicker, Constants } from 'expo';
// import { Actions } from 'react-native-router-flux';
// import { GetTokenAction } from '../../Action';
// import { connect } from 'react-redux'

// class AddProductScreen extends React.Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             name: '',
//             category: '',
//             color: '',
//             price: '',
//             description: '',
//             pickerResult: null,
//         }
//       }

//     // state = {
//     //     pickerResult: null,
//     //   };

//     // _renderImages() {
//     // let images = [];
//     // //let remainder = 4 - (this.state.devices % 4);
//     // this.state.image.map((item, index) => {
//     //     images.push(
//     //     <Image
//     //         key={index}
//     //         source={{ uri: item }}
//     //         style={{ width: 80, height: 80, margin: 10 }}
//     //     />
//     //     );
//     // });
//     //     return images;
//     // }

//     // _pickImage = async () => {
//     // let result = await ImagePicker.launchImageLibraryAsync({
//     //     allowsEditing: true,
//     //     aspect: [1, 1],
//     // });

//     // console.log(result);

//     // // i = 0
//     // image = []
//     // if (!result.cancelled) {
//     //     this.setState({
//     //     image: this.state.image.concat([result.uri]),
//     //     });
//     // }
//     // // if ( i < 2 ){
//     // //     image[i] = i++;
//     // //     alert("True");
//     // // }
//     // // else {
//     // //     alert("Stop");
//     // // }
//     // };

//     // _pickImage = async () => {
//     //     let result = await ImagePicker.launchImageLibraryAsync({
//     //       allowsEditing: true,
//     //       aspect: [4, 3],
//     //     });
    
//     //     console.log(result);
    
//     //     if (!result.cancelled) {
//     //       this.setState({ image1: result.uri });
//     //     }
//     // }

//     _pickImg = async () => {
//         let pickerResult = await ImagePicker.launchImageLibraryAsync({
//           base64: true,
//           allowsEditing: false,
//           aspect: [3, 4],
//         });
//         console.log(pickerResult);
//         this.setState({
//           pickerResult,
//         });
//     };
    
//     AddProduct()
//     {
        
//         const { name }  = this.state ;
//         const { category }  = this.state ;
//         const { color }  = this.state ;
//         const { price }  = this.state ;
//         const { description }  = this.state ;
//         const { pickerResult }  = this.state ;
        
//         if(name == '' || category == '' || color == '' || price == '' || description == '' || pickerResult == null) {
//             Alert.alert("Please fill up this form.");
//         }
//         else{
//             let collection={
//                 name: this.state.name,
//                 category: this.state.category,
//                 color: this.state.color,
//                 price: this.state.price,
//                 description: this.state.description,
//                 image1: this.state.pickerResult.base64
//                 }
//             console.log(collection);
//             // Actions.ProductOwnerPage()
//             var url = 'http://10.66.4.239:8000/shop/product/'
    
//             fetch(url, {
//                 method: 'POST',
//                 body: JSON.stringify(collection),
//                 headers:{
//                 'Content-Type' : 'application/json',
//                 Authorization : `Token ${this.props.token}`
//                 }

//             })
//             .then((res) => {
//               if (res.ok == true) {
//                 Actions.ProductOwnerPage();
//               }
//             })
//         }
//     }
    

//   render() {

//     let { pickerResult } = this.state;
//     let imageUri = pickerResult ? `data:image/jpg;base64,${pickerResult.base64}` : null;
//     imageUri && console.log({uri: imageUri.slice(0, 100)});

//     return (
//         <View style={styles.container}>
//             <ScrollView>

//                 <View style={{ alignItems: 'center' }} >{/* <View style= {{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 5 }}> */}
//                     <Image source={{uri: imageUri}} style={{ width: 100, height: 100 }}/>
//                     <TouchableOpacity onPress={this._pickImg}>
//                         <Image style={{ width: 120, height: 40, margin: 10, alignItems: 'center' }} source={require('../../assets/AddImage2.png')} />
//                     </TouchableOpacity>
//                 </View>

//                 <Text style={{ marginTop: 10, marginLeft:20, fontSize: 17 }}>
//                     Product Name
//                 </Text>
//                 <TextInput style={{ padding: 7, backgroundColor:'#fff', borderColor: '#e7e7eb', 
//                 borderWidth: 1, marginLeft:20, marginRight:20 }} 
//                 underlineColorAndroid='transparent' onChangeText={ name => this.setState({name})}/>

//                 <Text style={{ marginTop:12, marginLeft:20, fontSize: 17 }}>
//                     Category
//                 </Text>
//                 <View style={{ backgroundColor:'#fff', borderColor: '#e7e7eb', borderWidth: 1, marginLeft:20, marginRight:20 }}>
//                     <Picker
//                         selectedValue={this.state.category}
//                         onValueChange={(itemValue1, itemIndex) => this.setState({category: itemValue1})} >
                        
//                         <Picker.Item label="Please choose a category" value="Please choose a category" />
//                         <Picker.Item label="Top" value="Top" />
//                         <Picker.Item label="Pant" value="Pant" />
//                         <Picker.Item label="Skirt" value="Skirt" />
                        
//                     </Picker>
//                 </View>
                
//                 <Text style={{ marginTop:12, marginLeft:20, fontSize: 17 }}>
//                     Color
//                 </Text>
//                 <View style={{ backgroundColor:'#fff', borderColor: '#e7e7eb', borderWidth: 1, marginLeft:20, marginRight:20 }}>
//                     <Picker
//                         selectedValue={this.state.color}
//                         onValueChange={(itemValue2, itemIndex) => this.setState({color: itemValue2})} >
                        
//                         <Picker.Item label="Please choose a color" value="Please choose a color" />
//                         <Picker.Item label="Black" value="Black" />
//                         <Picker.Item label="Brown" value="Brown" />
//                         <Picker.Item label="Grey" value="Grey" />
//                         <Picker.Item label="White" value="White" />
//                         <Picker.Item label="Yellow" value="Yellow" />
//                         <Picker.Item label="Orange" value="Orange" />
//                         <Picker.Item label="Red" value="Red" />
//                         <Picker.Item label="Pink" value="Pink" />
//                         <Picker.Item label="Purple" value="Purple" />
//                         <Picker.Item label="Blue" value="Blue" />
//                         <Picker.Item label="Green" value="Green" />
//                         <Picker.Item label="Multicolor" value="Multicolor" />
//                         <Picker.Item label="etc." value="etc." />
                        
//                     </Picker>
//                 </View>

//                 <Text style={{ marginTop:12, marginLeft:20, fontSize: 17 }} >
//                     Price
//                 </Text>
//                 <TextInput style={{ padding: 7, backgroundColor:'#fff', borderColor: '#e7e7eb', 
//                 borderWidth: 1, marginLeft:20, marginRight:20 }} 
//                 underlineColorAndroid='transparent' keyboardType={'numeric'} placeholder="ex.830"  
//                 onChangeText={ price => this.setState({price}) }/>

//                 <Text style={{ marginTop:12, marginLeft:20, fontSize: 17 }}>
//                     Description
//                 </Text>
//                 <TextInput style={styles.textArea}
//                 underlineColorAndroid="transparent"
//                 placeholder="Type something..."
//                 numberOfLines={10}
//                 multiline={true} onChangeText={ description => this.setState({description}) }/>

//                 <TouchableOpacity style={{ flex: 1, marginTop:12, backgroundColor: '#891c1c', borderRadius: 5, 
//                 marginBottom: 20, alignItems: 'center', padding: 10, marginLeft:50, marginRight:50}}
//                 onPress={() => this.AddProduct()}>
//                         <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15}}>Submit</Text>
//                 </TouchableOpacity>

//             </ScrollView>
//         </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         paddingTop: Constants.statusBarHeight,
//     },
//     textArea: {
//         height: 100,
//         justifyContent: "flex-start",
//         marginLeft: 20,
//         marginRight: 20,
//         backgroundColor:'#fff', 
//         borderColor: '#e7e7eb', 
//         borderWidth: 1,
//         textAlignVertical: "top"
//     },
//     MainContainer :{
//         justifyContent: 'center',
//         flex:1,
//         margin: 10
//         },
//     TextInputStyleClass: {
//         textAlign: 'center',
//         marginBottom: 7,
//         height: 40,
//         borderWidth: 1,
//         borderColor: '#FF5722', 
//     }
// });
// const mapStateToProps = ({  MenageLogin }) => {
//     const { token } = MenageLogin;
//         return { token };
//   }
// export default connect(mapStateToProps)(AddProductScreen);





