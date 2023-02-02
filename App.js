import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import SearchScreen from './screens/SearchScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
