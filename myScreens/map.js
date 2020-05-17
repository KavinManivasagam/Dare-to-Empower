import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Dimensions, Alert, AsyncStorage, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { Marker } from 'react-native-maps';

import * as Location from 'expo-location';
import { NavigationActions, StackActions } from 'react-navigation'
import openMap from 'react-native-open-maps';

//import moment from 'moment';

let { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.1 //Very high zoom level
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRegion: null,
      hasLocationPermissions: false,
      locationResult: null,
      location: null,
      markers: global.markers,

      index: 0,

      region: {
        latitude: 45.52220671242907,
        longitude: -122.6653281029795,
        latitudeDelta: 0.02864195044303443,
        longitudeDelta: 0.020142817690068,
      },

    };
  }




  distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1 / 180;
      var radlat2 = Math.PI * lat2 / 180;
      var theta = lon1 - lon2;
      var radtheta = Math.PI * theta / 180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") { dist = dist * 1.609344 }
      if (unit == "N") { dist = dist * 0.8684 }
      if(unit == "M") {dist = dist}
      return dist;
    }
  }
  componentDidMount() {
    console.log('mount')
    this.focusListener = this.props.navigation.addListener('willFocus', () => {
      this.setState({ count: 0, markers: global.markers});
      console.log('move')
    });
    this.getLocationAsync();
    this.index = 0;

  }


  handleMapRegionChange = (map) => {
    //console.log(map);
    this.setState({ mapRegion: map });
  }
  componentWillUnmount() {
    // Remove the event listener before removing the screen from the stack
    this.focusListener.remove();
  }


  async getLocationAsync() {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    } else {
      this.setState({ hasLocationPermissions: true });
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location)
    this.setState({ mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: LATITUDE_DELTA, longitudeDelta: LONGITUDE_DELTA } });
    this.setState({ locationResult: JSON.stringify(location) });
    this.setState({ location: { latitude: location.coords.latitude, longitude: location.coords.longitude } });

    // Center the map on the location we just fetched.

  }

    _OnPress(marker){
        Alert.alert(
            "Event Location", 
            marker.name+" is "+this.distance(marker.location.latitude, marker.location.longitude, this.state.location.latitude, this.state.location.longitude, "M").toFixed(2)+" miles away. Do you want to navigate there?",
            [
            {
              text: "No"
            },
            {
              text: "Yes", onPress: () =>{
                openMap({ end: marker.address })
            

              }
            }
          
          ],
          {cancelable: false}  
          );
    }
  render() {
      return (
        <MapView
            style = {styles.container}
            region={this.state.mapRegion}
        >
            <Marker
                coordinate={this.state.location}
                title={'Your Location'}
            
            />
            {this.state.markers.map(marker => (
            <Marker
                coordinate={marker.location}
                title={marker.name}
                onPress={() => this._OnPress(marker)}
                pinColor={'#0000FF'}
                key = {marker.key}
            />))}
        </MapView>

      );

  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  endPadding: {
    paddingRight: 0,
  },

  textContent: {
    flex: 1,
  },

});