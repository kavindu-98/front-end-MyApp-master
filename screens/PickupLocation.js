import { StyleSheet, Text, View,  StatusBar, TouchableOpacity, ScrollView, SafeAreaView, Image, Animated, BackHandler, TextInput} from 'react-native';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Header, Icon, ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, icons } from '../constants';
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";

import {
  IconButton,

} from "../components";
import { HeaderBar , TextIconButton, Rating, TextButton, MapComponent} from "../components";

import * as Animatable from 'react-native-animatable';

import { ImageBackground } from 'react-native';
import HomeScreen from './HomeScreen';





const PickupLocation = ({ route}) => {


  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["100%"];   


  const navigation = useNavigation();





function renderMap() {
    return (
 
            <View
                style={{
                 flex: 2,
                  // height : "100%",
                  backgroundColor: COLORS.transparentWhite,
                  // alignItems: 'center',
                  // justifyContent: 'center',
                }}
            >
       
                 <MapComponent>

                 </MapComponent>
                 <HeaderBar
                              // title={selectedPlace?.name}
                              leftOnPressed={() => navigation.goBack()}
                             
                              right={false}
                              icon={icons.left_arrow}
                              containerStyle={{
                                  position: 'absolute',
                                  top: SIZES.padding * 2,
                                  // height: "20%",
                                  // width: SIZES.width,
                                  // backgroundColor: COLORS.red1Font
                                 
                              }}
                            />
          
                           
            </View>

   
    )
}

function SlidingUpPanel() {
  return (
    
          <View
              style={{
               flex: 2,
           
                backgroundColor: COLORS.gray10,
              }}
          >
            <BottomSheet
            // ref={sheetRef}
            snapPoints={snapPoints}
            // enablePanDownToClose={true}
            onClose={() => setIsOpen(false)}
            backgroundStyle={{ borderRadius: 50}}
          
            >
              <BottomSheetView
                style={{
                  // borderRadius: 5,
                  // backgroundColor: COLORS.gray10
                }}>
                <Text
                style={{
                  color: COLORS.black,
                  // fontWeight: 1,
                  ...FONTS.h2,
                  alignItems: 'center',
                  fontWeight: 'bold',
                  marginLeft: 20,
                  fontSize: 20
                }}
                >Choose a Pick-up Location</Text>
                  <Text
                style={{
                  color: COLORS.black,
                  // fontWeight: 1,
                  ...FONTS.h5,
                  alignItems: 'center',
                  marginLeft: 20,
                  fontSize: 12
                }}
                >Book on demand or pre-scheduled rides</Text>
                <View style={{
                  flexDirection: 'row'
                }}>
                   {/* <TextInput
                            style={styles.input}
                            placeholder="Enter Destionation"
                            // autoFocus
                            // value={email}
                            // onChangeText={text => setEmail(text)}
                          /> */}
                     
                          <GooglePlacesAutocomplete
                              placeholder='Enter Destination'
                              onPress={(data, details = null) => {
                                // 'details' is provided when fetchDetails = true
                                console.log(data, details);
                              }}
                              query={{
                                key: 'AIzaSyA90qiuk4qHsW30DrC_8krLEhGBn3wWnFk',
                                language: 'en',
                              }}
                              styles={{
                                textInputContainer: {
                                 
                                  backgroundColor: COLORS.transparentWhite,
                                  borderColor: COLORS.outLine,
                                  borderRadius: 8,
                                  borderWidth: 1,
                                  width: "88%",
                                  height: 50,
                                  marginLeft: 17,
                                  marginTop: SIZES.padding3,
                                  padding: SIZES.padding2
                                },
                                textInput: {
                                  height: 38,
                                  color:  COLORS.gray70,
                                  fontSize: 16,
                                  marginTop: -10
                                  // maxWidth: "70%"
                                },
                                predefinedPlacesDescription: {
                                  color: '#1faadb',
                                },
                              }}
                            />

                            <IconButton
                                    icon={icons.Search}
                                    onPress={() => {navigation.navigate('Destination')}}
                                    iconStyle={{
                                      width: 25,
                                      height: 25,
                                      marginTop: 22,
                                      marginLeft: 5,
                                        tintColor: COLORS.black
                                    }}
                                ></IconButton>
                          </View>
              </BottomSheetView>
            </BottomSheet>
           
        
          </View>


  )
}



  return (
    <View style={{ flex: 1 }}>
       <StatusBar
                        style="auto"
                        />
    
    {renderMap()}
    {SlidingUpPanel()}
  </View>
  )
}

export default PickupLocation;

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.transparentWhite,
    borderColor: COLORS.outLine,
    borderRadius: 8,
    borderWidth: 1,
    width: "85%",
    height: 50,
    marginLeft: 17,
    marginTop: SIZES.padding3,
    padding: SIZES.padding2

  },

//   header: {


// nameTitle : {
//    color: COLORS.black,
//    marginTop: 15,
//    fontSize: SIZES.h3,

   
// },
// proname : {
//   alignItems: 'center'
// },
// nametag : {
//   color: COLORS.dark_grey,
//   marginTop: 3,
//   fontSize: SIZES.h3,

  
// },
// prodes : {
//   color: COLORS.grey,
//   marginTop: -5,
//   padding: 35,
//   fontSize: SIZES.body5,

  
// },




})