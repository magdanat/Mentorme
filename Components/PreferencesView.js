import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';

// Causing cycling issue, put styles in a separate file from App.js!
import { styles } from '../App.js';


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
    const { step, mentor, mentee, notSure, legalName, prefName, interests } = this.state

    if (step === 1) {
      return <PrefButtonElements1
        nextStep={this.nextStep} />
    } else if (step === 2) {
      return <PrefButtonElements2
        prevStep={this.prevStep}
        nextStep={this.nextStep} />
    } else if (step === 3) {
      return <PrefButtonElements3
        prevStep={this.prevStep} />
    }
  }

  render() {
    return (
      <View style={styles.prefViewContainer}>
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
    return (
      <View>
        <Text style={styles.prefViewTitle}>Would you like to be a Mentor or Mentee?</Text>
        <Text style={styles.prefViewText}>Choose your role, but you can always change later or be both roles in your personal profile.</Text>

        <View style={styles.prefViewButtons}>
          <TouchableOpacity style={styles.prefViewButton}>
            <Text style={styles.prefViewButtonText}>
              Mentee
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.prefViewButton}>
            <Text style={styles.prefViewButtonText}>
              Mentor
              </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={this.next}>
          <Text>
            &#8594;
              </Text>
        </TouchableOpacity>

      </View>
    )
  }
}

// const PrefButttonElements1 = ({ test }) => (
//   <View>
//     <Text style={styles.prefViewTitle}>Would you like to be a Mentor or Mentee?</Text>
//     <Text style={styles.prefViewText}>Choose your role, but you can always change later or be both roles in your personal profile.</Text>

//     <View style={styles.prefViewButtons}>
//       <TouchableOpacity>
//         <Text>
//           Mentee
//                </Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text>
//           Mentor
//                </Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={this.next}>
//         <Text>
//           &#8594;
//                </Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// )

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
    return (
      <View>
        <View>
          <Text style={styles.prefViewTitle}>Tell us who  you are ...</Text>
          <TextInput
            placeholder="Your Legal Name" />
          <TextInput
            placeholder="Preferred Name" />
        </View>
        <View>
          <Button
            title="&#8592;"
            onPress={this.back} />
          <Button
            title="&#8594;"
            onPress={this.next} />
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

  render() {
    return (
      <View>
          <Text style={styles.prefViewTitle}>What would you like to know about to know about? </Text>
          <Text style={styles.prefViewText}>Select the fields that interests you. We will show you related information
          about your interests later.
            </Text>


          {/* List of buttons */}
          <View>
            <FlatList
            contentContainerStyle={{alignItems: "center"}}
              numColumns={2}
              data={[
                { key: 'MHCDI+D' },
                { key: 'IXD' },
                { key: 'INFO' },
                { key: "Computer Science" },
                { key: "HCDE" },
                { key: "Design" }
              ]}
              renderItem={({ item }) => 
              <TouchableOpacity style={styles.prefViewButtonTwo}>
                <Text style={styles.prefViewButtonText}>
                  {item.key}
                </Text>
              </TouchableOpacity>
              }
            />
          </View>

          <TouchableOpacity onPress={this.back}>
            <Text>
            &#8592;
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>
            Finish
            </Text>
          </TouchableOpacity>
      </View>
    )
  }
}