import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';

// Firebase
import auth from '@react-native-firebase/auth';

// Causing cycling issue, put styles in a separate file from App.js!

// Handles all different steps of the Preferences form.
// Once
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

      // step 4
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  // Progresses to the next step, passed down
  // as a prop to Preference components
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  nextStepOne = () => {
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

  updateMentee = () => {
    const { mentee } = this.state
    this.setState({
      mentee: true
    })
  }

  updateMentor = () => {
    const { mentor } = this.state
    this.setState({
      mentor: true
    })
  }

  finish = () => {
    
  }

  showStep = () => {
    const { step, mentor, mentee, notSure, legalName, prefName, interests } = this.state

  
    if (step === 1) {
      return <PrefButtonElements1
        nextStep={this.nextStepOne}
        updateMentee={this.updateMentee}
        updateMentor={this.updateMentor}
        />
    }
    
    // If mentee option is selected is chosen
    if (mentee) {
      if (step === 2) {
        return <PrefButtonElements2
          prevStep={this.prevStep}
          nextStep={this.nextStep} />
      } else if (step === 3) {
        return <PrefButtonElements3
          prevStep={this.prevStep} 
          nextStep={this.nextStep}
          />
      } else if (step === 4) {
          return <PrefButtonElements4
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            navigation={this.props.navigation} 
            />
      }
    // If mentor option is selected
    } else {
      if (step === 2) {
        return <PrefButtonElements4
          navigation={this.props.navigation}/>
      }
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

// Displays screen for selecting mentee or mentor role.
// Selecting one of the options will highlight the option selected
// and pressing the 'next icon' will move onto the next screen.
class PrefButtonElements1 extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
    console.log(this.state)
  }

  // Proceeds to next form
  next = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  // Updates chosen role to mentee
  updateMentee = e => {
    e.preventDefault()
    this.props.updateMentee()
  }

  // Updates chosen role to mentor
  updateMentor = e => {
    e.preentDefault()
    this.props.updateMentor()
  }

  // Consider separating into three using flex...
  // make question + text flex 2, content flex 3,
  // footer flex 1
  render() {
    return (
      <View>
        <View style={styles.prefViewContentContainer}>
          <Text style={styles.prefViewTitle}>Would you like to be a Mentor or Mentee?</Text>
          <Text style={styles.prefViewText}>Choose your role, but you can always change later or be both roles in your personal profile.</Text>

          <View style={styles.prefViewButtons}>
            <TouchableOpacity 
              onPress={this.updateMentee}
              style={styles.prefViewButton}>
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

        </View>


        <View style={styles.arrows}>
          <TouchableOpacity
            onPress={this.next}>
            <Text style={styles.rightArrows}>
              Continue
                </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

// Displays the screen for 
class PrefButtonElements2 extends Component {
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
        <View style={styles.prefViewContentContainer}>
          <Text style={styles.prefViewTitle}>Tell us who  you are ...</Text>

          <View>
            <TextInput
              placeholder="Your Legal Name" />
            <TextInput
              placeholder="Preferred Name" />
          </View>

        </View>

        <View style={styles.arrows}>
          <TouchableOpacity onPress={this.back}>
            <Text style={styles.leftArrows}>
              &#8592;
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.next}>
            <Text style={styles.rightArrows}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

// Implement a scrollview for the buttons?
class PrefButtonElements3 extends Component {
  // constructor(props) {
  // }

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
        <View style={styles.prefViewContentContainer}>
          <Text style={styles.prefViewTitle}>What is your relationship with the Information School? </Text>
          <Text style={styles.prefViewText}>Select the fields that interests you. We will show you related information
          about your interests later.
            </Text>
          {/* List of buttons */}
          <View style={{ flex: 1 }}>
            <FlatList
              contentContainerStyle={{ alignItems: "center" }}
              numColumns={2}
              data={[
                { key: 'Informatics', description: 'Undergraduate major or minor' },
                { key: 'MSIM', description: 'Master of Science in Information Management' },
                { key: 'Ph.D.', description: 'Doctorate in Information Science' },
                { key: 'Faculty', description: 'Alumni of the iSchool' },
              ]}
              renderItem={({ item }) =>
                <TouchableOpacity style={styles.prefViewButtonThree}>
                  <Text style={styles.prefViewButtonText}>
                    {item.key}
                  </Text>
                </TouchableOpacity>
              }
            />
          </View>
        </View>

        <View style={styles.arrows}>
          <TouchableOpacity onPress={this.back}>
            <Text style={styles.leftArrows}>
              &#8592;
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.next}>
            <Text style={styles.rightArrows}>
              &#8594;
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

class PrefButtonElements4 extends Component {
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
        <View style={styles.prefViewContentContainer}>
          <Text style={styles.prefViewTitle}>Which phrase resonates with you more?</Text>
          <Text style={styles.prefViewText}>If you change your mind, this decision can be adjusted later.</Text>

          <View style={{ flex: 1}}>
            <FlatList
                contentContainerStyle={{ alignItems: "center" }}
                numColumns={2}
                data={[
                  { key: 'Applying into a program' },
                  { key: 'Navigating classes/majors/graduating on time' },
                  { key: 'Looking for a life coach' },
                  { key: "Landing an internship/job" },
                ]}
                renderItem={({item }) =>
                <TouchableOpacity style={styles.prefViewButtonFour}>
                  <Text style={styles.prefViewButtonText}>
                    {item.key}
                  </Text>
                </TouchableOpacity>
                }
            />
          </View>

          <View style={styles.arrows}>
          <TouchableOpacity onPress={this.back}>
            <Text style={styles.leftArrows}>
              &#8592;
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={() => this.props.navigation.navigate('Connect')}>
            <Text style={styles.rightArrows}>
              Finish
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // PreferencesView
  prefViewContainer: {
    backgroundColor: '#ffff',
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  prefViewContentContainer: {
    flex: 1,
    alignItems: 'stretch',
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
    marginTop: 20,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "center",
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
  prefViewButtonThree: {
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
  prefViewButtonFour: {
    backgroundColor: "white",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    width: 175,
    height: 175,
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
  arrows: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    // flex: 1,
  },
  leftArrows: {
    // textAlign: 'left',
    // marginLeft: 40,
    marginRight: 80,
    fontSize: 40,
    fontWeight: 'bold',
  },
  rightArrows: {
    // textAlign: 'right',
    // marginRight: 40,
    marginLeft: 80,
    fontSize: 40,
    fontWeight: 'bold'
  }
})

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