import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Button, Alert } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import { Card } from "react-native-elements";
import CardRecommend from '../components/Explore/CardRecommend'
import { GetTokenAction } from '../../Action';
import { RecommendProductAction } from '../../Action';
import { Camera, Permissions, FaceDetector, DangerZone,ImageManipulator } from 'expo';
import Swiper from 'react-native-swiper'
// import CameraReview from '../components/Explore/CameraReview'

class DetailCategoryPantsScreenCustomer extends React.Component {

    static defaultProps = {
        countDownSeconds: 0,
        motionInterval: 500, //ms between each device motion reading
        motionTolerance: 1, //allowed variance in acceleration
        cameraType: Camera.Constants.Type.front, //front vs rear facing camera
      }

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            dataSource: [],
            clickWow:'',
            clickHappy:'',
            clickDislike:'',
            show:true,
            ShowCardList : false,
            hasCameraPermission: null,
            faceDetecting: false, //when true, we look for faces
            faceDetected: false, //when true, we've found a face
            countDownSeconds: 0, //current available seconds before photo is taken
            countDownStarted: false, //starts when face detected
            pictureTaken: false, //true when photo has been taken
            motion: null, //captures the device motion object 
            detectMotion: false, //when true we attempt to determine if device is still
            data: '',
            ShowCameraReview : false
        }
    }

    countDownTimer = null;

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.detectMotion && nextState.motion && this.state.motion){
            if (
            Math.abs(nextState.motion.x - this.state.motion.x) < this.props.motionTolerance
            && Math.abs(nextState.motion.y - this.state.motion.y) < this.props.motionTolerance
            && Math.abs(nextState.motion.z - this.state.motion.z) < this.props.motionTolerance
            ){
            //still
            this.detectFaces(true);
            this.detectMotion(false);
            } else {
            //moving
            }
        }
    }
    
    detectMotion =(doDetect)=> {
    this.setState({
        detectMotion: doDetect,
    });
    if (doDetect){
        DangerZone.DeviceMotion.setUpdateInterval(this.props.motionInterval);
    } else if (!doDetect && this.state.faceDetecting) {
        this.motionListener.remove();
    }
    }

    onDeviceMotion = (rotation)=>{
    this.setState({
        motion: rotation.accelerationIncludingGravity
    });
    }

    detectFaces(doDetect){
    this.setState({
        faceDetecting: doDetect,
    });
    }

    handleFaceDetectionError = ()=>{
        //
      }

      handleFacesDetected = ({ faces }) => {
        if (faces.length === 1){
          this.setState({
            faceDetected: true,
          });
          if (!this.state.faceDetected && !this.state.countDownStarted){
            this.initCountDown();
          }
        } else {
          this.setState({faceDetected: false });
          this.cancelCountDown();
        }
      }

      initCountDown = ()=>{
        this.setState({ 
          countDownStarted: true,
        });
        this.countDownTimer = setInterval(this.handleCountDownTime, 1000);
      }

      cancelCountDown = ()=>{
        clearInterval(this.countDownTimer);
        this.setState({ 
          countDownSeconds: this.props.countDownSeconds,
          countDownStarted: false,
        });
      }

      handleCountDownTime = ()=>{
        if (this.state.countDownSeconds > 0){
          let newSeconds = this.state.countDownSeconds-1;
          this.setState({
            countDownSeconds: newSeconds,
          });
        } else {
          this.cancelCountDown();
          this.takePicture();
        }
      }
    
      takePicture = async function() {
        this.setState({
          pictureTaken: true,
        });
        if (this.camera) {
          console.log("take Picture")
          let photo = await this.camera.takePictureAsync();
          let uri = photo.uri
    
          let apiUrl = 'http://161.246.4.226:8009/emotion/img/';
          let uriParts = uri.split('.');
          let fileType = uri[uri.length - 1];
    
          let formData = new FormData();
          formData.append('image', {
            uri,
            name: `photo.${fileType}`,
            type: `image/${fileType}`,
          }
          );
          formData.append('product_id', this.props.val.id);
    
    
          console.log("=================",formData)
    
          let options = {
            method: 'POST',
            body: formData,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              Authorization : `Token ${this.props.token}`
            }
          }
          return fetch(apiUrl, options)
          .then((responseData) => {
            console.log("===RESPON DATA===",responseData._bodyInit)
            if (responseData._bodyInit === '"Wow"') {
                Alert.alert(
                    'Wow',
                    'Is this your emotion ?',
                    [
                        { text: 'No', onPress: () => console.log('Cancel Wow'), style: 'cancel'},
                        {
                            text: 'Yes', onPress: () => {
                                console.log('Go Function >> WOW <<')
                                this.IncrementItemWow()
                                this.RecommendProduct()
                                this.setState({ShowCameraReview : false})
                            }
                        },
                    ],
                )
            }
            else if (responseData._bodyInit === '"Happy"') {
                Alert.alert(
                    'Happy',
                    'Is this your emotion ?',
                    [
                        { text: 'No', onPress: () => console.log('Cancel Happy'), style: 'cancel'},
                        {
                            text: 'Yes', onPress: () => {
                                console.log('Go Function >> Happy <<')
                                this.IncrementItemHappy()
                                this.RecommendProduct()
                                this.setState({ShowCameraReview : false})
                            }
                        },
                    ],
                )
            }
            else if (responseData._bodyInit === '"Dislike"') {
                Alert.alert(
                    'Dislike',
                    'Is this your emotion ?',
                    [
                        { text: 'No', onPress: () => console.log('Cancel Dislike'), style: 'cancel'},
                        {
                            text: 'Yes', onPress: () => {
                                console.log('Go Function >> Dislike <<')
                                this.IncrementItemDislike()
                                this.setState({ShowCameraReview : false})
                            }
                        },
                    ],
                )
            }
            else if (responseData._bodyInit === '"Can not find your face"') {
            Alert.alert("The system cannot capture with your emotion , please try again.");
            }
        })
        }
    };
    
    
    onPictureSaved = ()=>{
        this.detectFaces(false);
      }

    RecommendProduct() {
        return fetch(`http://161.246.4.226:8009/shop/product/?category=${this.props.val.category}&color=${this.props.val.color}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then((responseData) => {
            console.log('===RecommendProduct===',responseData)
            this.props.RecommendProductAction(responseData)
          })
    }

    IncrementItemWow() {
        this.setState({ clickWow: this.state.clickWow + 1 });
        console.log("Wow");
        this.setState({ShowCardList : true})

        fetch(url ='http://161.246.4.226:8009/emotion/express/', {
          method: 'POST',
          body: JSON.stringify({
              'product_id' : this.props.val.id,
              'emotion' : 'Wow'
          }),
          headers:{
          'Content-Type' : 'application/json',
          Authorization : `Token ${this.props.token}`
          }
      }).then(res => res.json())
    }

    IncrementItemHappy = () => {
        this.setState({ clickHappy: this.state.clickHappy + 1 });
        console.log("Happy");
        this.setState({ShowCardList : true})
        
    
        fetch(url ='http://161.246.4.226:8009/emotion/express/', {
          method: 'POST',
          body: JSON.stringify({
              'product_id' : this.props.val.id,
              'emotion' : 'Happy'
          }),
          headers:{
          'Content-Type' : 'application/json',
          Authorization : `Token ${this.props.token}`
          }
      }).then(res => res.json())
    }

    IncrementItemDislike = () => {
        this.setState({ clickDislike: this.state.clickDislike + 1 });

        fetch(url ='http://161.246.4.226:8009/emotion/express/', {
          method: 'POST',
          body: JSON.stringify({
              'product_id' : this.props.val.id,
              'emotion' : 'Dislike'
          }),
          headers:{
          'Content-Type' : 'application/json',
          Authorization : `Token ${this.props.token}`
          }
      }).then(res => res.json())
    }

    componentDidMount() {
        Alert.alert(
            ' ',
            'Open camera?',
            [
                { text: 'No', onPress: () => console.log('Cancel open'), style: 'cancel'},
                {
                    text: 'Yes', onPress: () => {
                        console.log('Open camera')
                        this.setState({ShowCameraReview : true})
                        this.motionListener = DangerZone.DeviceMotion.addListener(this.onDeviceMotion);
                        setTimeout(()=>{ //MH - tempm - wait a few seconds for now before detecting motion
                        this.detectMotion(true);
                        },1000);
                    }
                },
            ],
        )
        try{
            axios.get(`http://161.246.4.226:8009/shop/product/${this.props.val.id}`)
        .then(res => {
            console.log("====res data====",res.data)
            this.setState({
                clickWow: res.data.total_Wow,
                clickHappy: res.data.total_Happy,
                clickDislike: res.data.total_Dislike,
              });
        })
        }
        catch(err){
        }
    }

    CameraReview(){
        return (
          <Camera 
          style={{ flex: 1, width: 120, height: 170, position: 'absolute', right:3, bottom:70}} 
          type={this.props.cameraType} 
          onFacesDetected={this.state.faceDetecting ? this.handleFacesDetected : undefined }
          onFaceDetectionError={this.handleFaceDetectionError}
          faceDetectorSettings={{
            mode: FaceDetector.Constants.Mode.fast,
            detectLandmarks: FaceDetector.Constants.Mode.none,
            runClassifications: FaceDetector.Constants.Mode.none,
          }}
          ref={ref => {
            this.camera = ref;
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
              position: 'absolute',
              bottom: 0,
            }}>
              <Text
                style={styles.textStandard}>
                {this.state.faceDetected ? 'Face Detected' : 'No Face Detected'}
              </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              display: this.state.faceDetected && !this.state.pictureTaken ? 'flex' : 'none',
            }}>
              {/* <Text
                style={styles.countdown}
              >
                {this.state.countDownSeconds}  
              </Text> */}
          </View>
        </Camera>
        );
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
          } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
          } else {
        return (
            <ScrollView scrollEventThrottle={16}>

                <View style={{backgroundColor: '#fff', height: 450, marginBottom: 10}}>
                        <Swiper>
                            <View style={{flex:1}}>
                                <Image
                                style={{flex:1, height:null, width:null, resizeMode: 'contain'}}
                                source={{uri : this.props.val.image1}} />
                            </View>
                            <View style={{flex:1}}>
                            <Image
                                style={{flex:1, height:null, width:null, resizeMode: 'contain'}}
                                source={{uri : this.props.val.image2}} />
                            </View>
                            <View style={{flex:1}}>
                            <Image
                                style={{flex:1, height:null, width:null, resizeMode: 'contain'}}
                                source={{uri : this.props.val.image3}} />
                            </View>
                            <View style={{flex:1}}>
                            <Image
                                style={{flex:1, height:null, width:null, resizeMode: 'contain'}}
                                source={{uri : this.props.val.image4}} />
                            </View>
                        </Swiper> 
                </View>

                <Card>
                    <View header style={{ borderBottomWidth: 1, borderBottomColor:'#dee0e2', flexDirection: 'row' }}>
                        <Text style={{fontSize: 24, marginLeft: 2, marginBottom: 20, fontWeight: '700'}}>{this.props.val.name}</Text>
                    </View>
                    
                    <View header style={{borderBottomWidth:1,borderBottomColor:'#dee0e2'}}>
                        <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>CATEGORY</Text>
                        <Text style={{ fontSize: 16, fontWeight: '200', marginTop: 2}}>{this.props.val.category}</Text>
                        <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>COLOR</Text>
                        <Text style={{ fontSize: 16, fontWeight: '200', marginTop: 2}}>{this.props.val.color}</Text>
                        <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>PRICE</Text>
                        <Text style={{ fontSize: 16, fontWeight: '200', marginTop: 2}}>{this.props.val.price}</Text>
                        <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>DESCRIPTION</Text>
                        <Text style={{ fontSize: 16, fontWeight: '200', marginTop: 2 , marginBottom: 10 }}>{this.props.val.description}</Text>
                    </View>

                    <View>
                            { this.state.ShowCameraReview && this.CameraReview() }
                    </View>

                    <View style={{flexDirection: 'row',justifyContent: 'center'}}>
                        <View style={ {marginTop:21, backgroundColor: 'white'}}>
                            <Image
                            style={{flex:1, height: 80, width: 80, resizeMode: 'cover', borderRadius: 5, borderWidth: 1}}
                                source={require('../../assets/emotionwow_icom.png')} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 35, fontWeight: '500', marginTop: 35 }}>{ this.state.clickWow }</Text>
                        </View>
    

                        <View style={{ marginTop:25, backgroundColor: 'white' }}>
                            <Image
                            style={{flex:1, height: 80, width: 80, resizeMode: 'cover', borderRadius: 5, borderWidth: 1}}
                                source={require('../../assets/emotionhappy_icom.png')} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 35, fontWeight: '500', marginTop: 35 }}>{ this.state.clickHappy }</Text>
                        </View>
    
    
                        <View style={{ marginTop:22, backgroundColor: 'white' }}>
                            <Image
                            style={{flex:1, height: 80, width: 80, resizeMode: 'cover', borderRadius: 5, borderWidth: 1}}
                            source={require('../../assets/emotionbad_icom.png')} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 35, fontWeight: '500', marginTop: 35 }}>{ this.state.clickDislike }</Text>
                        </View>
                    </View>
                </Card>

                <View style={{ marginTop: 5, marginBottom: 5 }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                { this.state.ShowCardList && <CardRecommend/> }
                            </ScrollView>
                </View>

            </ScrollView>
        );
                }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
  textStandard: {
    fontSize: 18, 
    marginBottom: 10, 
    color: 'white'
  },
  countdown: {
    fontSize: 40,
    color: 'white'
  }
});
  
const mapStateToProps = ({ MenageReducers, MenageLogin }) => {
    const { val } = MenageReducers;
    const { token } = MenageLogin;
    return { val, token };
}
const mapDispatchToprops = dispatch => ({
    RecommendProductAction: (recommend) => dispatch(RecommendProductAction(recommend)),
})
export default connect(mapStateToProps,mapDispatchToprops)(DetailCategoryPantsScreenCustomer);