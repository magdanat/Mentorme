import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, YellowBox } from 'react-native';
import { PreferencesView } from './Components/PreferencesView';
import { HomeView } from './Components/HomeView';
import { block } from 'react-native-reanimated';

const Stack = createStackNavigator();

// Old method
// export default class App extends Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="HomeView"
//             component={HomeView}
//           />
//           <Stack.Screen
//             name="PreferencesView"
//             component={PreferencesView}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// };

// Recommended method
const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeView"
            component={HomeView}
          />
          <Stack.Screen
            name="PreferencesView"
            component={PreferencesView}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prefViewContainer: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: 'center',
  },
  prefViewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30
  },
  prefViewText: {
    fontSize: 15,
    color: "grey",
    marginBottom: 5,
    marginLeft: 30,
    marginRight: 30
  },
  prefViewButtons: {
    marginTop: 40,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "center"
  },
  prefViewButton: {
    backgroundColor: "white",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 30,
    padding: 55,
    paddingBottom: 250,
    margin: 10,
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowColor: "#cccccc"
  },
  prefViewButtonTwo: {
    backgroundColor: "white",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 30,
    // padding: 55,
    width: 150,
    height: 150,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowColor: "#cccccc"
  },
  prefViewButtonText: {
    color: "#fbc015",
    fontWeight: "bold"
  },
  prefViewButtonsTwo: {
    marginTop: 40,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "center",
  },
});