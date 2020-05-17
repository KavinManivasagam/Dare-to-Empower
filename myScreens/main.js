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

    _OnPress(){
      const newState = !this.state.toggle;
      this.setState({toggle: newState})
      

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

      const {toggle} = this.state;
      const textValue = toggle?"Attend":"Cancel";
      return (
      
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
            onPress={()=>this._OnPress()}
            >
              <Text style={styles.AttendText}>{textValue}</Text>
            </TouchableOpacity>
            
           

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