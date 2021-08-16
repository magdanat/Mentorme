import 'react-native-gesture-handler';
import React, { Component, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity, StatusBar } from 'react-native';

// Firebase
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

// Models
import { createMentee } from '../models/Mentee.js'
import { createMentor } from '../models/Mentor.js'
import { getPreference, updatePreference } from '../models/Preference.js'

export class FilterPreferencesView extends Component {
  constructor(props) {
    super(props);

    this.setUser = this.setUser.bind(this)
    this.setStage = this.setStage.bind(this)
    this.setProgram = this.setProgram.bind(this)
    this.setInterests = this.setInterests.bind(this)


    this.state = {
      prefUserType: false,
      direction: false,
      relationship: false,
      stage: false,
    }

  }

  // Retrieve preference settings
  componentDidMount() {
    this.getPreferenceCB()
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  async getPreferenceCB() {
    let preferences = await getPreference(this.props._user.uid)

    console.log(preferences)
    
    this.setState({
      direction: preferences.direction,
      relationship: preferences.relationship,
      prefUserType: preferences.prefUserType,
      stage: preferences.stage
    })
  }

  submitPreference() {
    const updates = {
      direction: this.state.direction,
      relationship: this.state.relationship,
      prefUserType: this.state.prefUserType,
      stage: this.state.stage,
    }
    updatePreference(this.props._user.uid, updates)
  }

  setUser(value) {
    this.setState({
      prefUserType: value,
    })
  }

  renderUserPref() {
    const userArray = [
      ["Mentee", 1],
      ["Mentor", 2],
      ["Mentor + Mentee", 3],
    ]

    const userMap = new Map(userArray)

    return (
        <PreferenceContainer
          title={"What are you looking for?"}
          data={userMap}
          update={this.setUser}
          value={this.state.prefUserType}
        />
    )
  }

  setStage(value) {
    this.setState({
      stage: value,
    })
  }

  renderStagePref() {
    const stageArray = [
      ["Applying for INFO", 1],
      ["Exploring", 2],
      ["Looking for Jobs", 3],
      ["Unsure", 4],
    ]

    const stageMap = new Map(stageArray)

    return (
      <PreferenceContainer
        title={"What stage are you at right now?"}
        data = {stageMap}
        update={this.setStage}
        value={this.state.stage}
      />
    )
  }

  setProgram(value) {
    this.setState({
      relationship: value,
    })
  }

  renderProgramType() {
    const programArray = [
      ["Informatics", 1],
      ["MLIS", 2],
      ["MSIM", 3],
      ["Ph.D", 4],
      ["Faculty", 5],
      ["Alumni", 6],
      ["Explorning", 7],
      ["None", 8],
    ]

    const programMap = new Map(programArray)

    return (
      <PreferenceContainer
        title={"What programs are you involved with?"}
        data={programMap}
        update={this.setProgram}
        value={this.state.relationship}
      />
    )
  }

  setInterests(value) {
    this.setState({
      direction: value,
    })
  }

  renderInterestType() {
    const interestArray = [
      ["UX Design", 1], 
      ["UX Research", 2], 
      ["Data Science", 3],  
      ["Software Development", 4], 
      ["Information Management", 5], 
      ["Human-Computer Interaction", 6]
    ]
    const interestMap = new Map(interestArray)

    return (
      <PreferenceContainer
        title={"What is your field of interests?"}
        data={interestMap}
        update={this.setInterests}
        value={this.state.direction}
      />
    )
  }

  render() {

    const users = this.renderUserPref()
    const stages = this.renderStagePref()
    const programs = this.renderProgramType()
    const interests = this.renderInterestType()

    return (
      <View style={styles.prefViewContainer}>
        {/* Header Content */}
        <View style={styles.titleContainer}>

            {/* Return */}
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../../assets/images/path-2.png')} />
            </TouchableOpacity>

            {/* Title */}
            <Text>
              Preferences
            </Text>

            {/* Complete */}
            <TouchableOpacity
              onPress={() => this.submitPreference()}>
              <Text>
                Done
              </Text>
            </TouchableOpacity>
        </View>

        {/* Preference Content */}
        <View style={styles.scrollViewContainer}>
          <ScrollView styles={styles.scrollView}>
          {users}
          {stages}
          {programs}
          {interests}
          </ScrollView>
        </View>
      </View>
    )
  }
}

class PreferenceContainer extends Component{
  constructor(props) {
    super(props);
  }

  renderContent() {
    var renderedData
    const data = this.props.data

    renderedData =  Array.from(data.entries()).map((key) => {
        return <PreferenceButton
          key={key[0]}
          value={key}
          givenValue={this.props.value}
          update={this.props.update}
        />
    })

    return (
      <>
      {renderedData}
      </>
      )
  }

  render() {

    const title = this.props.title
    const content = this.renderContent()

    return (
      <View style={styles.buttonContainer}>
        <Text style={styles.preferenceContainerTitle}>
          {title}
        </Text>
        <View style={styles.buttonContentContainer}>
          {content}
        </View>
      </View>
    )
  }
}

class PreferenceButton extends Component {
  constructor(props) {
    super(props);
  }

  isSelected() {
    console.log(this.props.givenValue === this.props.value[1])
    return this.props.givenValue === this.props.value[1]
  }

  render() {
    const buttonText = this.props.value[0]
    const value = this.props.value[1]

    return (
      <View style={styles.preferenceButtonView}>
        <TouchableOpacity
          style={[styles.preferenceButton, {
            borderColor: this.isSelected() ? '#fbc015' : 'grey',
            backgroundColor: this.isSelected() ? '#fbc015' : 'white',
          }]}
          onPress={() => this.props.update(value)}>
          <Text style={styles.preferenceButtonText}>
            {buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  prefViewContainer: {
    backgroundColor: '#ffff',
    flex: 1,
  },
  buttonContainer: {
    marginBottom: 0
  },
  buttonContentContainer: {
    flexDirection: "row",
    flexWrap: 'wrap',
  },
  titleContainer: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 25,
  },
  preferenceContainerTitle: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 25,
  },
  preferenceButton: {
    marginHorizontal: 10,
    padding: 10,
    height: 60,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
    // backgroundColor: 'blue',
  },
  preferenceButtonText: {
    fontSize: 20,
  },
  preferenceButtonView: {
  }, 
  scrollViewContainer: {
    marginHorizontal: 10,
    flex: 1,
  }
})