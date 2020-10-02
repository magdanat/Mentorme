import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { Searchbar } from 'react-native-paper';

export const HomePage = ({ navigation }) => {
    return (
	<View
	style={styles.viewView}>
	<View
		style={styles.group13View}>
		<TouchableOpacity
			onPress={() =>
				navigation.navigate('HomeView')}
			style={styles.group3Button}>
			<Image
				source={require("./assets/images/group-3-2.png")}
				style={styles.group3ButtonImage}/>
		</TouchableOpacity>
		<TouchableOpacity
			onPress={() =>
				navigation.navigate('HomeView')}
			style={styles.group6Button}>
			<Image
				source={require("./assets/images/group-6.png")}
				style={styles.group6ButtonImage}/>
		</TouchableOpacity>
		<TouchableOpacity
			onPress={() =>
				navigation.navigate('HomeView')}
			style={styles.group9Button}>
			<Image
				source={require("./assets/images/group-9.png")}
				style={styles.group9ButtonImage}/>
		</TouchableOpacity>
		<TouchableOpacity
			onPress={() =>
				navigation.navigate('HomeView')}
			style={styles.group12Button}>
			<Image
				source={require("./assets/images/group-12.png")}
				style={styles.group12ButtonImage}/>
		</TouchableOpacity>
	</View>
</View>
    );
  };

  const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(244, 194, 69)",
		flex: 1,
		alignItems: "center",
	},
	group13View: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.5)",
		shadowRadius: 4,
		shadowOpacity: 1,
		width: 61,
		height: 93,
		marginTop: 322,
	},
	group3Button: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 65,
	},
	group3ButtonImage: {
		resizeMode: "contain",
	},
	group3ButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	group6ButtonImage: {
		resizeMode: "contain",
	},
	group6Button: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		right: 7,
		width: 27,
		top: 63,
		height: 12,
	},
	group6ButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	group9Button: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		right: 6,
		width: 25,
		bottom: 12,
		height: 10,
	},
	group9ButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	group9ButtonImage: {
		resizeMode: "contain",
	},
	group12Button: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		right: 6,
		width: 21,
		bottom: 0,
		height: 14,
	},
	group12ButtonImage: {
		resizeMode: "contain",
	},
	group12ButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
})
