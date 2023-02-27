import { StyleSheet, Text, View,  StatusBar, TouchableOpacity, ScrollView, SafeAreaView, Image, Animated, BackHandler, TextInput} from 'react-native';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Header, Icon, ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, icons } from '../constants';
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";


import { HeaderBar ,IconButton, TextIconButton, Rating, TextButton, MapComponent, DriverCard} from "../components";

import * as Animatable from 'react-native-animatable';

import { ImageBackground } from 'react-native';
import HomeScreen from './HomeScreen';





const SelectDriver = ({ route}) => {


  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["100%"];   

//   const [selectedPlace, setSelectedPlace] = React.useState(null)
//   const [selectedHotel, setSelectedHotel] = React.useState(null)
//   const [allowDragging, setAllowDragging] = React.useState(true)


//   const _draggedValue = React.useRef(new Animated.Value(0)).current;


// //   let _panel = React.useRef(null);

//   React.useEffect(() => {
//       let { selectedPlace } = route.params;
//       setSelectedPlace(selectedPlace) 
//       // Listener that will diasble panel dragging whenever the mapview is shown
//       _draggedValue.addListener((valueObj) => {
//           if (valueObj.value > SIZES.height) {
//               setAllowDragging(false)
//           }
//       })
//       return () => {
//           _draggedValue.removeAllListeners()
//       }
//   }, [])
const navigation = useNavigation();





function renderMap() {
    return (
 
            <View
                style={{
                 flex: 0.5,
                  height : "100%",
                  backgroundColor: COLORS.gray10,
                  // alignItems: 'center',
                  // justifyContent: 'center',
                }}
            >
                     {/* header */}
                     {/* <TouchableOpacity onPress={() => {navigation.navigate('SetDesM')}}> */}
                
                            {/* </TouchableOpacity> */}


                                 <MapComponent></MapComponent>
                                 <HeaderBar
                              // title={selectedPlace?.name}
                              leftOnPressed={() => {navigation.navigate('SetDesM')}}
                              right={false}
                              containerStyle={{
                                  position: 'absolute',
                                  top: SIZES.padding * 2,
                                  // height: "20%",
                                  // width: SIZES.width,
                                  backgroundColor: COLORS.transparentWhite
                                 
                              }}
                            />
                
          
                           
            </View>

   
    )
}

function SlidingUpPanel() {
  return (
    
          <View
              style={{
               flex: 1,
           
                backgroundColor: COLORS.gray10,
                // alignItems: 'center',
                // justifyContent: 'center',
              }}
          >
            <BottomSheet
            // ref={sheetRef}
            snapPoints={snapPoints}
            // enablePanDownToClose={true}
            onClose={() => setIsOpen(false)}
            backgroundStyle={{ borderRadius: 50}}
          
            >
              <ScrollView>

          
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
                  marginLeft: 25,
                  fontSize: 20
                }}
                >SELECT A DRIVER</Text>
                <TouchableOpacity onPress={() => {navigation.navigate('DriverDetails')}}>
                <DriverCard ImageUri={require('../assets/images/Profile2.jpg')} >
                    
                </DriverCard></TouchableOpacity>
                <DriverCard ImageUri={require('../assets/images/Profile3.jpg')}>
                    
                </DriverCard>
                <DriverCard ImageUri={require('../assets/images/Profile4.jpg')}>
                    
                </DriverCard>
                 
                   {/* <TextInput
                            style={styles.input}
                            placeholder="Enter Destionation"
                            // autoFocus
                            // value={email}
                            // onChangeText={text => setEmail(text)}
                          /> */}
              </BottomSheetView>
              </ScrollView>
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

export default SelectDriver;

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








})