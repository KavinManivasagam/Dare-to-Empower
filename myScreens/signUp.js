import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button, FlatList} from 'react-native';
import 'react-native-gesture-handler';
import {ListItem, Body} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { not } from 'react-native-reanimated';


export default class App extends React.Component {

        addMe(){
            var use = this.state.user;
            var going = this.state.yes;
            var ev = this.state.event;

            const Http = new XMLHttpRequest();
            const url ='https://script.google.com/macros/s/AKfycbzVgaFEmUfvq52prjdGPU4-4ieUOvWV-IwHYDBlj7me64GIHUc/exec'
            const data = "?action=add"+"&username="+use+"&yes="+going+"&event="+ev;
            Http.open("GET", String(url+data));
            Http.send();
            Http.onreadystatechange = (e) => {
            if(Http.readyState == 4)
            {
                console.log("success");
                alert("You have been added to this event!");
                this.props.navigation.replace('Main');
            }

        }
    }
        state={
            user:"",
            yes:"",
            event:"",
          }
        
        render(){
            return (
                <View style={styles.container}>

                <View style={styles.inputView} >
                <TextInput  
                 style={styles.inputText}
                    placeholder="Username..." 
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({user:text}) }/>
                 </View>

                <View style={styles.inputView} >
                <TextInput  
                style={styles.inputText}
                    placeholder="yes..." 
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({yes:text})}/>
                </View>

                <View style={styles.inputView} >
                <TextInput  
                style={styles.inputText}
                    placeholder="Event..." 
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({event:text})}/>
                </View>
                    
                <TouchableOpacity style={styles.loginBtn}
                onPress={()=>this.addMe()}>
                 <Text style={{fontWeight:"bold", color:'#465881', fontSize:20}}>Attend</Text>
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
      width:"60%",
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