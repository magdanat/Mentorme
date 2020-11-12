import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

// import { styles } from './App.js';

export const Profile = ({ navigation }) => {
    return (
        <View
            style={styles.profileView}>
            <View
                pointerEvents="box-none"
                style={{
                    position: "absolute",
                    left: 33,
                    right: 14,
                    top: 17,
                    bottom: 8,
                    flexDirection: "row",
                }}>
                <View
                    pointerEvents="box-none"
                    style={{
                        width: 60,
                        marginTop: 2,
                        marginBottom: 31,
                        alignItems: "flex-start",
                    }}>
                    <Image
                        source={require("../assets/images/shape-61.png")}
                        style={styles.shapeThreeImage}/>
                    <Image
                        source={require("../assets/images/shape-51.png")}
                        style={styles.shapeFiveImage}/>
                    <Image
                        source={require("../assets/images/oval-5.png")}
                        style={styles.ovalImage}/>
                    <View
                        style={{
                            flex: 1,
                        }}/>
                    <TouchableOpacity
                        onPress={this.onShapePressed}
                        style={styles.shapeFourButton}>
                        <Image
                            source={require("../assets/images/shape-66.png")}
                            style={styles.shapeFourButtonImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onShapeTwoPressed}
                        style={styles.shapeThreeButton}/>
                </View>
                <View
                    style={styles.rectangleThreeView}/>
                <View
                    pointerEvents="box-none"
                    style={{
                        flex: 1,
                        marginTop: 50,
                        marginBottom: 36,
                        alignItems: "flex-start",
                    }}>
                    <Image
                        source={require("../assets/images/shape-47.png")}
                        style={styles.shapeSixImage}/>
                    <Image
                        source={require("../assets/images/shape-19.png")}
                        style={styles.shapeEightImage}/>
                    <Image
                        source={require("../assets/images/shape-53.png")}
                        style={styles.shapeNineImage}/>
                    <View
                        style={{
                            flex: 1,
                        }}/>
                    <View
                        pointerEvents="box-none"
                        style={{
                            alignSelf: "stretch",
                            height: 40,
                            marginLeft: 21,
                            flexDirection: "row",
                            alignItems: "flex-end",
                        }}>
                        <View
                            style={styles.pathView}/>
                        <Image
                            source={require("../assets/images/path-5.png")}
                            style={styles.pathThreeImage}/>
                        <View
                            style={{
                                flex: 1,
                            }}/>
                        <Image
                            source={require("../assets/images/path-14.png")}
                            style={styles.pathFourImage}/>
                        <View
                            style={styles.pathTwoView}/>
                    </View>
                </View>
                <Image
                    source={require("../assets/images/path-10.png")}
                    style={styles.pathTwoImage}/>
                <View
                    pointerEvents="box-none"
                    style={{
                        width: 63,
                        marginRight: 3,
                        marginBottom: 34,
                        alignItems: "flex-end",
                    }}>
                    <View
                        pointerEvents="box-none"
                        style={{
                            width: 37,
                            height: 11,
                            marginRight: 3,
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            alignItems: "flex-start",
                        }}>
                        <Image
                            source={require("../assets/images/shape-68.png")}
                            style={styles.shapeTwoImage}/>
                        <Image
                            source={require("../assets/images/shape-26.png")}
                            style={styles.shapeImage}/>
                    </View>
                    <Image
                        source={require("../assets/images/shape-46.png")}
                        style={styles.shapeFourImage}/>
                    <Image
                        source={require("../assets/images/shape-10.png")}
                        style={styles.shapeTenImage}/>
                    <View
                        style={{
                            flex: 1,
                        }}/>
                    <View
                        pointerEvents="box-none"
                        style={{
                            width: 34,
                            height: 34,
                            marginRight: 1,
                            marginBottom: 10,
                        }}>
                        <View
                            style={styles.ovalView}/>
                        <Image
                            source={require("../assets/images/clipped-4.png")}
                            style={styles.clippedImage}/>
                    </View>
                    <Image
                        source={require("../assets/images/shape-45.png")}
                        style={styles.shapeSevenImage}/>
                </View>
                <View
                    pointerEvents="box-none"
                    style={{
                        alignSelf: "flex-start",
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
                    position: "absolute",
                    alignSelf: "center",
                    width: 30,
                    bottom: 39,
                    height: 42,
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}>
                <Image
                    source={require("../assets/images/path-5.png")}
                    style={styles.pathFiveImage}/>
                <TouchableOpacity
                    onPress={this.onShapeFourPressed}
                    style={styles.shapeButton}>
                    <Image
                        source={require("../assets/images/shape-69.png")}
                        style={styles.shapeButtonImage}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={this.onShapeThreePressed}
                style={styles.shapeTwoButton}>
                <Image
                    source={require("../assets/images/shape-7.png")}
                    style={styles.shapeTwoButtonImage}/>
            </TouchableOpacity>
        </View>
    );
  };

  const styles = StyleSheet.create({
	profileView: {
		backgroundColor: "white",
		flex: 1,
	},
	shapeThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 25,
		height: 11,
		marginLeft: 2,
	},
	shapeFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 21,
		height: 20,
		marginLeft: 19,
		marginTop: 34,
	},
	ovalImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 60,
		height: 60,
		marginTop: 37,
	},
	shapeFourButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 37,
		height: 32,
		marginLeft: 11,
		marginBottom: 10,
	},
	shapeFourButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	shapeFourButtonImage: {
		resizeMode: "contain",
	},
	shapeThreeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 47,
		height: 9,
		marginLeft: 5,
	},
	shapeThreeButtonImage: {
		resizeMode: "contain",
	},
	shapeThreeButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	rectangleThreeView: {
		backgroundColor: "black",
		borderRadius: 2.5,
		alignSelf: "flex-end",
		width: 134,
		height: 5,
	},
	shapeSixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 83,
		height: 17,
		marginLeft: 23,
	},
	shapeEightImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 113,
		height: 13,
		marginTop: 42,
	},
	shapeNineImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 126,
		height: 30,
		marginTop: 11,
	},
	pathView: {
		backgroundColor: "rgb(151, 151, 151)",
		opacity: 0.41,
		width: 1,
		height: 40,
	},
	pathThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 3,
		height: 3,
		marginLeft: 50,
		marginBottom: 34,
	},
	pathFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 3,
		height: 3,
		marginRight: 49,
		marginBottom: 34,
	},
	pathTwoView: {
		backgroundColor: "rgb(151, 151, 151)",
		opacity: 0.41,
		width: 1,
		height: 40,
	},
	pathTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 17,
		height: 9,
		marginRight: 27,
		marginTop: 54,
	},
	shapeTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 17,
		height: 11,
		marginRight: 5,
	},
	shapeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 15,
		height: 11,
	},
	shapeFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
		marginRight: 3,
		marginTop: 32,
	},
	shapeTenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 63,
		height: 26,
		marginTop: 58,
	},
	ovalView: {
		backgroundColor: "rgb(250, 250, 252)",
		borderRadius: 17,
		position: "absolute",
		right: 0,
		width: 34,
		bottom: 0,
		height: 34,
	},
	clippedImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 0,
		width: 34,
		bottom: 0,
		height: 34,
	},
	shapeSevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 16,
		height: 9,
		marginRight: 9,
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
		alignSelf: "flex-start",
		width: 1,
		height: 4,
		marginTop: 4,
	},
	pathFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 3,
		height: 3,
		marginBottom: 30,
	},
	shapeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 30,
		height: 9,
	},
	shapeButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	shapeButtonImage: {
		resizeMode: "contain",
	},
	shapeTwoButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		alignSelf: "center",
		width: 31,
		bottom: 63,
		height: 31,
	},
	shapeTwoButtonImage: {
		resizeMode: "contain",
	},
	shapeTwoButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
})