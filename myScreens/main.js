import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button, FlatList} from 'react-native';
import 'react-native-gesture-handler';
import {ListItem, Body} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { not } from 'react-native-reanimated';

export default class App extends React.Component{
    state={

      
      data: global.data,
      toggle: false,
      use: global.user,

    }

    _OnPress(item){
       var uname = global.user;
       var event = item.Name;
       var date = item.Date;
      if(!item.Signed){
        if(item.Space!=0){
        const Http = new XMLHttpRequest();
        const url ='https://script.google.com/macros/s/AKfycbzVgaFEmUfvq52prjdGPU4-4ieUOvWV-IwHYDBlj7me64GIHUc/exec'
        var data = "?username="+user+"&event="+event+"&date="+date+"&action=add";
        Http.open("GET", String(url+data));
        Http.send();
    
        Http.onreadystatechange = (e) => {
        var rt = String(Http.responseText);
        console.log(rt);
        if(Http.readyState == 4)
        {
          if(String(rt.substring(0,5)) == "true,")
          {
            global.data = JSON.parse(rt.substring(5,rt.length));
            this.setState({data:global.data});
            alert("Successfully signed up!");
            
    
          }
          else
          {
            alert("Server Error, Someone signed up for the last spot at the same time as you. Sorry!");
          }
        }
        }      
      }
      else{
        alert('Sorry! This event is full.');
      }
    }
      else{
        const Http = new XMLHttpRequest();
        const url ='https://script.google.com/macros/s/AKfycbzVgaFEmUfvq52prjdGPU4-4ieUOvWV-IwHYDBlj7me64GIHUc/exec'
        var data = "?username="+user+"&event="+event+"&date="+date+"&action=cancel";
        Http.open("GET", String(url+data));
        Http.send();
    
        Http.onreadystatechange = (e) => {
          var rt = Http.responseText;
    
        if(Http.readyState == 4)
        {
            var stuff = JSON.parse(rt);
            this.setState({data: stuff});
            alert("Successfully cancelled attendance!");
        }
        } 
      }    
    }


    attending(){
      /*const Http = new XMLHttpRequest();
      const url ='https://script.google.com/macros/s/AKfycbzVgaFEmUfvq52prjdGPU4-4ieUOvWV-IwHYDBlj7me64GIHUc/exec?action=showEvents?action=add'
      Http.open("Get", )*/

      this.props.navigation.replace('SignUp');

      alert('signup not implemented yet');

    }


    static navigationOptions = {gestureEnabled: false};
    _renderItem = ({ item }) => {

      console.log(item.Date);
      const textValue = item.Signed?"Cancel":"Attend";
    
     return(          
      
      <ListItem style={{ marginLeft: 0, backgroundColor: '#465881' }} >

            <View  style = {{width:'70%', flexDirection:'row'}}>

            <Body>

                <Text style={{ marginTop: 5, marginLeft: 10, flex: 1, color: 'white', fontWeight:"bold" }}>Event Name: {item.Name}</Text>
                <Text style={{ marginTop: 5,marginLeft: 10,flex: 1,  color: 'white' }}>{item.Address}</Text>
                <Text style={{ marginTop: 5,marginLeft: 10,flex: 1,  color: 'white' }}>{item.Date}</Text>
                <Text style={{ marginTop: 5,marginLeft: 10,flex: 1,  color: 'white' }}>{item.Time}</Text>

            </Body>
                  

            </View>
            <View style={styles.SpcShow}>

            <Text style={{color:'white', fontWeight:"bold"}}>{item.Space}</Text>

            </View>
            <TouchableOpacity 
            style={styles.mainBtn}
            onPress={()=>this._OnPress(item)}
            >
              <Text style={styles.AttendText}>{textValue}</Text>
            </TouchableOpacity>
            </ListItem>
            )
            
           

    }
    
    render(){
        return(
          <View style={styles.container}>
              <View style = {{width:'100%', flex:4, justifyContent: this.state.data.length ==0 ? 'center' : 'flex-start'}}>
              
              {this.state.data.length == 0 ? <Text style={{ fontSize: 30 * wid, color: 'white', fontFamily: 'WSB', alignSelf:'center', }}>No Events Available</Text> :<FlatList style={{ width: '100%' }}
                data={this.state.data}
                renderItem={this._renderItem}
                keyExtractor={item => item.id}

              // stickyHeaderIndices={this.state.stickyHeaderIndices}
              />}
              </View>              
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
    AttendText:{
      fontWeight:"bold", 
      color:'#fff', 
      fontSize:16
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
    mainBtn:{
      width:"25%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginLeft: 20,
      
    },
    SpcShow: {
      width:"9%",
      backgroundColor:"#fb5b5a",
      borderRadius:100,
      height:31,
      alignItems:"center",
      justifyContent:"center",
      marginLeft: -27,
      
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
