import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { Searchbar } from 'react-native-paper';

export const SignUpPage = ({ navigation }) => {
    return (
        <View
        style={styles.viewView}>
        <View
            pointerEvents="box-none"
            style={{
                position: "absolute",
                left: 2,
                right: 8,
                top: -1,
                bottom: 56,
            }}>
            <View
                pointerEvents="box-none"
                style={{
                    height: 299,
                }}>
                <View
                    pointerEvents="box-none"
                    style={{
                        position: "absolute",
                        right: 24,
                        width: 311,
                        top: 0,
                        height: 253,
                        alignItems: "center",
                    }}>
                    <Image
                        source={require("./assets/images/path.png")}
                        style={styles.pathImage}/>
                    <Text
                        style={styles.wouldYouLikeToBeText}>Would you like to be a Mentor or Mentee?</Text>
                    <Text
                        style={styles.chooseYourRoleBuText}>Choose your role, but you can always change later or be both roles in your personal profile.</Text>
                </View>
                <Image
                    source={require("./assets/images/group-3.png")}
                    style={styles.group3Image}/>
            </View>
            <View
                pointerEvents="box-none"
                style={{
                    height: 277,
                    marginLeft: 30,
                    marginRight: 13,
                    marginTop: 44,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <View
                    pointerEvents="box-none"
                    style={{
                        width: 146,
                        height: 277,
                    }}>
                    <View
                        style={styles.rectangleView}/>
                    <View
                        pointerEvents="box-none"
                        style={{
                            position: "absolute",
                            left: 46,
                            width: 100,
                            top: 16,
                            height: 227,
                            alignItems: "flex-start",
                        }}>
                        <Image
                            source={require("./assets/images/check.png")}
                            style={styles.checkImage}/>
                        <Image
                            source={require("./assets/images/group.png")}
                            style={styles.groupImage}/>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                    }}/>
                <View
                    pointerEvents="box-none"
                    style={{
                        width: 151,
                        height: 277,
                    }}>
                    <View
                        style={styles.rectangleTwoView}/>
                    <Image
                        source={require("./assets/images/group-2-2.png")}
                        style={styles.group2TwoImage}/>
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                }}/>
            <Image
                source={require("./assets/images/group-2.png")}
                style={styles.group2Image}/>
        </View>
        <View
            pointerEvents="box-none"
            style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                justifyContent: "center",
            }}>
            <View
                pointerEvents="box-none"
                style={{
                    height: 28,
                    marginLeft: 51,
                    marginRight: 82,
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                <Text
                    style={styles.mentorText}>Mentor</Text>
                <View
                    style={{
                        flex: 1,
                    }}/>
                <Text
                    style={styles.menteeText}>Mentee</Text>
            </View>
        </View>
    </View>
    );
  };

  const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
	},
	pathImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 41,
		height: 6,
		marginRight: 38,
	},
	wouldYouLikeToBeText: {
		backgroundColor: "transparent",
		color: "rgb(28, 29, 35)",
		fontSize: 26,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 311,
		marginTop: 104,
	},
	chooseYourRoleBuText: {
		backgroundColor: "transparent",
		color: "rgb(183, 184, 185)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 311,
		marginTop: 29,
	},
	group3Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 4,
		height: 295,
	},
	rectangleView: {
		backgroundColor: "rgb(244, 194, 69)",
		borderRadius: 32,
		shadowColor: "rgb(198, 198, 198)",
		shadowRadius: 8,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		width: 139,
		top: 0,
		height: 277,
	},
	checkImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 22,
		height: 22,
		marginLeft: 56,
	},
	groupImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.5)",
		shadowRadius: 4,
		shadowOpacity: 1,
		width: 100,
		height: 99,
		marginTop: 106,
	},
	rectangleTwoView: {
		backgroundColor: "white",
		borderRadius: 32,
		shadowColor: "rgb(198, 198, 198)",
		shadowRadius: 8,
		shadowOpacity: 1,
		position: "absolute",
		right: 12,
		width: 139,
		top: 0,
		height: 277,
	},
	group2TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.5)",
		shadowRadius: 4,
		shadowOpacity: 1,
		position: "absolute",
		right: 0,
		width: 104,
		top: 144,
		height: 98,
	},
	group2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 66,
		height: 6,
	},
	mentorText: {
		backgroundColor: "transparent",
		color: "white",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
	},
	menteeText: {
		backgroundColor: "transparent",
		color: "rgb(244, 194, 69)",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
	},
})
