import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Camera, CameraType} from 'expo-camera';
import * as Medialibrary from 'expo-media-library';
import Button from './src/components/Button';


export default function App() {
  //ask for permissions to use the camera and the medialibrary access
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  //keep track of type of camera for each state (front/back), default back
  const [type, setType] = useState(Camera.Constants.Type.back);
  //keep track of flash, default off
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  //reference to camera
  const cameraRef = useRef(null);

  //request permissions to the media library
  useEffect(() => {
    (async () => {
      Medialibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  },[] )

  const takePicture = async () => {
    if(cameraRef){
      try{
        const data = await cameraRef.current.takePicureAsync();
        console.log(data);
        setImage(data.uri);
    
      } catch(e){
        console.log(e);
      }
    }
  }
  if(hasCameraPermission == false){
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      <Camera 
      style = {styles.camera}
      type = {type}
      flashMode = {flash}
      ref = {cameraRef}
      >
        <Text>hello</Text>
      </Camera>
      <View>
        <Button icon = 'camera' onPress = {takePicture}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingBottom: 20
  },
  camera: {
    flex: 1,
    borderRadius: 20,

  }
});

