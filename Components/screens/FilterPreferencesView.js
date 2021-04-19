import 'react-native-gesture-handler';
import React, { Component, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';

// Firebase
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

// Models
import { createMentee } from '../models/Mentee.js'
import { createMentor } from '../models/Mentor.js'

export class FilterPreferencesView extends Component {
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

  // Resets current mentee/mentor selection
  prevStepMenteeMentor = () => {
    const { step } = this.state
    this.setState({
      step: step - 1,
      mentee: false,
      mentor: false,
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
    console.log(this.state)
    console.log('Writing to database...')
    console.log(this.props)
    let uid = this.props._user.uid
    let fullName = "test"

    // Mentee chosen
    if (this.state.mentee) {
      // console.log("Creating mentee profile...")
      // createMentee(uid, fullName, this.props._user.email)
    
    // Mentor chosen
    } else if (this.state.mentor) {
      // console.log("Creating mentor profile...")
      // createMentor(uid, fullName, this.props._user.email)

    // Error occurred, no role selected
    } else {
      console.log("Error. No profile being created.")
    }

    // Navigate to next stack screen
    console.log('Connecting!')

    // Update preference here...
    // Local update
    this.props.preference.preference[1]()

    // Update user in database  

    console.log(this.props)
  }

  showStep = () => {
    const { step, mentor, mentee, notSure, legalName, prefName, interests } = this.state

    // Mentee/mentor selection
    if (step === 1) {
      return <PrefButtonElements1
        nextStep={this.nextStepOne}
        updateMentee={this.updateMentee}
        updateMentor={this.updateMentor}
      />
    }

    // If mentee option is selected is chosen
    if (mentee) {
      // What stage are you at...
      if (step === 2) {
        return <PrefButtonElementsStage
          prevStep={this.prevStepMenteeMentor}
          nextStep={this.nextStep} />
        // What is your class standing...
      } else if (step === 3) {
        return <PrefButtonElementsStand
          prevStep={this.prevStep}
          nextStep={this.nextStep}
        />
        // What direction in INFO are you in or interested in...
      } else if (step === 4) {
        return <PrefButtonElementsDirection
          prevStep={this.prevStepMenteeMentor}
          nextStep={this.nextStep}
          finish={this.finish}
          navigation={this.props.navigation}
          {...this.props}
        />
      }

      // If mentor option is selected
    } else {
      // What is your relationship to the iSchool?
      if (step === 2) {
        return <PrefButtonElementsRelationship
          prevStep={this.prevStepMenteeMentor}
          nextStep={this.nextStep} />
      } else if (step === 3) {
        return <PrefButtonElementsDirection
          {...this.props}
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          finish={this.finish}
          navigation={this.props.navigation}
        />
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

  // componentDidMount() {
  // }

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
    e.preventDefault()
    this.props.updateMentor()
  }

  prev = e => {
    e.preventDefault()
    this.props.prevStep()
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
            <TouchableOpacity
              onPress={this.updateMentor}
              style={styles.prefViewButton}>
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
        {/* <Text>
            Test
        </Text> */}
      </View>
    )
  }
}

// What stage are you at
class PrefButtonElementsStage extends Component {
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
          <Text style={styles.prefViewTitle}>What stage are you at right now?</Text>

          {/* List of buttons */}
          <View style={{ flex: 1 }}>
            <FlatList
              contentContainerStyle={{ alignItems: "center" }}
              numColumns={2}
              data={[
                { key: 'Applying for INFO undergraduate major / minor', description: 'Undergraduate major or minor' },
                { key: 'Exploring different areas in INFO and classes', description: 'Master of Science in Information Management' },
                { key: 'Looking for internships / jobs / career advice', description: 'Doctorate in Information Science' },
                { key: 'Other', description: 'Alumni of the iSchool' },
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
              Continue
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

// Implement a scrollview for the buttons?
class PrefButtonElementsStand extends Component {
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
          <Text style={styles.prefViewTitle}>What is your class standing?</Text>

          {/* <Text style={styles.prefViewText}>Select the fields that interests you. We will show you related information
          about your interests later.
            </Text> */}

          {/* List of buttons */}
          <View style={{ flex: 1 }}>
            <FlatList
              contentContainerStyle={{ alignItems: "center" }}
              numColumns={2}
              data={[
                { key: 'First Year', description: 'Undergraduate major or minor' },
                { key: 'Second Year', description: 'Master of Science in Information Management' },
                { key: 'Third Year', description: 'Doctorate in Information Science' },
                { key: 'Fourth Year or more', description: 'Alumni of the iSchool' },
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

          <View style={{ flex: 1 }}>
            <FlatList
              contentContainerStyle={{ alignItems: "center" }}
              numColumns={2}
              data={[
                { key: 'Applying into a program' },
                { key: 'Navigating classes/majors/graduating on time' },
                { key: 'Looking for a life coach' },
                { key: "Landing an internship/job" },
              ]}
              renderItem={({ item }) =>
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

class PrefButtonElementsDirection extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log("Loading final element")
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }

  finish = e => {
    e.preventDefault()
    console.log("Testing finish")
    this.props.finish()
  }

  render() {
    return (
      <View>
        <View style={styles.prefViewContentContainer}>
          <Text style={styles.prefViewTitle}>What direction in INFO are you in or interested in?</Text>

          <View style={{ flex: 1 }}>
            <FlatList
              contentContainerStyle={{ alignItems: "center" }}
              numColumns={2}
              data={[
                { key: 'User experience design' },
                { key: 'User experience research' },
                { key: 'Data Science' },
                { key: 'Software Development' },
                { key: 'Information Management' },
                { key: 'Human-Computer Interaction' },
              ]}
              renderItem={({ item }) =>
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

            {/* Call finish function */}
            <TouchableOpacity
              onPress={(e) => this.finish(e)}>
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

class PrefButtonElementsRelationship extends Component {
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
        <View style={styles.prefViewContentContainer}>
          <Text style={styles.prefViewTitle}>What is your relationship with the iSchool?</Text>

          <View style={{ flex: 1 }}>
            <FlatList
              contentContainerStyle={{ alignItems: "center" }}
              numColumns={2}
              data={[
                { key: 'Informatics', description: "Undergraduate major or minor" },
                { key: 'MLIS', description: "Master of Library and Information Science" },
                { key: 'MSIM', description: "Master of Science in Information Management" },
                { key: 'Ph.D', description: "Doctorate in Information Science" },
                { key: 'Faculty', description: "Teach and assist teaching INFO classes" },
                { key: 'Alumni', description: "Alumni of the iSchool" },
              ]}
              renderItem={({ item }) =>
                <TouchableOpacity style={styles.prefViewButtonFour}>
                  <Text style={styles.prefViewButtonText}>
                    {item.key}
                  </Text>
                  <Text>
                    {item.description}
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
              onPress={this.next}>
              <Text style={styles.rightArrows}>
                Continue
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