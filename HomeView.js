import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
// import { styles } from './App.js';

export const HomeView = ({ navigation }) => {
    return (
      <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: -33,
						right: -31,
						top: -17,
						bottom: -46,
					}}>
					<Image
						source={require("./assets/images/rectangle.png")}
						style={styles.rectangleImage}/>
					<Image
						source={require("./assets/images/11.png")}
						style={styles.imageImage}/>
					<View
						style={styles.rectangleView}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 83,
							right: 79,
							top: 343,
							bottom: 98,
							alignItems: "center",
						}}>
						<Text
							style={styles.welcomeText}>Welcome</Text>
						<View
							style={styles.rectangleTwoView}/>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 4,
								marginLeft: 2,
								marginTop: 39,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./assets/images/line-5-2.png")}
								style={styles.line5Image}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./assets/images/line-5-2.png")}
								style={styles.line5TwoImage}/>
						</View>
						<View
							style={styles.rectangleThreeView}/>
						<View
							style={{
								flex: 1,
							}}/>
						<TouchableOpacity
							onPress={() =>
                navigation.navigate('SignUpPage')}
							style={styles.rectangleButton}/>
						<Text
							style={styles.alreadyHaveAnAccoText}>              Already have an account?   </Text>
					</View>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate('SignUpPage')}
						style={styles.signUpButton}>
						<Text
							style={styles.signUpButtonText}>Sign up</Text>
					</TouchableOpacity>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 105,
							width: 232,
							top: 420,
							bottom: 245,
							alignItems: "center",
						}}>
						<Text
							style={styles.logInWithLinkedinText}>          Log in with Linkedin</Text>
						<TextInput
							autoCorrect={false}
							placeholder="Mobile Number / Email"
							style={styles.mobileNumberEmaiTextInput}/>
						<Image
							source={require("./assets/images/line-5.png")}
							style={styles.line5ThreeImage}/>
						<TextInput
							autoCorrect={false}
							placeholder="Full Name"
							style={styles.fullNameTextInput}/>
						<Image
							source={require("./assets/images/line-5-3.png")}
							style={styles.line5FourImage}/>
						<TextInput
							autoCorrect={false}
							placeholder="Password"
							secureTextEntry={true}
							style={styles.passwordTextInput}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./assets/images/line-5-4.png")}
							style={styles.line5FiveImage}/>
					</View>
				</View>
				<Text
					style={styles.orText}>OR</Text>
			</View>

    );
  };

  const styles = StyleSheet.create({
    viewView: {
      backgroundColor: "white",
      flex: 1,
    },
    rectangleImage: {
      resizeMode: "cover",
      backgroundColor: "transparent",
      position: "absolute",
      left: 33,
      right: 31,
      top: 0,
      height: 455,
    },
    imageImage: {
      resizeMode: "cover",
      backgroundColor: "transparent",
      position: "absolute",
      left: 0,
      right: 0,
      top: 9,
      height: 432,
    },
    rectangleView: {
      backgroundColor: "white",
      borderRadius: 68,
      position: "absolute",
      left: 33,
      right: 31,
      top: 320,
      height: 555,
    },
    welcomeText: {
      color: "rgb(28, 29, 35)",
      fontSize: 26,
      fontStyle: "normal",
      fontWeight: "bold",
      textAlign: "left",
      backgroundColor: "transparent",
    },
    rectangleTwoView: {
      backgroundColor: "rgb(244, 194, 69)",
      borderRadius: 21,
      shadowColor: "rgba(0, 0, 0, 0.5)",
      shadowRadius: 6,
      shadowOpacity: 1,
      width: 276,
      height: 42,
      marginTop: 30,
    },
    line5Image: {
      backgroundColor: "transparent",
      resizeMode: "center",
      width: 113,
      height: 3,
    },
    line5TwoImage: {
      resizeMode: "center",
      backgroundColor: "transparent",
      width: 113,
      height: 3,
      marginTop: 1,
    },
    rectangleThreeView: {
      backgroundColor: "white",
      borderRadius: 15,
      shadowColor: "rgba(97, 97, 97, 0.5)",
      shadowRadius: 4,
      shadowOpacity: 1,
      width: 275,
      height: 134,
      marginTop: 28,
    },
    rectangleButtonImage: {
      resizeMode: "contain",
    },
    rectangleButton: {
      backgroundColor: "rgb(244, 194, 69)",
      borderRadius: 21,
      shadowColor: "rgba(0, 0, 0, 0.5)",
      shadowRadius: 6,
      shadowOpacity: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      width: 276,
      height: 42,
      marginBottom: 28,
    },
    rectangleButtonText: {
      color: "black",
      fontFamily: ".AppleSystemUIFont",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: "normal",
      textAlign: "left",
    },
    alreadyHaveAnAccoText: {
      backgroundColor: "transparent",
      color: "rgb(168, 168, 168)",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "normal",
      textAlign: "left",
      alignSelf: "flex-start",
      marginLeft: 6,
    },
    signUpButtonImage: {
      resizeMode: "contain",
      marginRight: 10,
    },
    signUpButton: {
      backgroundColor: "transparent",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      position: "absolute",
      alignSelf: "center",
      width: 58,
      bottom: 159,
      height: 22,
    },
    signUpButtonText: {
      color: "white",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "normal",
      textAlign: "left",
    },
    logInWithLinkedinText: {
      color: "white",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "normal",
      textAlign: "left",
      backgroundColor: "transparent",
    },
    mobileNumberEmaiTextInput: {
      color: "rgb(183, 184, 185)",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: "normal",
      textAlign: "left",
      backgroundColor: "transparent",
      padding: 0,
      alignSelf: "flex-start",
      width: 133,
      height: 17,
      marginLeft: 1,
      marginTop: 100,
    },
    line5ThreeImage: {
      backgroundColor: "transparent",
      resizeMode: "cover",
      width: 232,
      height: 2,
      marginTop: 4,
    },
    fullNameTextInput: {
      color: "rgb(183, 184, 185)",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: "normal",
      textAlign: "left",
      backgroundColor: "transparent",
      padding: 0,
      alignSelf: "flex-start",
      width: 57,
      height: 17,
      marginLeft: 1,
      marginTop: 8,
    },
    line5FourImage: {
      resizeMode: "cover",
      backgroundColor: "transparent",
      width: 232,
      height: 2,
      marginTop: 5,
    },
    passwordTextInput: {
      color: "rgb(183, 184, 185)",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: "normal",
      textAlign: "left",
      backgroundColor: "transparent",
      padding: 0,
      alignSelf: "flex-start",
      width: 56,
      height: 17,
      marginLeft: 1,
      marginTop: 8,
    },
    line5FiveImage: {
      resizeMode: "cover",
      backgroundColor: "transparent",
      width: 232,
      height: 2,
    },
    orText: {
      backgroundColor: "transparent",
      color: "rgb(168, 168, 168)",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: "bold",
      textAlign: "left",
      position: "absolute",
      alignSelf: "center",
      top: 465,
    },
  })
  


