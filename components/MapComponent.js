import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS, icons } from "../constants";
import { MapStyle } from "../styles";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const MapComponent = ({ route }) => {
  // const userDestination = route.params;
  // const [selectedPlace, setSelectedPlace] = React.useState(null)
  const initialRegion = {
    latitude: 6.927079,
    longitude: 79.861244,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View>
      <MapView
        style={{
          width: "100%",
          height: "91%",
        }}
        customMapStyle={MapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        showsUserLocation={true}
        followsUserLocation={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
      >
        {/* {userOrigin.latitude != null &&   
                        <MapView.Marker coordinate = {userOrigin} anchor = {{x:0.5,y:0.5}} >
                            <Image 
                                source ={require('../assets/images/pickupIcon.png')}
                                style ={styles.markerOrigin2}
                                resizeMode ="cover"
                            />
                        </MapView.Marker>
                     } */}

        {userDestination.latitude != null && (
          <MapView.Marker
            coordinate={userDestination}
            anchor={{ x: 0.5, y: 0.5 }}
          >
            <Image
              source={require("../assets/images/pickupIcon.png")}
              style={styles.markerDestination}
              resizeMode="cover"
            />
          </MapView.Marker>
        )}
      </MapView>
    </View>
  );
};

export default MapComponent;

const styles = StyleSheet.create({});
