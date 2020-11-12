import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

// import { styles } from './App.js';

export const Chat = ({ navigation }) => {
    return (
        <View
            style={styles.chatView}>
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
                    height: 40,
                    marginLeft: 41,
                    marginRight: 20,
                    marginTop: 14,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Mentor')}
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
                    source={require("../assets/images/shape-23.png")}
                    style={styles.shapeFourImage}/>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('Tips')}
                    style={styles.rectangleTwoButton}>
                    <Image
                        source={require("../assets/images/rectangle-2.png")}
                        style={styles.rectangleTwoButtonImage}/>
                </TouchableOpacity>
            </View>
            <View
                pointerEvents="box-none"
                style={{
                    height: 44,
                    marginLeft: 88,
                    marginRight: 34,
                    marginTop: 43,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <View
                    pointerEvents="box-none"
                    style={{
                        flex: 1,
                        height: 34,
                        marginRight: 25,
                        marginTop: 6,
                    }}>
                    <View
                        style={styles.rectangleFourView}/>
                    <Image
                        source={require("../assets/images/path-7.png")}
                        style={styles.pathSixImage}/>
                    <Image
                        source={require("../assets/images/shape-11.png")}
                        style={styles.shapeEightImage}/>
                </View>
                <Image
                    source={require("../assets/images/clipped-4.png")}
                    style={styles.clippedImage}/>
            </View>
            <View
                pointerEvents="box-none"
                style={{
                    alignSelf: "flex-start",
                    width: 151,
                    height: 37,
                    marginLeft: 22,
                    marginTop: 33,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <Image
                    source={require("../assets/images/shape-9.png")}
                    style={styles.shapeTenImage}/>
                <View
                    pointerEvents="box-none"
                    style={{
                        width: 104,
                        height: 34,
                        marginLeft: 10,
                        marginTop: 1,
                    }}>
                    <View
                        style={styles.rectangleSixView}/>
                    <View
                        pointerEvents="box-none"
                        style={{
                            position: "absolute",
                            left: 15,
                            width: 13,
                            top: 8,
                            height: 19,
                            flexDirection: "row",
                            alignItems: "flex-start",
                        }}>
                        <Image
                            source={require("../assets/images/shape-16.png")}
                            style={styles.shapeNineImage}/>
                        <Image
                            source={require("../assets/images/path-17.png")}
                            style={styles.pathSevenImage}/>
                    </View>
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                }}/>
            <View
                pointerEvents="box-none"
                style={{
                    alignSelf: "center",
                    width: 284,
                    height: 86,
                    marginBottom: 34,
                }}>
                <Image
                    source={require("../assets/images/shape-24.png")}
                    style={styles.shapeElevenImage}/>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('ConversationStarter')}
                    style={styles.rectangleButton}/>
            </View>
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
                    style={styles.shapeSevenImage}/>
                <Image
                    source={require("../assets/images/path-6.png")}
                    style={styles.pathFiveImage}/>
                <View
                    style={styles.rectangleFiveView}/>
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
                        style={styles.shapeSixImage}/>
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
                    style={styles.shapeFiveImage}/>
            </View>
            <View
                style={styles.rectangleThreeView}/>
        </View>
    );
  };

  const styles = StyleSheet.create({
	chatView: {
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
		backgroundColor: "transparent",
		opacity: 0.4,
		resizeMode: "center",
		width: 1,
		height: 4,
		marginTop: 4,
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
	pathButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 13,
		height: 23,
		marginTop: 9,
	},
	shapeFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 74,
		height: 15,
		marginRight: 83,
		marginTop: 17,
	},
	rectangleTwoButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	rectangleTwoButtonImage: {
		resizeMode: "contain",
	},
	rectangleTwoButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 40,
		height: 40,
	},
	rectangleFourView: {
		backgroundColor: "transparent",
		borderRadius: 17,
		borderWidth: 1,
		borderColor: "rgb(247, 181, 0)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		width: 185,
		top: 0,
		height: 34,
	},
	pathSixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 22,
		width: 6,
		top: 8,
		height: 19,
	},
	shapeEightImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 14,
		width: 8,
		top: 12,
		height: 11,
	},
	clippedImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 44,
		height: 44,
	},
	shapeTenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 37,
		height: 37,
	},
	rectangleSixView: {
		backgroundColor: "transparent",
		borderRadius: 17,
		borderWidth: 1,
		borderColor: "rgb(183, 184, 185)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		width: 104,
		top: 0,
		height: 34,
	},
	shapeNineImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 7,
		height: 11,
		marginTop: 4,
	},
	pathSevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 6,
		height: 19,
	},
	shapeElevenImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		alignSelf: "center",
		width: 193,
		bottom: 12,
		height: 59,
	},
	rectangleButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	rectangleButtonImage: {
		resizeMode: "contain",
	},
	rectangleButton: {
		backgroundColor: "transparent",
		borderRadius: 9.75,
		borderWidth: 0.5,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		alignSelf: "center",
		width: 284,
		bottom: 0,
		height: 86,
	},
	pathView: {
		backgroundColor: "rgb(151, 151, 151)",
		height: 1,
		marginRight: 1,
		marginBottom: 22,
	},
	shapeSevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 13,
		height: 19,
		marginBottom: 9,
	},
	pathFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 9,
		height: 31,
		marginBottom: 3,
	},
	rectangleFiveView: {
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
	shapeSixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 35,
		bottom: 0,
		height: 35,
	},
	pathFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 4,
		height: 4,
		marginRight: 9,
	},
	pathThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 4,
		height: 4,
	},
	pathTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 7,
	},
	shapeFiveImage: {
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