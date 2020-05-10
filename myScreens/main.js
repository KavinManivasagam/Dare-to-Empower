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
      //jsonData:"",
    }


    attending(){
      /*const Http = new XMLHttpRequest();
      const url ='https://script.google.com/macros/s/AKfycbzVgaFEmUfvq52prjdGPU4-4ieUOvWV-IwHYDBlj7me64GIHUc/exec?action=showEvents?action=add'
      Http.open("Get", )*/
      alert('signup not implemented yet');
    }

    static navigationOptions = {gestureEnabled: false};
    _renderItem = ({ item }) => {
      return (
      
          <ListItem style={{ marginLeft: 0, backgroundColor: 'transparent' }} >

            <TouchableOpacity onPress={() => this.attending()} style = {{width:'85%'}}>

            <Body>

                <Text style={{ flex: 1, color: 'white' }}>{item.Name}</Text>
                <Text style={{ flex: 1,  color: 'white' }}>{item.Address}</Text>
                <Text style={{ flex: 1,  color: 'white' }}>{item.Date}</Text>
                <Text style={{ flex: 1,  color: 'white' }}>{item.Time}</Text>

            </Body>
            </TouchableOpacity>
            
          </ListItem>
      );
    };
    
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