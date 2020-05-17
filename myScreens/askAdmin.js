import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { not } from 'react-native-reanimated';


export default class App extends React.Component {


  needPass() {
  
    var addie = this.state.address;
    var mess = this.state.message;
    var nombre = this.state.name;
    var rep = this.state.reply;
    console.log(user);
  //exec?action=ask&address=kavin.manivasagam@vhhscougars.org&message=no&name=kavin&reply=kavin.play@gmail.com
    const Http = new XMLHttpRequest();
    const url ='https://script.google.com/macros/s/AKfycbzVgaFEmUfvq52prjdGPU4-4ieUOvWV-IwHYDBlj7me64GIHUc/exec?action=ask'
    var data = "&address="+addie+"&message="+mess+"&name="+nombre+"&reply"+rep+"";
    Http.open("GET", String(url+data));
    Http.send();

    Http.onreadystatechange = (e) => {
     var rt = Http.responseText;
      console.log(String(rt));
      console.log(Http.readyState);
    if(Http.readyState == 4)
    {
      if(String(rt) == "The script completed but did not return anything.")
      {
        console.log("works");
        alert("Your message has been sent!");
        //this.props.navigation.navigate(to the signin page)
        

      }
      else
      {
        console.log("Try sending your email again");
        alert("Sorry, try again please");
      }
    }
    }


  }
  state={
    address:"",
    message:"",
    name:"",
    reply:"",
    //jsonData:"",
  }
  render(){
    return (
      
      <View style={styles.container}>
        <Text style={styles.logo}>Sign up</Text>





      </View>
      
    );
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