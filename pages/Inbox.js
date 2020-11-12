import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

// import { styles } from './App.js';

export const Inbox = ({ navigation }) => {
    return (
        <View
        style={styles.inboxView}>
        <View
            pointerEvents="box-none"
            style={{
                position: "absolute",
                left: 0,
                right: -2,
                top: 17,
                bottom: 8,
            }}>
            <View
                pointerEvents="box-none"
                style={{
                    height: 13,
                    marginLeft: 36,
                    marginRight: 15,
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
                    source={require("../assets/images/shape-26.png")}
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
                    marginLeft: 40,
                    marginRight: 160,
                    marginTop: 33,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <TouchableOpacity
                    onPress={this.onPathPressed}
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
                    source={require("../assets/images/shape-5.png")}
                    style={styles.shapeFifteenImage}/>
            </View>
            <View
                style={styles.pathFourView}/>
            <View
                pointerEvents="box-none"
                style={{
                    alignSelf: "flex-start",
                    width: 177,
                    height: 37,
                    marginLeft: 27,
                    marginTop: 19,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <Image
                    source={require("../assets/images/shape-9.png")}
                    style={styles.shapeSixImage}/>
                <View
                    pointerEvents="box-none"
                    style={{
                        width: 117,
                        height: 31,
                        marginLeft: 23,
                        marginTop: 5,
                        alignItems: "flex-start",
                    }}>
                    <Image
                        source={require("../assets/images/shape-44.png")}
                        style={styles.shapeNineImage}/>
                    <Image
                        source={require("../assets/images/shape-32.png")}
                        style={styles.shapeTenImage}/>
                </View>
            </View>
            <View
                style={styles.pathThreeView}/>
            <View
                pointerEvents="box-none"
                style={{
                    alignSelf: "flex-start",
                    width: 177,
                    height: 37,
                    marginLeft: 27,
                    marginTop: 19,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <Image
                    source={require("../assets/images/shape-9.png")}
                    style={styles.shapeSevenImage}/>
                <View
                    pointerEvents="box-none"
                    style={{
                        width: 117,
                        height: 32,
                        marginLeft: 23,
                        marginTop: 6,
                        alignItems: "flex-start",
                    }}>
                    <Image
                        source={require("../assets/images/shape-28.png")}
                        style={styles.shapeThirteenImage}/>
                    <Image
                        source={require("../assets/images/shape-70.png")}
                        style={styles.shapeElevenImage}/>
                </View>
            </View>
            <View
                style={styles.pathFiveView}/>
            <View
                pointerEvents="box-none"
                style={{
                    alignSelf: "flex-start",
                    width: 177,
                    height: 37,
                    marginLeft: 27,
                    marginTop: 17,
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}>
                <Image
                    source={require("../assets/images/shape-12.png")}
                    style={styles.shapeEightImage}/>
                <View
                    pointerEvents="box-none"
                    style={{
                        width: 117,
                        height: 31,
                        marginLeft: 23,
                        marginTop: 7,
                        alignItems: "flex-start",
                    }}>
                    <Image
                        source={require("../assets/images/shape-28.png")}
                        style={styles.shapeFourteenImage}/>
                    <Image
                        source={require("../assets/images/shape-70.png")}
                        style={styles.shapeTwelveImage}/>
                </View>
            </View>
            <View
                style={styles.pathSixView}/>
            <View
                style={{
                    flex: 1,
                }}/>
            <View
                pointerEvents="box-none"
                style={{
                    height: 55,
                    marginLeft: 40,
                    marginRight: 47,
                    marginBottom: 26,
                    flexDirection: "row",
                    alignItems: "flex-end",
                }}>
                <View
                    pointerEvents="box-none"
                    style={{
                        width: 47,
                        height: 51,
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                    }}>
                    <TouchableOpacity
                        onPress={this.onShapePressed}
                        style={styles.shapeTwoButton}>
                        <Image
                            source={require("../assets/images/shape-66.png")}
                            style={styles.shapeTwoButtonImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onShapeTwoPressed}
                        style={styles.shapeButton}/>
                </View>
                <View
                    style={styles.pathView}/>
                <Image
                    source={require("../assets/images/path-15.png")}
                    style={styles.pathTwoImage}/>
                <View
                    style={{
                        flex: 1,
                    }}/>
                <Image
                    source={require("../assets/images/path-13.png")}
                    style={styles.pathThreeImage}/>
                <View
                    style={styles.pathTwoView}/>
                <View
                    pointerEvents="box-none"
                    style={{
                        width: 33,
                        height: 52,
                        marginBottom: 3,
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                    }}>
                    <TouchableOpacity
                        onPress={this.onShapeThreePressed}
                        style={styles.shapeFourButton}>
                        <Image
                            source={require("../assets/images/shape-17.png")}
                            style={styles.shapeFourButtonImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onShapeFourPressed}
                        style={styles.shapeThreeButton}>
                        <Image
                            source={require("../assets/images/shape-38.png")}
                            style={styles.shapeThreeButtonImage}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={styles.rectangleThreeView}/>
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
                source={require("../assets/images/path-15.png")}
                style={styles.pathFourImage}/>
            <Image
                source={require("../assets/images/shape-25.png")}
                style={styles.shapeFourImage}/>
        </View>
        <Image
            source={require("../assets/images/shape-18.png")}
            style={styles.shapeFiveImage}/>
    </View>
    );
  };

  const styles = StyleSheet.create({
	inboxView: {
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
	},
	pathButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	shapeFifteenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 45,
		height: 13,
		marginTop: 6,
	},
	pathFourView: {
		backgroundColor: "rgb(151, 151, 151)",
		opacity: 0.68,
		height: 1,
		marginLeft: 1,
		marginTop: 25,
	},
	shapeSixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 37,
		height: 37,
	},
	shapeNineImage: {
		backgroundColor: "transparent",
		opacity: 0.69,
		resizeMode: "center",
		width: 64,
		height: 13,
	},
	shapeTenImage: {
		backgroundColor: "transparent",
		opacity: 0.95,
		resizeMode: "center",
		width: 117,
		height: 12,
		marginTop: 5,
	},
	pathThreeView: {
		backgroundColor: "rgb(151, 151, 151)",
		opacity: 0.68,
		height: 1,
		marginRight: 1,
		marginTop: 17,
	},
	shapeSevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 37,
		height: 37,
	},
	shapeThirteenImage: {
		backgroundColor: "transparent",
		opacity: 0.69,
		resizeMode: "center",
		width: 64,
		height: 13,
	},
	shapeElevenImage: {
		backgroundColor: "transparent",
		opacity: 0.95,
		resizeMode: "center",
		width: 117,
		height: 12,
		marginTop: 6,
	},
	pathFiveView: {
		backgroundColor: "rgb(151, 151, 151)",
		opacity: 0.68,
		height: 1,
		marginLeft: 1,
		marginTop: 16,
	},
	shapeEightImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 37,
		height: 37,
	},
	shapeFourteenImage: {
		backgroundColor: "transparent",
		opacity: 0.69,
		resizeMode: "center",
		width: 64,
		height: 13,
	},
	shapeTwelveImage: {
		backgroundColor: "transparent",
		opacity: 0.95,
		resizeMode: "center",
		width: 117,
		height: 12,
		marginTop: 5,
	},
	pathSixView: {
		backgroundColor: "rgb(151, 151, 151)",
		opacity: 0.68,
		height: 1,
		marginLeft: 1,
		marginTop: 18,
	},
	shapeTwoButtonImage: {
		resizeMode: "contain",
	},
	shapeTwoButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 37,
		height: 32,
		marginLeft: 4,
		marginBottom: 10,
	},
	shapeTwoButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	shapeButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	shapeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 47,
		height: 9,
	},
	shapeButtonImage: {
		resizeMode: "contain",
	},
	pathView: {
		backgroundColor: "rgb(151, 151, 151)",
		opacity: 0.41,
		width: 1,
		height: 40,
		marginLeft: 43,
		marginBottom: 5,
	},
	pathTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 3,
		height: 3,
		marginLeft: 50,
		marginBottom: 39,
	},
	pathThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 3,
		height: 3,
		marginRight: 49,
		marginBottom: 39,
	},
	pathTwoView: {
		backgroundColor: "rgb(151, 151, 151)",
		opacity: 0.41,
		width: 1,
		height: 40,
		marginRight: 50,
		marginBottom: 5,
	},
	shapeFourButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 33,
		height: 33,
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
	shapeThreeButtonImage: {
		resizeMode: "contain",
	},
	shapeThreeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 16,
		height: 9,
		marginRight: 8,
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
		alignSelf: "center",
		width: 134,
		height: 5,
	},
	pathFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 3,
		height: 3,
		marginBottom: 30,
	},
	shapeFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 30,
		height: 9,
	},
	shapeFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		alignSelf: "center",
		width: 31,
		bottom: 63,
		height: 31,
	},
})