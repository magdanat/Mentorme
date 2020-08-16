import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { styles } from './App.js';


// switch between different views
// when clicking arrow button
// export const PreferencesView = ({ navigation }) => {


//   return (
//     <View style={styles.container}>
//       <Text>Tell us who you are...</Text>
//       <div>
//         <div>
//           <Button
//             title="Your Legal Name"/>
//           <Button
//             title="Preferred Name"/>
//         </div>
//       </div>
//     </View>
//   )
// }

export class PreferencesView extends Component {
  constructor(props) {
    super(props);

    let interestMap = []


    this.state = {
      step: 1,

        // step 1
        mentor: false,
        mentee: false,
        notSure: false,

        // step 2
        legalName: "",
        prefName: "",

        // step 3
        interests: ""
    }
  }

  nextStep = () => {
      const { step } = this.state
      this.setState({
        step: step + 1
      })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  showStep = () => {
    const {step, mentor, mentee, notSure, legalName, prefName, interests} = this.state

    if (step === 1) {
      return <PrefButtonElements3/>
    } else if (step === 2) {
      return <PrefButtonElements2/>
    } else if (step === 3) {
      return <PrefButtonElements3/>
    }
  }

  render() {
    return (
      <View style={styles.container}>
      {/* Button components rendered here */}
        <div>
          <div>
            {this.showStep()}
          </div>
        </div>
      </View>
    )
  }
}

class PrefButtonElements1 extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <View>
        <Text>I want to be a ... </Text>
        <Button title="Mentee"/>
        <Button title="Mentor"/>
        <Button title="Not Sure"/>
      </View>
    )
  }
}

class PrefButtonElements2 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <Text>Tell us who  you are ...</Text>
        <TextInput
          placeholder="Your Legal Name"/>
        <TextInput 
          placeholder="Preferred Name"/>
      </View>
    )
  }
}

// Implement a scrollview for the buttons?
class PrefButtonElements3 extends Component {
  constructor(props) {
    super(props)
  }

  render()  {
    return(
      <View>
        <Text>What would you like to know about ... </Text>
        {/* List of buttons */}
        <Button title="MHCI+D"/>
        <Button title="IxD"/>
        <Button title="INFO"/>
        <Button title="CS"/>
        <Button title="HCDE"/>
        <Button title="Design"/>
      </View>
    )
  }
}

// export const prefStyles = StyleSheet.create({ 
//   preferences: {
//     container: {}
//   }
// })
