import 'react-native-gesture-handler';
import React, { Component, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

// Firebase
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

// Models
import { createMentee } from '../models/Mentee.js'
import { createMentor } from '../models/Mentor.js'

export class FilterPreferencesView extends Component {
  constructor(props) {
    super(props);

    this.setUser = this.setUser.bind(this)
    this.setStage = this.setStage.bind(this)
    this.setProgram = this.setProgram.bind(this)
    this.setInterests = this.setInterests.bind(this)

  }

  componentDidMount() {
  }

  componentDidUpdate() {
    console.log(this.state)
  }


  setUser(value) {
    this.setState({
      userType: value,
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
      />
    )
  }

  setProgram(value) {
    this.setState({
      program: value,
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
        <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../../assets/images/path-2.png')} />
            </TouchableOpacity>


            <Text>
              Preferences
            </Text>

            <TouchableOpacity>
              <Text>
                Save
              </Text>
            </TouchableOpacity>
        </View>

        {/* Preference Content */}
        <View>
          {users}
          {stages}
          {programs}
          {interests}
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
      <View>
        <Text>
          {title}
        </Text>
        {content}
      </View>
    )
  }
}

class PreferenceButton extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const buttonText = this.props.value[0]
    const value = this.props.value[1]

    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.update(value)}>
          <Text>
            {buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  // PreferencesView
  prefViewContainer: {
    backgroundColor: '#ffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})