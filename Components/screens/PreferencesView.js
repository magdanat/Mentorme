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
import { createPreference } from '../models/Preference.js';
import { createProfile } from '../models/Profile.js';

// Context
// import { PreferenceContext } from '../../context.js';

// Handles all different steps of the Preferences form.
// Once
export class PreferencesView extends Component {
  constructor(props) {
    super(props);

    let interestMap = []

    this.setValue = this.setValue.bind(this)
    this.setStage = this.setStage.bind(this)
    this.setStanding = this.setStanding.bind(this)
    this.setRelationship = this.setRelationship.bind(this)
    this.setDirection = this.setDirection.bind(this)
    this.updateType = this.updateType.bind(this)
    this.finish = this.finish.bind(this)

    this.state = {
      step: 1,
      prefUserType: 0,
      userType: 0,
      userTypeFulfilled: false,
      stage: 0,
      stageFulfilled: false,
      relationship: 0,
      relationshipFulfilled: false,
      direction: 0,
      directionFulfilled: false,
    }
  }

  componentDidMount() {
  }

  setValue(event) {

    console.log(event)

    let field = event.target.name
    let value = event.target.value

    let changes = {}

    changes[field] = value

    console.log(changes)

    this.setState(changes)

  }

  setStage(value) {
    this.setState({
      stage: value,
      stageFulfilled: true,
    })
  }

  setStanding(value) {
    this.setState({
      standing: value
    })
  }

  setRelationship(value) {
    this.setState({
      relationship: value,
      relationshipFulfilled: true,
    })
  }

  setDirection(value) {
    this.setState({
      direction: value,
      directionFulfilled: true,
    })
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

  updateType(value) {
    // Refers to user type that will be set initially for preferences.
    let prefUserType
    switch(value) {
      case 1:
        prefUserType = 2
        break
      case 2:
        prefUserType = 1
        break
      case 3:
      case 0:
        prefUserType = 3
        break
    }

    this.setState({
      prefUserType: prefUserType,
      userType: value,
      userTypeFulfilled: true
    })
  }

  async finish() {

    console.log(this.state)

    let preferenceObject = {
      stage: this.state.stage,
      direction: this.state.direction,
      relationship: this.state.relationship,
      uid: this.props._user.uid,
      userType: this.state.userType,
      prefUserType: this.state.prefUserType
    }

    let profileObject = {
      uid: this.props._user.uid,
      email: this.props._user.email,
      userType: this.state.userType,
    }

    await createProfile(profileObject)
    await createPreference(preferenceObject)

    // // Update preference here...
    // // Local update
    this.props.preference.preference[1]()

    // // Update user in database  
    // console.log(this.props)
  }

  showStep = () => {
    const { step } = this.state

    switch (step) {
      case 1:
        return <PrefButtonElements1
          nextStep={this.nextStepOne}
          updateType={this.updateType}
        />
      case 2:
        return <PrefButtonElementsStage
          nextStep={this.nextStep}
          setStage={this.setStage} />
      case 3:
        return <PrefButtonElementsRelationship
          prevStep={this.prevStepMenteeMentor}
          nextStep={this.nextStep}
          setRelationship={this.setRelationship} />
      case 4:
        return <PrefButtonElementsDirection
          {...this.props}
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          finish={this.finish}
          setDirection={this.setDirection}
          navigation={this.props.navigation}
        />
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

/* 
  Displays screen for selecting mentee or mentor role.
  Selecting one of the options will highlight the option selected
  and pressing the 'next icon' will move onto the next screen.
*/
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
          <View style={{ flex: 1 }}>
            <FlatList
              contentContainerStyle={{ alignItems: "center" }}
              numColumns={2}
              data={[
                { key: 'Mentee', value: 1 },
                { key: 'Mentor', value: 2 },
                { key: 'Unsure', value: 3 },
                { key: 'None', value: 0 },
              ]}
              renderItem={({ item }) =>
                <TouchableOpacity
                  onPress={() => this.props.updateType(item.value)}
                  style={styles.prefViewButton}>
                  <Text style={styles.prefViewButtonText}>
                    {item.key}
                  </Text>
                </TouchableOpacity>
              }
            />
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
                { key: 'Applying for INFO undergraduate major / minor', description: 'Undergraduate major or minor', value: 1 },
                { key: 'Exploring different areas in INFO and classes', description: 'Master of Science in Information Management', value: 2 },
                { key: 'Looking for internships / jobs / career advice', description: 'Doctorate in Information Science', value: 3 },
                { key: 'Other', description: 'Alumni of the iSchool', value: 4 },
              ]}
              renderItem={({ item }) =>
                <TouchableOpacity
                  style={styles.prefViewButtonThree}
                  onPress={() => this.props.setStage(item.value)}>
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

  async finish() {

    await this.props.finish(this.props._user.uid, this.props._user.email)
      .then(() => {
        console.log("Finished finish")
      }).catch((e) => {
        console.log("Error:" + e)
      })
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
                { key: 'User experience design', value: 1 },
                { key: 'User experience research', value: 2 },
                { key: 'Data Science', value: 3 },
                { key: 'Software Development', value: 4 },
                { key: 'Information Management', value: 5 },
                { key: 'Human-Computer Interaction', value: 6 },
              ]}
              renderItem={({ item }) =>
                <TouchableOpacity
                  onPress={() => this.props.setDirection(item.value)}
                  style={styles.prefViewButtonFour}>
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
              onPress={() => this.finish()}>
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
                { key: 'Informatics', description: "Undergraduate major or minor", value: 1 },
                { key: 'MLIS', description: "Master of Library and Information Science", value: 2 },
                { key: 'MSIM', description: "Master of Science in Information Management", value: 3 },
                { key: 'Ph.D', description: "Doctorate in Information Science", value: 4 },
                { key: 'Faculty', description: "Teach and assist teaching INFO classes", value: 5 },
                { key: 'Alumni', description: "Alumni of the iSchool", value: 6 },
                { key: 'Exploring', description: "Exploring", value: 7 },
                { key: 'None', description: "None", value: 8 },
              ]}
              renderItem={({ item }) =>
                <TouchableOpacity
                  onPress={() => this.props.setRelationship(item.value)}
                  style={styles.prefViewButtonFour}>
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