import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, Image} from 'react-native';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Header, Icon, ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, icons } from '../constants';
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";

import {
  IconButton,
  TextIconButton

} from "../components"

import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';



const ProfileScreen = () => {

  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["50%"]; 

  const navigation = useNavigation();
  function renderHeader() {
    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: 40,
                marginBottom: 10,
                paddingHorizontal: SIZES.padding,
                alignItems: 'center'
            }}
        >
            {/* Greeting  */}
            <View
                style={{
                    flex: 1
                }}
            >
                <Text style={{
                  color: COLORS.black,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 115, 
                  fontWeight: 'bold',
                  
                  ...FONTS.h5,}}>Employee Profile</Text>
             

            </View>

            {/* Notification */}

            <IconButton
                icon={icons.notifications}
                iconStyle={{
                    tintColor: COLORS.black
                }}
            ></IconButton>
        </View>
    )
}
function LogSlideUp() {
  return (
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
          justifyContent: 'center',
          alignItems: 'center'
          
        }}>

<Text
        style={{
          color: COLORS.black,
          fontWeight: 'bold',
          ...FONTS.h3,
          fontSize: 23
        }}
        >Logout</Text>

        
        <TextIconButton
              label="PENDING..."
              customContainerStyle={{
              width: "90%",
              height: 55,
              backgroundColor: COLORS.redOpacity,
              borderRadius: SIZES.radius_btn4,
              marginTop: SIZES.padding1
              }}
              customLabelStyle={{
              color: COLORS.white,
              alignItems: 'center',
              marginLeft: -15,
              ...FONTS.h2,
              
              }}
              // onPress={signup}
           />
           
           <TextIconButton
              label="CANCEL"
              customContainerStyle={{
              width: "90%",
              height: 55,
              backgroundColor: COLORS.white,
              borderColor: COLORS.gray30,
              borderWidth: 1,
              borderRadius: SIZES.radius_btn4,
              marginTop: SIZES.padding3
              }}
              customLabelStyle={{
              color: COLORS.red1Font,
              alignItems: 'center',
              marginLeft: -15,
              ...FONTS.h2,
              
              }}
              // onPress={signup}
           />


        
         
       
      </BottomSheetView>
    </BottomSheet>

  )
}

  return (
    <ScrollView>

   
    
   <SafeAreaView style={styles.container}>

 {/* header */}
 {renderHeader()}
  

        <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.titlebar}>
          
            </View>
        <View style={{ alignSelf: "center", marginTop: 20}}>
          <View style={styles.profileimage}>
              <Image source={require('../assets/images/EProfile.jpg')} style={styles.profileimage} resizeMode="center"
              />
          </View>

        
        </View>

        <View style={styles.proname}>
          <Text style={styles.nameTitle}>Nishadi Adhikari</Text>
        </View>

        <View 
        style={{    
      alignItems: 'center',
      marginTop: 5
        }}
        >
              <TextIconButton
                      label="Profile info"
                      icon={icons.ProfileE}
                      customContainerStyle={{
                      width: "90%",
                      height: 66,
                      backgroundColor: COLORS.white,
                      borderRadius: SIZES.radius_btn3,
                      marginTop: SIZES.padding3,
                      
                       // alignItems: 'center',
                      justifyContent: 'flex-start',
                      }}
                      customLabelStyle={{
                      color: COLORS.black,
                      marginLeft: 30,
                      // alignItems: 'center',
                      // justifyContent: 'flex-start',
                     
                      ...FONTS.h3,
                      
                      
                      }}
                      customIconStyle={{
                        width: 40,
                        height: 40,
                        marginLeft: 30

                      }}
                      // onPress={signup}
                   />

                  <TextIconButton
                      label="My Daily Rides"
                      icon={icons.DRide}
                      customContainerStyle={{
                      width: "90%",
                      height: 66,
                      backgroundColor: COLORS.white,
                      borderRadius: SIZES.radius_btn3,
                      marginTop: SIZES.padding3,
                      
                       // alignItems: 'center',
                      justifyContent: 'flex-start',
                      }}
                      customLabelStyle={{
                      color: COLORS.black,
                      marginLeft: 30,
                      // alignItems: 'center',
                      // justifyContent: 'flex-start',
                     
                      ...FONTS.h3,
                      
                      
                      }}
                      customIconStyle={{
                        width: 40,
                        height: 40,
                        marginLeft: 30

                      }}
                      // onPress={signup}
                   />

                    <TextIconButton
                      label="Settings"
                      icon={icons.Settings}
                      customContainerStyle={{
                      width: "90%",
                      height: 66,
                      backgroundColor: COLORS.white,
                      borderRadius: SIZES.radius_btn3,
                      marginTop: SIZES.padding3,
                      
                       // alignItems: 'center',
                      justifyContent: 'flex-start',
                      }}
                      customLabelStyle={{
                      color: COLORS.black,
                      marginLeft: 30,
                      // alignItems: 'center',
                      // justifyContent: 'flex-start',
                     
                      ...FONTS.h3,
                      
                      
                      }}
                      customIconStyle={{
                        width: 40,
                        height: 40,
                        marginLeft: 30

                      }}
                      // onPress={signup}
                   />

                  <TextIconButton
                      label="About us"
                      icon={icons.About}
                      customContainerStyle={{
                      width: "90%",
                      height: 66,
                      backgroundColor: COLORS.white,
                      borderRadius: SIZES.radius_btn3,
                      marginTop: SIZES.padding3,
                      
                       // alignItems: 'center',
                      justifyContent: 'flex-start',
                      }}
                      customLabelStyle={{
                      color: COLORS.black,
                      marginLeft: 30,
                      // alignItems: 'center',
                      // justifyContent: 'flex-start',
                     
                      ...FONTS.h3,
                      
                      
                      }}
                      customIconStyle={{
                        width: 40,
                        height: 40,
                        marginLeft: 30

                      }}
                      // onPress={signup}
                   />

                    <TextIconButton
                      label="Logout"
                      icon={icons.Logout}
                      customContainerStyle={{
                      width: "90%",
                      height: 66,
                      backgroundColor: COLORS.white,
                      borderRadius: SIZES.radius_btn3,
                      marginTop: SIZES.padding3,
                      
                       // alignItems: 'center',
                      justifyContent: 'flex-start',
                      }}
                      customLabelStyle={{
                      color: COLORS.black,
                      marginLeft: 30,
                      // alignItems: 'center',
                      // justifyContent: 'flex-start',
                     
                      ...FONTS.h3,
                      
                      
                      }}
                      customIconStyle={{
                        width: 40,
                        height: 40,
                        marginLeft: 30

                      }}
                      // onPress={signup}
                   />
      



        </View>
        <View style={{ 
            justifyContent:'flex-start',
            flexDirection: 'row',
            marginLeft: 30
            }}>
          <Text style={styles.VersionTitle}>Made in</Text>

          <IconButton
                    icon={icons.SL}
                    iconStyle={{
                      marginLeft:5,
                      marginTop: 10,
                      borderRadius: 50
                        // tintColor: COLORS.transparentWhite
                    }}
                ></IconButton>
                 <Text style={styles.VersionTitle}>  with</Text>

                 <IconButton
                    icon={icons.Love}
                    iconStyle={{
                      marginLeft:5,
                      marginTop: 10,
                      borderRadius: 50
                        // tintColor: COLORS.transparentWhite
                    }}
                ></IconButton>
        </View>
        <Text style={styles.Version1}>App version 1.0</Text>


      
       


         </ScrollView>
         </SafeAreaView>

         </ScrollView>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({

  header: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',

},


container: {
  backgroundColor: COLORS.background,
  height: "100%",
  flex: 1
},
titlebar: {
  flexDirection: 'row',

},

profileimage: {
  width: 130,
  height: 130,
  borderRadius: 100,
  overflow: "hidden",

},
nameTitle : {
   color: COLORS.black,
   marginTop: 15,
   fontSize: SIZES.h3,   
},
proname : {
  alignItems: 'center'
},
nametag : {
  color: COLORS.dark_grey,
  marginTop: 3,
  fontSize: SIZES.h3,

  
},
prodes : {
  color: COLORS.grey,
  marginTop: -5,
  padding: 35,
  fontSize: SIZES.body5,

  
},
Version:{
  justifyContent:'flex-start',


},
VersionTitle : {
  color: COLORS.black,
  fontWeight: 'bold',
  marginTop: 15,
  fontSize: SIZES.h3,   
},
Version1:{
  marginLeft:30,
  marginBottom:30
}





})