import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
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
      return <PrefButtonElements1
              nextStep={this.nextStep}/>
    } else if (step === 2) {
      return <PrefButtonElements2
              prevStep={this.prevStep}
              nextStep={this.nextStep}/>
    } else if (step === 3) {
      return <PrefButtonElements3
             prevStep={this.prevStep}/>
    }
  }

  render() {
    return (
      <View style={styles.test}>
        {this.showStep()}
      </View>
    )
  }
}

class PrefButtonElements1 extends Component {
  constructor(props) {
    super(props)
  }

  next = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    return(
      <View>
          <Text>I want to be a ... </Text>
          <TouchableOpacity>
            <Text>
              Mentee
            </Text>
          </TouchableOpacity>
          <Button title="Mentor"/>
          <Button title="Not Sure"/>
          <Button title="&#8592;"
            onPress={this.next}/>
      </View>
    )
  }
}

class PrefButtonElements2 extends Component {
  constructor(props) {
    super(props)
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  next = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    return(
      <View>
        <View>
        <Text>Tell us who  you are ...</Text>
        <TextInput
          placeholder="Your Legal Name"/>
        <TextInput 
          placeholder="Preferred Name"/>
        </View>
        <View>
          <Button
            title="&#8592;"
            onPress={this.back}/>
          <Button
            title="&#8594;"
            onPress={this.next}/>
        </View>
      </View>
    )
  }
}

// Implement a scrollview for the buttons?
class PrefButtonElements3 extends Component {
  constructor(props) {
    super(props)
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  render()  {
    return(
      <View>
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
          <View>
            <Button title="&#8592;"
              onPress={this.back}/>
          </View>
      </View>
    )
  }
}