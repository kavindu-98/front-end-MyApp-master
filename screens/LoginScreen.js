import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { View, Text, TextInput, StyleSheet,KeyboardAvoidingView, StatusBar,TouchableWithoutFeedback,Keyboard ,ScrollView, Animated} from 'react-native';
import { Button} from 'react-native-elements';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import { TextIconButton} from "../components"
import {useDispatch,useSelector} from 'react-redux'
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather'
import { logInUser } from '../Actions/userActions';
import { ToastAndroid } from 'react-native';


const Tab = createMaterialTopTabNavigator();

// const API_URL = 'http://192.168.1.107:8080/api/users/';

const LoginScreen  = ({navigation}) => {

const {user,isSuccess,isError,isLoading,message}=useSelector((state)=>state.userLogIn)
  const dispatch = useDispatch();

  const [employeeId, setEmployeeId] = React.useState('');
  const [password, setPassword] = React.useState('');

  const LoginBtnClick = () => {
    dispatch(logInUser({employeeId,password}));
    // navigation.navigate('OTP');
  };
  useEffect(()=>{if(isSuccess){
navigation.navigate('OTP');
  }},[user])

  async function login() {
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          employeeId: employeeId,
          password: password,
        }),
      });
      const data = await response.json();
      console.log('success');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }



      let AnimatedHeaderValue = new Animated.Value(0);
      const Header_Max_Height = 150;
      const Header_Min_Height = 40;
     
      const animateHeaderHeight = AnimatedHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height- Header_Min_Height],
        outputRange: [Header_Max_Height, Header_Min_Height],
        extrapolate: 'clamp'
      })
       

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} > 
    <View style={styles.container}>
                    <StatusBar
                        style="auto"
                        />
        
      <Animated.View style={
        [styles.header,
          {
            height: animateHeaderHeight
          }
        ]}>
          
            <TextIconButton
                           
                           icon={icons.left_arrow}
                           customContainerStyle={{
                            marginTop: SIZES.padding2,
                            backgroundColor: COLORS.transparentWhite,
                            width: 60,
                            marginLeft: -10
                          
                        }}
                        customIconStyle={{
                            height: 30
                        }}
                        onPress={() => {navigation.goBack()}}
                    /> 
                    
            
          <Text style={styles.Title}>Login</Text>
        <View style={styles.button}>

        <TextIconButton
                           label="Sign Up"
                           customContainerStyle={{
                            width: 130,
                            height: 35,
                            borderRadius: SIZES.radius_btn1,
                            // marginLeft: 15,
                            backgroundColor: COLORS.transparentWhite,
                            alignItems: 'flex-end',
                            // justifyContent: 'space-around'
                            
                        }}
                        customLabelStyle={{
                            color: COLORS.red1Font,
                            ...FONTS.h2,
                            // alignItems: 'center',
                            marginLeft: 50,
                            fontSize: 20
                        }}
                        onPress={() => {navigation.navigate('SignUp')}}
                    /> 
                   
        </View>
         
      </Animated.View>
     
      <ScrollView
       scrollEventThrottle={16}
       onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
        {useNativeDriver: false}
       )}
      
      >
      
      <View style={styles.footer}>
        
          <View  style={{ marginTop: SIZES.padding5, margin: SIZES.padding4}}>
                
                <View>
                      <Text style={styles.inputTitle}>EMPLOYEE ID</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Employee ID"
                    autoFocus
                    value={employeeId}
                    onChangeText={text => setEmployeeId(text)}
                  />
                  <Text style={styles.inputTitle}>PASSWORD</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Password"
                    autoFocus
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)}
                  />
              
               
          
               
                </View>

                    <TextIconButton
                      label="LOG IN"
                      customContainerStyle={{
                      width: "100%",
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
                      onPress={LoginBtnClick}
                   />
  

          </View>
          <View>
           <Text>{isLoading?'Loading':isError?'Error'+message:isSuccess?'LoginSuccess':''}</Text> 
          </View>



          
      </View>
      </ScrollView>
    </View>
    </TouchableWithoutFeedback>

    
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: COLORS.white
  },
  header: {
      // flex: 1,
      flexDirection: 'row',
      
  },
  footer: {
      // flex: 1,
      // height: "70%",
      backgroundColor: '#fff',
      // borderTopLeftRadius: 30,
      // borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  Title: {
    justifyContent: 'flex-end',
    color: COLORS.black,
    ...FONTS.largeTitle,
    fontWeight: 'bold',
    marginTop: 80,
    marginLeft: -34
    
  },

 
 
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      // marginLeft: 10,
      alignItems: 'flex-end', 
      marginLeft: 130,
      marginTop: 30

  },

 
  inputTitle: {
    
    ...FONTS.h3,
    fontWeight: 'bold',
    marginTop: SIZES.padding3
  },
  inputSubTitle: {
    
    ...FONTS.h4,
    fontWeight: 'bold',
    marginTop: SIZES.padding3,
    textAlign: 'center'

  },
  input: {
    backgroundColor: COLORS.transparentWhite,
    borderColor: COLORS.outLine,
    borderRadius: 8,
    borderWidth: 1,
    width: "100%",
    height: 50,
    marginTop: SIZES.padding3,
    padding: SIZES.padding2

  },

  

});
