import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { not } from 'react-native-reanimated';

export default class App extends React.Component{
    eventShow() {
    const Http = new XMLHttpRequest();
    const url ='https://script.google.com/macros/s/AKfycbzVgaFEmUfvq52prjdGPU4-4ieUOvWV-IwHYDBlj7me64GIHUc/exec?action=showEvents'
    Http.open("GET", String(url));
    Http.send();

    Http.onreadystatechange = (e) => {
      var right = true;
      var rt = Http.responseText;
      console.log(String(rt));
      console.log(Http.readyState);
      if(right){
        return rt; 
      }
    }
    }

    Attending(){
      const Http = new XMLHttpRequest();
      const url ='https://script.google.com/macros/s/AKfycbzVgaFEmUfvq52prjdGPU4-4ieUOvWV-IwHYDBlj7me64GIHUc/exec?action=showEvents?action=add'
      Http.open("Get", )
    }

    static navigationOptions = {gestureEnabled: false};
    render(){
        return(
          <View style={styles.container}>
          <TouchableOpacity style={styles.loginBtn}>
          <Button onPress={()=>this.eventShow()} title="showEvent"/>
          </TouchableOpacity>
          </View>

        )

    }


}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    },
    imageDTE:{
      flex: 1,
      width: 300,
      height: 200,
      resizeMode: 'contain'
    }
    
  });