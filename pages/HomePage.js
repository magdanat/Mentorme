import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { styles } from '../App.js';
import { Searchbar } from 'react-native-paper';

export const HomePage = ({ navigation }) => {
    return (
      <View style={styles.container}>
           <Searchbar
             placeholder="Search"/>
           <Button
             title="Explore"
             onPress={() =>
               navigation.navigate('Perference')}/> 
          <Button
             title="Match"/>

          <Button
             title="Schedule"/>

          <Button
             title="Me"/>

          <Button
             title="HomeView"
             onPress={() =>
                navigation.navigate('HomeView')}/> 
      </View>
    );
  };