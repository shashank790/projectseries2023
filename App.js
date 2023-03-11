import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Camera, CameraType} from 'expo-camera';
import * as Medialibrary from 'expo-media-library';



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
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    borderRadius: 20,

  }
});

