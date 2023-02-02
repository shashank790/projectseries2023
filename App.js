import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, Button } from 'react-native';
import CustomButton from './components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>I am a text!</Text>

      <View style={styles.viewVisible}/>

      <TextInput
        style={styles.textInput}
        placeholder={"TextInput"}
      />

      <View style={styles.scrollViewContainer}>
        <ScrollView>
          <Text>First</Text>
          <Text>Second</Text>
          <Text>Third</Text>
          <Text>Fourth</Text>
        </ScrollView>
      </View>

      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

      <Button title="Click me!"/>
      
      {/* <CustomButton/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  viewVisible: {
    borderWidth: 1,
    borderStyle: "dotted",
    width: 50,
    height: 50
  },
  scrollViewContainer: {
    height: 50,
    borderWidth: 1
  },
  textInput: {
    borderWidth: 1
  },
  tinyLogo: {
    width: 50,
    height: 50
  }
});
