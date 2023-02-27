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

import{

  Employee

} from '../Data/Data';





const DailyRides = () => {


  const navigation = useNavigation();





function renderMap() {
    return (
 
            <View
                style={{
                 flex: 1,
                  height : "100%",
                  flexDirection: 'column',
                  backgroundColor: COLORS.darkb_blue,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
            >
                     {/* header */}
                     <HeaderBar
                              // title={selectedPlace?.name}
                              icon={icons.close}
                              leftOnPressed={() => {navigation.navigate('Home1')}}
                              iconStyle3={{
                                tintColor: COLORS.white,
                              }}
                              right={false}
                              title= "Daily Rides"
                              containerStyle={{
                                  position: 'absolute',
                                  top: SIZES.padding * 2,
                                  // height: "20%",
                                  // width: SIZES.width,
                                  // backgroundColor: COLORS.red1Font
                                 
                              }}
                              containerStyle2={{
                              
                                // height: "20%",
                                // width: SIZES.width,
                                backgroundColor: COLORS.transparentWhite,
                                
                               
                            }}
                        
                             
                            />

{Employee.map((item,index) => {    
                       
                       return(
                        <View  style={{ 
                      //  flex: 1,
                       width: "100%",
                       alignItems: 'center',
                       justifyContent: 'center',

                        }}>
                    <View style={styles.Card}>
                            <View style={{
                               marginTop: 18,
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  // justifyContent: 'center',
                                }}>

                                  <View style={styles.Circle}>
                                      <Image source={item.Image} style={styles.profileimage} resizeMode="center"
                                      />
                                  </View>
                               
                                <Text
                                      style={{
                                        color: COLORS.black,
                                        fontWeight: 'bold',
                                        ...FONTS.h3,
                                        fontSize: 18,
                                        marginTop: 5
                                      }}
                                      >{item.name}</Text>


        

             
                        <Text
                                style={{
                                  color: COLORS.black,
                                  // fontWeight: 1,
                                  ...FONTS.h3,
                                  fontSize: 12,
                                }}
                                >{item.EmployeeId}</Text>
                              
                            </View>
                         

                            </View>
                            <View style={styles.Card2}>
                            <View style={{
                               marginTop: 10,
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  // justifyContent: 'center',
                                }}>

                                 
                               
                                <Text
                                      style={{
                                        color: COLORS.black,
                                        fontWeight: 'bold',
                                        ...FONTS.h1,
                                        fontSize: 23
                                      }}
                                      >{item.name}</Text>


        

             
                        <Text
                                style={{
                                  color: COLORS.black,
                                  // fontWeight: 1,
                                  ...FONTS.h2,
                                  fontSize: 15
                                }}
                                >{item.EmployeeId}</Text>
                              
                            </View>
                                    <TextIconButton
                              label="SAVE"
                              customContainerStyle={{
                              width: "90%",
                              height: 55,
                            
                              borderRadius: SIZES.radius_btn4,
                              marginTop: SIZES.padding1
                              }}
                              customLabelStyle={{
                              color: COLORS.white,
                              alignItems: 'center',
                              marginLeft: -15,
                              ...FONTS.h2,
                              
                              }}
                              // onPress={HomeScreen}
                          />

                            </View>
                            </View>
   )

  }
  )}
                          
                
          
                           
            </View>

   
    )
}





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

export default DailyRides;

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

  profileimage: {
    width: 120,
    height: 120,
    borderRadius: 1900,
    // overflow: "hidden",
    
  
  },
  Circle:{
    width: 120,
    height: 120,
    borderRadius: 100,
marginTop:2
   
    

    // overflow: "hidden",

  },


  Card:{
    width: "75%",
    height: 200,
   borderRadius: 30, 
    backgroundColor: COLORS.white,
    marginTop: 100

  },
  Card2:{
    width: "85%",
    height: 400,
   borderRadius: 30, 
    backgroundColor: COLORS.white,
    marginTop: 20

  },
  Star:{
    width: 24,
    height: 24,

    margin: 5,
    
  },
  Star1:{
    width: 44,
    height: 44,

   
    
  }







})