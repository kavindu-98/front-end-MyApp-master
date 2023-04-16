import { StyleSheet, Text, View,  StatusBar, TouchableOpacity, ScrollView, SafeAreaView, Image, Animated, BackHandler, TextInput} from 'react-native';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Header, Icon, ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, icons } from '../constants';
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";

import {
  IconButton,

} from "../components";
import { HeaderBar , TextIconButton, Rating, TextButton, MapComponent} from "../components";

import * as Animatable from 'react-native-animatable';

import { ImageBackground } from 'react-native';
import HomeScreen from './HomeScreen';





const SetDestiOnMap = ({ Route }) => {


  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["22%"];   


  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Max_Height = 100;
  const Header_Min_Height = 40;
 
  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height- Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp'
  }) 

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
                 flex: 3,
                  height : "100%",
                  backgroundColor: COLORS.gray10,
                  // alignItems: 'center',
                  // justifyContent: 'center',
                }}
            >
                  
          
         
                    
            
         
     

      <MapComponent>

</MapComponent>
<HeaderBar
             title={'Canada Friendship Rd, Katunaya...'}
             leftOnPressed={() => navigation.goBack()}
            
             right={true}
             icon={icons.left_arrow}
             titleStyle={{
              color: COLORS.black,
              // backgroundColor: COLORS.gray100
             }}
             containerStyle={{
                 position: 'absolute',
                 top: SIZES.padding * 2,
                //  height: "15%",
                //  width: SIZES.width,
                 backgroundColor: COLORS.gray100
                
             }}
             containerStyle2={{

              backgroundColor: COLORS.gray100
             
          }}
        
           />
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
                >Choose a Destination</Text>
                  <Text
                style={{
                  color: COLORS.black,
                  // fontWeight: 1,
                  ...FONTS.h5,
                  alignItems: 'center',
                  marginLeft: 20,
                  fontSize: 12
                }}
                >Please select a valid destination location on the map</Text>
                       <TextIconButton
                      label="SET DESTIONATION"
                      customContainerStyle={{
                      width: "92%",
                      height: 55,
                      marginLeft: 16,
                      borderRadius: SIZES.radius_btn4,
                      marginTop: SIZES.padding2
                      }}
                      customLabelStyle={{
                      color: COLORS.white,
                      alignItems: 'center',
                      marginLeft: -15,
                      ...FONTS.h2,
                      
                      }}
                      onPress={() => {navigation.navigate('SeleDriver')}}
                   />
              </BottomSheetView>
            </BottomSheet>
              
          
                           
            </View>

   
    )
}

// function SlidingUpPanel() {
//   return (
    
//           <View
//               style={{
//                flex: 1,
           
//                 backgroundColor: COLORS.gray10,
//                 // alignItems: 'center',
//                 // justifyContent: 'center',
//               }}
//           >
            
           
        
//           </View>


//   )
// }



  return (
    <View style={{ flex: 1 }}>
         <StatusBar
                        style="auto"
                        />
    
    {renderMap()}
    {/* {SlidingUpPanel()} */}
  </View>
  )
}

export default SetDestiOnMap;

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
  header: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
   
    
    
},
Title: {
    // justifyContent: 'flex-end',
    color: COLORS.black,
    ...FONTS.h3,
    fontWeight: 'bold',
    marginTop: 45,
    marginLeft: 10,
     justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  button: {
    // marginLeft: 10,
    alignItems: 'flex-end', 
    
    marginTop: 35

},







})