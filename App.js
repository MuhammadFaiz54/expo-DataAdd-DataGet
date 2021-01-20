import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from "./src/Components/Home"
import Chatpage from "./src/Components/Chatpage"

class App extends Component {


  render(){
  return (
    <View style={styles.container}>
    </View>
  );
}}
var obj1 ={
  Home :{
    screen: Home ,
    navigationOptions:{
      headerShown: false
    }

  },
  Chatpage :{
    screen: Chatpage, 
     
  }
}

const Stacknavigator = createStackNavigator (obj1)





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer (Stacknavigator)