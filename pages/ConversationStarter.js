import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

// import { styles } from './App.js';

export const ConversationStarter = ({ navigation }) => {
    return (
        <View
            style={styles.conversationStarterView}>
            <View
                pointerEvents="box-none"
                style={{
                    height: 13,
                    marginLeft: 34,
                    marginRight: 15,
                    marginTop: 17,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <Image
                    source={require("../assets/images/shape-61.png")}
                    style={styles.shapeThreeImage}/>
                <View
                    style={{
                        flex: 1,
                    }}/>
                <Image
                    source={require("../assets/images/shape-68.png")}
                    style={styles.shapeTwoImage}/>
                <Image
                    source={require("../assets/images/shape-35.png")}
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
                    source={require("../assets/images/path.png")}
                    style={styles.pathImage}/>
            </View>
            <View
                pointerEvents="box-none"
                style={{
                    height: 23,
                    marginLeft: 41,
                    marginRight: 146,
                    marginTop: 23,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Chat')}
                    style={styles.pathButton}>
                    <Image
                        source={require("../assets/images/path-2.png")}
                        style={styles.pathButtonImage}/>
                </TouchableOpacity>
                <View
                    style={{
                        flex: 1,
                    }}/>
                <Image
                    source={require("../assets/images/shape-40.png")}
                    style={styles.shapeNineImage}/>
            </View>
            <View
                pointerEvents="box-none"
                style={{
                    alignSelf: "flex-start",
                    width: 284,
                    height: 165,
                    marginLeft: 41,
                    marginTop: 36,
                }}>
                <Image
                    source={require("../assets/images/shape-50.png")}
                    style={styles.shapeSevenImage}/>
                <View
                    style={styles.rectangleFiveView}/>
            </View>
            <View
                pointerEvents="box-none"
                style={{
                    alignSelf: "flex-start",
                    width: 284,
                    height: 181,
                    marginLeft: 41,
                    marginTop: 29,
                }}>
                <Image
                    source={require("../assets/images/shape-15.png")}
                    style={styles.shapeEightImage}/>
                <View
                    style={styles.rectangleSixView}/>
            </View>
            <View
                pointerEvents="box-none"
                style={{
                    alignSelf: "flex-start",
                    width: 284,
                    height: 175,
                    marginLeft: 45,
                    marginTop: 29,
                }}>
                <Image
                    source={require("../assets/images/shape-29.png")}
                    style={styles.shapeTenImage}/>
                <View
                    style={styles.rectangleSevenView}/>
            </View>
            <View
                style={{
                    flex: 1,
                }}/>
            <View
                style={styles.pathView}/>
            <View
                pointerEvents="box-none"
                style={{
                    height: 35,
                    marginLeft: 22,
                    marginRight: 19,
                    marginBottom: 36,
                    flexDirection: "row",
                    alignItems: "flex-end",
                }}>
                <Image
                    source={require("../assets/images/shape-14.png")}
                    style={styles.shapeSixImage}/>
                <Image
                    source={require("../assets/images/path-6.png")}
                    style={styles.pathFiveImage}/>
                <View
                    style={styles.rectangleFourView}/>
                <View
                    style={{
                        flex: 1,
                    }}/>
                <View
                    pointerEvents="box-none"
                    style={{
                        width: 35,
                        height: 35,
                        marginRight: 14,
                    }}>
                    <Image
                        source={require("../assets/images/shape-54.png")}
                        style={styles.shapeFiveImage}/>
                    <View
                        pointerEvents="box-none"
                        style={{
                            position: "absolute",
                            right: 7,
                            width: 20,
                            bottom: 7,
                            height: 15,
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                        }}>
                        <View
                            pointerEvents="box-none"
                            style={{
                                width: 17,
                                height: 4,
                                marginRight: 2,
                                marginBottom: 4,
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                            }}>
                            <Image
                                source={require("../assets/images/path-12.png")}
                                style={styles.pathFourImage}/>
                            <Image
                                source={require("../assets/images/path-12.png")}
                                style={styles.pathThreeImage}/>
                        </View>
                        <Image
                            source={require("../assets/images/path-4.png")}
                            style={styles.pathTwoImage}/>
                    </View>
                </View>
                <Image
                    source={require("../assets/images/shape-31.png")}
                    style={styles.shapeFourImage}/>
            </View>
            <View
                style={styles.rectangleThreeView}/>
        </View>
    );
  };

  const styles = StyleSheet.create({
	conversationStarterView: {
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 17,
		height: 11,
		marginRight: 5,
	},
	shapeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
		backgroundColor: "transparent",
		opacity: 0.4,
		resizeMode: "center",
		width: 1,
		height: 4,
		marginTop: 4,
	},
	pathButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 13,
		height: 23,
	},
	pathButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	pathButtonImage: {
		resizeMode: "contain",
	},
	shapeNineImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 75,
		height: 13,
		marginTop: 7,
	},
	shapeSevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 61,
		width: 161,
		top: 23,
		height: 37,
	},
	rectangleFiveView: {
		backgroundColor: "transparent",
		borderRadius: 9.75,
		borderWidth: 0.5,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		width: 284,
		top: 0,
		height: 165,
	},
	shapeEightImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 59,
		width: 166,
		top: 24,
		height: 37,
	},
	rectangleSixView: {
		backgroundColor: "transparent",
		borderRadius: 9.75,
		borderWidth: 0.5,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		width: 284,
		top: 0,
		height: 181,
	},
	shapeTenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 70,
		width: 136,
		top: 24,
		height: 37,
	},
	rectangleSevenView: {
		backgroundColor: "transparent",
		borderRadius: 9.75,
		borderWidth: 0.5,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		position: "absolute",
		alignSelf: "center",
		width: 284,
		top: 0,
		height: 175,
	},
	pathView: {
		backgroundColor: "rgb(151, 151, 151)",
		height: 1,
		marginRight: 1,
		marginBottom: 22,
	},
	shapeSixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 13,
		height: 19,
		marginBottom: 9,
	},
	pathFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 9,
		height: 31,
		marginBottom: 3,
	},
	rectangleFourView: {
		backgroundColor: "transparent",
		borderRadius: 17,
		borderWidth: 1,
		borderColor: "rgb(109, 114, 120)",
		borderStyle: "solid",
		width: 185,
		height: 34,
		marginLeft: 14,
		marginBottom: 1,
	},
	shapeFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 0,
		width: 35,
		bottom: 0,
		height: 35,
	},
	pathFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 4,
		height: 4,
		marginRight: 9,
	},
	pathThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 4,
		height: 4,
	},
	pathTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 7,
	},
	shapeFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 35,
		height: 35,
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