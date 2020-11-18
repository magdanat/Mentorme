import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native"


export const MessagesView = ({ navigation }) => {
	return (
		<View>
			{/* Header Content
                Edit, Profile Name, Settings */}
                <View>
                    <View style={styles.titleContainer}>
                        {/* Back */}
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/shape-51.png')} />
                        </TouchableOpacity>

                        {/* Name */}
                        <Text>Nathan</Text>

                        {/* Settings */}
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("SettingsView")}>
                            <Image source={require('../../assets/images/shape-46.png')}
                            />
                        </TouchableOpacity>

                    </View>
                </View>

				{/* Messages */}
				<View>

				</View>

				{/* Suggestions/Tooltips */}
				<View>

				</View>

				{/* TextInput */}
				<View>
					<View>
						<TextInput>

						</TextInput>
					</View>
				</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
        flex: 1,
        backgroundColor: "white",
    },
    titleContainer: {
        // alignSelf: "center",
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
})