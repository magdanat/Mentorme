import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, Text, TouchableOpacity, View  } from 'react-native';
// import { styles } from './App.js';

export const Perference = ({ navigation }) => {
    return (
    <View
        style={styles.perferenceForAllView}>
        <View
            pointerEvents="box-none"
            style={{
                height: 13,
                marginLeft: 35,
                marginRight: 14,
                marginTop: 17,
                flexDirection: "row",
                alignItems: "flex-start",
            }}>
            <Image
                source={require("../assets/images/new-design/shape-61.png")}
                style={styles.shapeThreeImage}/>
            <View
                style={{
                    flex: 1,
                }}/>
            <Image
                source={require("../assets/images/new-design/shape-68.png")}
                style={styles.shapeTwoImage}/>
            <Image
                source={require("../assets/images/new-design/shape-35.png")}
                style={styles.shapeImage}/>
            <View
                pointerEvents="box-none"
                style={{
                    width: 21,
                    height: 10,
                    marginRight: 2,
                    marginTop: 1,
                }}>
                <View
                    style={styles.rectangleView}/>
                <View
                    style={styles.rectangleTwoView}/>
            </View>
            <Image
                source={require("../assets/images/new-design/path.png")}
                style={styles.pathImage}/>
        </View>
        <Image
            source={require("../assets/images/new-design/shape-71.png")}
            style={styles.shapeFourImage}/>
        <View
            pointerEvents="box-none"
            style={{
                height: 139,
                marginLeft: 27,
                marginRight: 26,
                marginTop: 104,
                flexDirection: "row",
                alignItems: "flex-start",
            }}>
            <View
                pointerEvents="box-none"
                style={{
                    width: 147,
                    height: 139,
                }}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('RecommentationList')}
                    style={styles.rectangleButton}/>
                <Image
                    source={require("../assets/images/new-design/shape-41.png")}
                    style={styles.shapeFiveImage}/>
            </View>
            <View
                style={{
                    flex: 1,
                }}/>
            <View
                pointerEvents="box-none"
                style={{
                    width: 146,
                    height: 139,
                }}>
                <View
                    style={styles.rectangleFourView}/>
                <Image
                    source={require("../assets/images/new-design/shape-55.png")}
                    style={styles.shapeSixImage}/>
            </View>
        </View>
        <View
            pointerEvents="box-none"
            style={{
                height: 139,
                marginLeft: 27,
                marginRight: 26,
                marginTop: 26,
                flexDirection: "row",
                alignItems: "flex-start",
            }}>
            <View
                pointerEvents="box-none"
                style={{
                    width: 147,
                    height: 139,
                }}>
                <View
                    style={styles.rectangleFiveView}/>
                <Image
                    source={require("../assets/images/new-design/shape-37.png")}
                    style={styles.shapeSevenImage}/>
            </View>
            <View
                style={{
                    flex: 1,
                }}/>
            <View
                pointerEvents="box-none"
                style={{
                    width: 146,
                    height: 139,
                }}>
                <View
                    style={styles.rectangleSixView}/>
                <Image
                    source={require("../assets/images/new-design/shape-49.png")}
                    style={styles.shapeEightImage}/>
            </View>
        </View>
        <View
            style={{
                flex: 1,
            }}/>
        <View
            pointerEvents="box-none"
            style={{
                height: 139,
                marginLeft: 27,
                marginRight: 26,
                marginBottom: 41,
                flexDirection: "row",
                alignItems: "flex-end",
            }}>
            <View
                pointerEvents="box-none"
                style={{
                    width: 147,
                    height: 139,
                }}>
                <View
                    style={styles.rectangleSevenView}/>
                <Image
                    source={require("../assets/images/new-design/shape-67.png")}
                    style={styles.shapeNineImage}/>
            </View>
            <View
                style={{
                    flex: 1,
                }}/>
            <View
                pointerEvents="box-none"
                style={{
                    width: 146,
                    height: 139,
                }}>
                <View
                    style={styles.rectangleEightView}/>
                <Image
                    source={require("../assets/images/new-design/shape-21.png")}
                    style={styles.shapeTenImage}/>
            </View>
        </View>
        <Image
            source={require("../assets/images/new-design/shape-36.png")}
            style={styles.shapeElevenImage}/>
        <View
            style={styles.rectangleThreeView}/>
    </View>

    );
  };

  const styles = StyleSheet.create({
	perferenceForAllView: {
		backgroundColor: "white",
		flex: 1,
	},
	shapeThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 25,
		height: 11,
		marginTop: 2,
	},
	shapeTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 17,
		height: 11,
		marginRight: 5,
	},
	shapeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 15,
		height: 11,
		marginRight: 5,
	},
	rectangleView: {
		backgroundColor: "transparent",
		opacity: 0.35,
		borderRadius: 2.17,
		borderWidth: 1,
		borderColor: "black",
		borderStyle: "solid",
		position: "absolute",
		right: 0,
		width: 21,
		top: 0,
		height: 10,
	},
	rectangleTwoView: {
		backgroundColor: "black",
		borderRadius: 1.33,
		position: "absolute",
		right: 2,
		width: 18,
		top: 2,
		height: 7,
	},
	pathImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.4,
		width: 1,
		height: 4,
		marginTop: 4,
	},
	shapeFourImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 254,
		height: 47,
		marginLeft: 31,
		marginTop: 66,
	},
	rectangleButton: {
		backgroundColor: "transparent",
		borderRadius: 23,
		borderWidth: 2,
		borderColor: "rgb(247, 181, 0)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 0,
		width: 147,
		top: 0,
		height: 139,
	},
	rectangleButtonImage: {
		resizeMode: "contain",
	},
	rectangleButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	shapeFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 34,
		width: 72,
		top: 47,
		height: 53,
	},
	rectangleFourView: {
		backgroundColor: "transparent",
		borderRadius: 23,
		borderWidth: 2,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		position: "absolute",
		right: 0,
		width: 146,
		top: 0,
		height: 139,
	},
	shapeSixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 35,
		width: 72,
		top: 42,
		height: 50,
	},
	rectangleFiveView: {
		backgroundColor: "transparent",
		borderRadius: 23,
		borderWidth: 2,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		width: 147,
		top: 0,
		height: 139,
	},
	shapeSevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 48,
		width: 52,
		top: 49,
		height: 30,
	},
	rectangleSixView: {
		backgroundColor: "transparent",
		borderRadius: 23,
		borderWidth: 2,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		position: "absolute",
		right: 0,
		width: 146,
		top: 0,
		height: 139,
	},
	shapeEightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 30,
		width: 85,
		top: 52,
		height: 33,
	},
	rectangleSevenView: {
		backgroundColor: "transparent",
		borderRadius: 23,
		borderWidth: 2,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		width: 147,
		bottom: 0,
		height: 139,
	},
	shapeNineImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 29,
		width: 85,
		bottom: 55,
		height: 33,
	},
	rectangleEightView: {
		backgroundColor: "transparent",
		borderRadius: 23,
		borderWidth: 2,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		position: "absolute",
		right: 0,
		width: 146,
		bottom: 0,
		height: 139,
	},
	shapeTenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 35,
		width: 69,
		bottom: 43,
		height: 50,
	},
	shapeElevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 59,
		height: 10,
		marginLeft: 156,
		marginBottom: 30,
	},
	rectangleThreeView: {
		backgroundColor: "black",
		borderRadius: 2.5,
		alignSelf: "center",
		width: 134,
		height: 5,
		marginBottom: 8,
	},
})
