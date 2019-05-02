import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions, FaceDetector, DangerZone,ImageManipulator } from 'expo';

export default class CameraReview extends React.Component {

  static defaultProps = {
    countDownSeconds: 0,
    motionInterval: 500, //ms between each device motion reading
    motionTolerance: 1, //allowed variance in acceleration
    cameraType: Camera.Constants.Type.front, //front vs rear facing camera
  }
  
  state = {
    hasCameraPermission: null,
    faceDetecting: false, //when true, we look for faces
    faceDetected: false, //when true, we've found a face
    countDownSeconds: -1, //current available seconds before photo is taken
    countDownStarted: false, //starts when face detected
    pictureTaken: false, //true when photo has been taken
    motion: null, //captures the device motion object 
    detectMotion: false, //when true we attempt to determine if device is still
    data: '',
  };

  countDownTimer = null;

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  componentDidMount(){
    this.motionListener = DangerZone.DeviceMotion.addListener(this.onDeviceMotion);
    setTimeout(()=>{ //MH - tempm - wait a few seconds for now before detecting motion
      this.detectMotion(true);
    },1000);
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
        let resizedPhoto = await ImageManipulator.manipulateAsync(
            photo.uri,
            [{ resize: { width: 108, height: 192 } }],
            { compress: 0, format: "jpg", base64: true }
        );
        console.log("====RESIZE====",resizedPhoto)

        let collection={
          image: resizedPhoto.base64,
          product_id : '21'
          }
      console.log(collection);
      var url = 'http://10.66.4.239:8000/emotion/img/'

      fetch(url, {
          method: 'POST',
          body: JSON.stringify(collection),
          headers:{
          'Content-Type' : 'application/json',
          Authorization : `Token 0c65a0199a311679e60051b136fbf4a968ae7638`
          }
      })        //.then((responseData) => console.log(responseData))    
    }
};

  onPictureSaved = ()=>{
    this.detectFaces(false);
  }

    render(){
        return (
          <Camera 
          style={{ flex: 1, width: 120, height: 170, position: 'absolute', right:3, bottom:3}} 
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
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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