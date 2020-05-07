import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';





export default class App extends React.Component {
  

  login() {
  
    var user = this.state.email;
    var pword = this.state.password;
    console.log(user);
  
    const Http = new XMLHttpRequest();
    const url ='https://script.google.com/macros/s/AKfycbzVgaFEmUfvq52prjdGPU4-4ieUOvWV-IwHYDBlj7me64GIHUc/exec'
    var data = "?username="+user+"&password="+pword+"";
    Http.open("GET", String(url+data));
    Http.send();

    Http.onreadystatechange = (e) => {
     var rt = Http.responseText;
      console.log(String(rt));
      console.log(Http.readyState);
    if(Http.readyState == 4)
    {
      if(String(rt) == "true")
      {
        console.log("works");
        alert("Success!");

      }
      else
      {
        console.log("failed login");
        alert("Failed login. Try again, or ask administrator for login");
      }
    }
    }


    /*
    fetch('https://script.google.com/macros/s/AKfycbzVgaFEmUfvq52prjdGPU4-4ieUOvWV-IwHYDBlj7me64GIHUc/exec?username=Kavin&password=123', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          jsonData: json.body,
        });
      })
      .catch(error => {
        console.error(error);
      });
    */
  }
  state={
    email:"",
    password:"",
    //jsonData:"",
  }
  render(){
    return (
      
      <View style={styles.container}>
        <Text style={styles.logo}>DTE</Text>
        
        
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Username..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text}) }/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>

        <View style={{ paddingTop: 30 }}>
          <Text>{this.state.jsonData}</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password? Ask administrator</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.loginBtn}>
        <Button onPress={()=>this.login()} title="Login"/>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.loginText}>Ask admin for login</Text>
        </TouchableOpacity>

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
