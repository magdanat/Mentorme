import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native"

// import { styles } from './App.js';

export const Mentor = ({ navigation }) => {
    return (
        <View
				style={styles.mentorView}>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 13,
						marginLeft: 35,
						marginRight: 14,
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
						width: 161,
						height: 53,
						marginLeft: 55,
						marginTop: 82,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<Image
						source={require("../assets/images/oval-5.png")}
						style={styles.ovalImage}/>
					<View
						pointerEvents="box-none"
						style={{
							width: 93,
							height: 37,
							marginLeft: 15,
							marginTop: 12,
							alignItems: "flex-start",
						}}>
						<Image
							source={require("../assets/images/shape-23.png")}
							style={styles.shapeFourImage}/>
						<Image
							source={require("../assets/images/shape-3.png")}
							style={styles.shapeFiveImage}/>
					</View>
				</View>
				<Image
					source={require("../assets/images/shape-74.png")}
					style={styles.shapeEightImage}/>
				<Image
					source={require("../assets/images/shape-22.png")}
					style={styles.shapeSixImage}/>
				<Image
					source={require("../assets/images/shape-63.png")}
					style={styles.shapeElevenImage}/>
				<Image
					source={require("../assets/images/shape-76.png")}
					style={styles.shapeTenImage}/>
				<Image
					source={require("../assets/images/shape-75.png")}
					style={styles.shapeNineImage}/>
				<Image
					source={require("../assets/images/shape-39.png")}
					style={styles.shapeSevenImage}/>
				<Image
					source={require("../assets/images/shape.png")}
					style={styles.shapeThirteenImage}/>
				<Image
					source={require("../assets/images/shape-59.png")}
					style={styles.shapeTwelveImage}/>
				<Image
					source={require("../assets/images/shape-42.png")}
					style={styles.shapeFourteenImage}/>
				<View
					style={{
						flex: 1,
					}}/>
				<TouchableOpacity
					onPress={() =>
                        navigation.navigate('Chat')}
					style={styles.shapeButton}>
                    <Image
                        source={require("../assets/images/shape-33.png")}
                        style={styles.shapeFourButtonImage}/>
                </TouchableOpacity>
				<View
					style={styles.rectangleThreeView}/>
			</View>
    );
  };

  const styles = StyleSheet.create({
	mentorView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "flex-start",
	},
	shapeThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
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
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.4,
		width: 1,
		height: 4,
		marginTop: 4,
	},
	ovalImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 53,
		height: 53,
	},
	shapeFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 74,
		height: 15,
	},
	shapeFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 93,
		height: 11,
		marginTop: 11,
	},
	shapeEightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 62,
		height: 9,
		marginLeft: 55,
		marginTop: 38,
	},
	shapeSixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 172,
		height: 61,
		marginLeft: 56,
		marginTop: 15,
	},
	shapeElevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 51,
		height: 9,
		marginLeft: 56,
		marginTop: 35,
	},
	shapeTenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 259,
		height: 28,
		marginLeft: 55,
		marginTop: 15,
	},
	shapeNineImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 38,
		height: 9,
		marginLeft: 55,
		marginTop: 32,
	},
	shapeSevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 123,
		height: 62,
		marginLeft: 55,
		marginTop: 12,
	},
	shapeThirteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 46,
		height: 11,
		marginLeft: 56,
		marginTop: 30,
	},
	shapeTwelveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 171,
		height: 28,
		marginLeft: 55,
		marginTop: 13,
	},
	shapeFourteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 116,
		height: 11,
		marginLeft: 55,
		marginTop: 31,
	},
	shapeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 129,
		height: 15,
		marginLeft: 121,
		marginBottom: 59,
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
	rectangleThreeView: {
		backgroundColor: "black",
		borderRadius: 2.5,
		alignSelf: "center",
		width: 134,
		height: 5,
		marginBottom: 8,
	},
})