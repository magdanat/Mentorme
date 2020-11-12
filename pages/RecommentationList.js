
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { styles } from './App.js';

export const RecommentationList = ({ navigation }) => {
    return (
		<View
				style={styles.recommendationListView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 32,
						right: 14,
						top: 17,
						bottom: 8,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 13,
							marginLeft: 3,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Image
							source={require("../assets/images/shape-61.png")}
							style={styles.shapeFiveImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("../assets/images/shape-68.png")}
							style={styles.shapeFourImage}/>
						<Image
							source={require("../assets/images/shape-35.png")}
							style={styles.shapeThreeImage}/>
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
							style={styles.pathFourImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 32,
							marginRight: 18,
							marginTop: 26,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 268,
								height: 32,
							}}>
							<View
								style={styles.rectangleThreeView}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 16,
									width: 106,
									top: 8,
									height: 13,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("../assets/images/shape-62.png")}
									style={styles.shapeSixImage}/>
								<Image
									source={require("../assets/images/shape-65.png")}
									style={styles.shapeSevenImage}/>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("../assets/images/shape-34.png")}
							style={styles.shapeElevenImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 173,
							marginRight: 18,
							marginTop: 24,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 32,
								right: 98,
								top: 76,
								height: 10,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("../assets/images/shape-73.png")}
								style={styles.shapeEightImage}/>
							<Image
								source={require("../assets/images/shape-20.png")}
								style={styles.shapeNineImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("../assets/images/shape-43.png")}
								style={styles.shapeTenImage}/>
						</View>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('Mentor')}
							style={styles.rectangleButton}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 23,
								right: 70,
								top: 12,
								height: 137,
								alignItems: "flex-start",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 108,
									height: 32,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("../assets/images/clipped-4.png")}
									style={styles.clippedImage}/>
								<Image
									source={require("../assets/images/shape-60.png")}
									style={styles.shapeTwelveImage}/>
							</View>
							<Image
								source={require("../assets/images/shape-30.png")}
								style={styles.shapeThirteenImage}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 22,
									marginLeft: 1,
									marginRight: 18,
									marginTop: 8,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									style={styles.rectangleFourView}/>
								<View
									style={styles.rectangleFiveView}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.rectangleSixView}/>
							</View>
							<Image
								source={require("../assets/images/shape-2.png")}
								style={styles.shapeFourteenImage}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 172,
							marginLeft: 1,
							marginRight: 18,
							marginTop: 31,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 31,
								right: 97,
								top: 75,
								height: 10,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("../assets/images/shape-73.png")}
								style={styles.shapeFifteenImage}/>
							<Image
								source={require("../assets/images/shape-20.png")}
								style={styles.shapeSixteenImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("../assets/images/shape-43.png")}
								style={styles.shapeSeventeenImage}/>
						</View>
						<View
							style={styles.rectangleEightView}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 23,
								right: 69,
								top: 12,
								height: 137,
								alignItems: "flex-start",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 108,
									height: 32,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("../assets/images/oval-3.png")}
									style={styles.clippedTwoImage}/>
								<Image
									source={require("../assets/images/shape-60.png")}
									style={styles.shapeEighteenImage}/>
							</View>
							<Image
								source={require("../assets/images/shape-30.png")}
								style={styles.shapeNineteenImage}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 22,
									marginLeft: 1,
									marginRight: 18,
									marginTop: 8,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									style={styles.rectangleNineView}/>
								<View
									style={styles.rectangleTenView}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.rectangleElevenView}/>
							</View>
							<Image
								source={require("../assets/images/shape-2.png")}
								style={styles.shapeTwentyImage}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							marginLeft: 1,
							marginRight: 18,
							marginTop: 31,
							marginBottom: 27,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 31,
								right: 97,
								top: 75,
								height: 10,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("../assets/images/shape-73.png")}
								style={styles.shapeTwentyOneImage}/>
							<Image
								source={require("../assets/images/shape-20.png")}
								style={styles.shapeTwentyTwoImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("../assets/images/shape-43.png")}
								style={styles.shapeTwentyThreeImage}/>
						</View>
						<View
							style={styles.rectangleTwelveView}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 23,
								right: 69,
								top: 12,
								bottom: 23,
								alignItems: "flex-start",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 108,
									height: 32,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source={require("../assets/images/oval-3.png")}
									style={styles.ovalImage}/>
								<Image
									source={require("../assets/images/shape-60.png")}
									style={styles.shapeTwentyFourImage}/>
							</View>
							<Image
								source={require("../assets/images/shape-30.png")}
								style={styles.shapeTwentyFiveImage}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 22,
									marginLeft: 1,
									marginRight: 18,
									marginTop: 8,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									style={styles.rectangleThirteenView}/>
								<View
									style={styles.rectangleFourteenView}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.rectangleFifteenView}/>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("../assets/images/shape-2.png")}
								style={styles.shapeTwentySixImage}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							height: 54,
							marginLeft: 15,
							marginRight: 30,
							marginBottom: 28,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 47,
								height: 52,
								justifyContent: "flex-end",
								alignItems: "flex-start",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 36,
									height: 32,
									marginLeft: 5,
									marginBottom: 12,
								}}>
								<Image
									source={require("../assets/images/shape-13.png")}
									style={styles.shapeImage}/>
								<Image
									source={require("../assets/images/path-16.png")}
									style={styles.pathImage}/>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 9,
										width: 22,
										bottom: 9,
										height: 21,
										justifyContent: "flex-end",
										alignItems: "flex-start",
									}}>
									<Image
										source={require("../assets/images/path-19.png")}
										style={styles.pathTwoImage}/>
									<Image
										source={require("../assets/images/path-3.png")}
										style={styles.pathThreeImage}/>
								</View>
							</View>
							<Image
								source={require("../assets/images/shape-52.png")}
								style={styles.shapeTwoImage}/>
						</View>
						<View
							style={styles.pathView}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 31,
								height: 54,
								marginRight: 43,
								justifyContent: "flex-end",
								alignItems: "flex-end",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 31,
									height: 31,
									marginBottom: 14,
								}}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										right: 6,
										width: 10,
										bottom: 15,
										height: 3,
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "flex-end",
									}}>
									<Image
										source={require("../assets/images/path-5.png")}
										style={styles.pathSevenImage}/>
									<Image
										source={require("../assets/images/path-14.png")}
										style={styles.pathSixImage}/>
								</View>
								<TouchableOpacity
									onPress={() =>
										navigation.navigate('Inbox')}
									style={styles.shapeFourButton}>
									<Image
										source={require("../assets/images/shape-7.png")}
										style={styles.shapeFourButtonImage}/>
								</TouchableOpacity>
							</View>
							<TouchableOpacity
								onPress={() =>
									navigation.navigate('Inbox')}
								style={styles.shapeTwoButton}>
								<Image
									source={require("../assets/images/shape-69.png")}
									style={styles.shapeTwoButtonImage}/>
							</TouchableOpacity>
						</View>
						<View
							style={styles.pathTwoView}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 33,
								height: 52,
								justifyContent: "flex-end",
								alignItems: "flex-end",
							}}>
							<TouchableOpacity
								onPress={() =>
									navigation.navigate('Profile')}
								style={styles.shapeThreeButton}>
								<Image
									source={require("../assets/images/shape-17.png")}
									style={styles.shapeThreeButtonImage}/>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() =>
									navigation.navigate('Profile')}
								style={styles.shapeButton}>
								<Image
									source={require("../assets/images/shape-38.png")}
									style={styles.shapeButtonImage}/>
							</TouchableOpacity>
						</View>
					</View>
					<View
						style={styles.rectangleSevenView}/>
				</View>
				<Image
					source={require("../assets/images/path-5.png")}
					style={styles.pathFiveImage}/>
			</View>
    );
  };

  const styles = StyleSheet.create({
	recommendationListView: {
		backgroundColor: "white",
		flex: 1,
	},
	shapeFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 25,
		height: 11,
		marginTop: 2,
	},
	shapeFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 17,
		height: 11,
		marginRight: 5,
	},
	shapeThreeImage: {
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
	pathFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.4,
		width: 1,
		height: 4,
		marginTop: 4,
	},
	rectangleThreeView: {
		backgroundColor: "white",
		borderRadius: 16,
		position: "absolute",
		left: 0,
		width: 268,
		top: 0,
		height: 32,
	},
	shapeSixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 13,
		height: 13,
	},
	shapeSevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 84,
		height: 10,
		marginLeft: 9,
		marginTop: 3,
	},
	shapeElevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 28,
		height: 27,
		marginTop: 3,
	},
	shapeEightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 37,
		height: 10,
	},
	shapeNineImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 46,
		height: 8,
		marginLeft: 34,
		marginTop: 1,
	},
	shapeTenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 33,
		height: 10,
	},
	rectangleButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		alignSelf: "center",
		width: 311,
		top: 0,
		height: 173,
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
	clippedImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		borderRadius: 1,
		width: 32,
		height: 32,
	},
	shapeTwelveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 64,
		height: 13,
		marginLeft: 12,
		marginTop: 11,
	},
	shapeThirteenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 214,
		height: 11,
		marginLeft: 1,
		marginTop: 7,
	},
	rectangleFourView: {
		backgroundColor: "transparent",
		borderRadius: 11,
		borderWidth: 0.5,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		width: 57,
		height: 22,
	},
	rectangleFiveView: {
		backgroundColor: "transparent",
		borderRadius: 11,
		borderWidth: 0.5,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		width: 68,
		height: 22,
		marginLeft: 10,
	},
	rectangleSixView: {
		backgroundColor: "transparent",
		borderRadius: 11,
		borderWidth: 0.5,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		width: 55,
		height: 22,
	},
	shapeFourteenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 217,
		height: 43,
		marginLeft: 1,
		marginTop: 14,
	},
	shapeFifteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 37,
		height: 10,
	},
	shapeSixteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 46,
		height: 8,
		marginLeft: 34,
		marginTop: 1,
	},
	shapeSeventeenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 33,
		height: 10,
	},
	rectangleEightView: {
		backgroundColor: "transparent",
		borderRadius: 13.5,
		borderWidth: 0.5,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		position: "absolute",
		alignSelf: "center",
		width: 310,
		top: 0,
		height: 172,
	},
	clippedTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 32,
		height: 32,
	},
	shapeEighteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 64,
		height: 13,
		marginLeft: 12,
		marginTop: 11,
	},
	shapeNineteenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 214,
		height: 11,
		marginLeft: 1,
		marginTop: 7,
	},
	rectangleNineView: {
		backgroundColor: "transparent",
		borderRadius: 11,
		borderWidth: 0.5,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		width: 57,
		height: 22,
	},
	rectangleTenView: {
		backgroundColor: "transparent",
		borderRadius: 11,
		borderWidth: 0.5,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		width: 68,
		height: 22,
		marginLeft: 10,
	},
	rectangleElevenView: {
		backgroundColor: "transparent",
		borderRadius: 11,
		borderWidth: 0.5,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		width: 55,
		height: 22,
	},
	shapeTwentyImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 217,
		height: 43,
		marginLeft: 1,
		marginTop: 14,
	},
	shapeTwentyOneImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 37,
		height: 10,
	},
	shapeTwentyTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 46,
		height: 8,
		marginLeft: 34,
		marginTop: 1,
	},
	shapeTwentyThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 33,
		height: 10,
	},
	rectangleTwelveView: {
		backgroundColor: "transparent",
		borderRadius: 13.5,
		borderWidth: 0.5,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		position: "absolute",
		alignSelf: "center",
		width: 310,
		top: 0,
		height: 172,
	},
	ovalImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 32,
		height: 32,
	},
	shapeTwentyFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 64,
		height: 13,
		marginLeft: 12,
		marginTop: 11,
	},
	shapeTwentyFiveImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 214,
		height: 11,
		marginLeft: 1,
		marginTop: 7,
	},
	rectangleThirteenView: {
		backgroundColor: "transparent",
		borderRadius: 11,
		borderWidth: 0.5,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		width: 57,
		height: 22,
	},
	rectangleFourteenView: {
		backgroundColor: "transparent",
		borderRadius: 11,
		borderWidth: 0.5,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		width: 68,
		height: 22,
		marginLeft: 10,
	},
	rectangleFifteenView: {
		backgroundColor: "transparent",
		borderRadius: 11,
		borderWidth: 0.5,
		borderColor: "rgb(151, 151, 151)",
		borderStyle: "solid",
		width: 55,
		height: 22,
	},
	shapeTwentySixImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: 217,
		height: 43,
		marginLeft: 1,
	},
	shapeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 36,
		bottom: 0,
		height: 32,
	},
	pathImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 2,
		width: 24,
		bottom: 2,
		height: 24,
	},
	pathTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 10,
		height: 10,
		marginBottom: 1,
	},
	pathThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 11,
		height: 10,
		marginLeft: 11,
	},
	shapeTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 47,
		height: 9,
	},
	pathView: {
		backgroundColor: "rgb(151, 151, 151)",
		opacity: 0.41,
		width: 1,
		height: 40,
		marginLeft: 40,
		marginBottom: 4,
	},
	pathSevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 3,
		height: 3,
		marginRight: 4,
	},
	pathSixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 3,
		height: 3,
	},
	shapeFourButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		right: 0,
		width: 31,
		bottom: 0,
		height: 31,
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
	shapeTwoButtonImage: {
		resizeMode: "contain",
	},
	shapeTwoButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 30,
		height: 9,
	},
	shapeTwoButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	pathTwoView: {
		backgroundColor: "rgb(151, 151, 151)",
		opacity: 0.41,
		width: 1,
		height: 40,
		marginRight: 47,
		marginBottom: 4,
	},
	shapeThreeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 33,
		height: 33,
		marginBottom: 10,
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
	shapeButtonImage: {
		resizeMode: "contain",
	},
	shapeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 16,
		height: 9,
		marginRight: 8,
	},
	shapeButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	rectangleSevenView: {
		backgroundColor: "black",
		borderRadius: 2.5,
		alignSelf: "center",
		width: 134,
		height: 5,
	},
	pathFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 3,
		bottom: 79,
		height: 3,
	},
})
