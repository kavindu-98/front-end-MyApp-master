import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { Component, useEffect } from "react";
import { COLORS, SIZES, FONTS, icons } from "../constants";
import { MapStyle } from "../styles";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
// import { PickupLocation } from "../screens";
import { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";

// const data = useSelector((state) => state.mapData);



const MapComponent = ({}) => {


  const data = useSelector((state) => state.mapData);
console.log(data);

  // const [selectedPlace, setSelectedPlace] = React.useState(null)

  // const [coordinate, setCoordinate] = React.useState({
  //   latitude: data.latitude,
  //   longitude: data.longitude,
  //   // latitudeDelta: PickupLocation.latitudeDelta,
  //   // longitudeDelta: PickupLocation.longitudeDelta,
  // });

  // const [coordinate1, setCoordinate1] = React.useState({

  //   latitude: dropLocation.geometry.location.lat,
  //   longitude: dropLocation.geometry.location.lng,
  //   // latitudeDelta: PickupLocation.latitudeDelta,
  //   // longitudeDelta: PickupLocation.longitudeDelta,
  // });

  return (
    <View>
      <MapView
        style={{
          width: "100%",
          height: "90%",
        }}
        customMapStyle={MapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={{  latitude: data.latitude,
          longitude: data.longitude,latitudeDelta: 0.2, longitudeDelta: 0.2 }}
        showsUserLocation={true}
        followsUserLocation={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
      >
        {data.latitude!= null && (
          <Marker coordinate={data} anchor={{ x: 0.5, y: 0.5 }}>
            <Image
              source={require("../assets/images/pickupIcon.png")}
              style={styles.markerOrigin2}
              resizeMode="cover"
            />
          </Marker>
       )} 

        {/* {dropLocation != null && (
            <Marker
              coordinate={coordinate1}
              anchor={{ x: 0.5, y: 0.5 }}
            >
              <Image
                source={require("../assets/images/pickupIcon.png")}
                style={styles.markerDestination}
                resizeMode="cover"
              />
            </Marker>
          )} */}
        {/* {this.props.userDestination.latitude !== null &&
                        <MapViewDirections 
                          origin={this.props.userOrigin}
                          destination={this.props.userDestination}
                          apikey={GOOGLE_MAPS_APIKEY}
                          strokeWidth={4}
                          strokeColor={colors.black}
                        />
                    }  */}
      </MapView>
    </View>
  );
};

export default MapComponent;

const styles = StyleSheet.create({
  markerDestination: {
    width: 16,
    height: 16,
  },
});
