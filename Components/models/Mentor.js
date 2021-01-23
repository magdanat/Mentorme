// import firebase from 'firebase/app'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import { getUser } from './User.js';

// Accepts a key ID value representing the users ID
// and stores it in the database along with a mentor ID key.
// Returns status. 
export async function createMentor(uid, fullName) {
    var newMentorKey = database().ref().child('mentors').push().key;

    let user = await getUser(uid)

    var entryData = {
        mentorID: newMentorKey
    }

    var profileData = {
        mentorID: newMentorKey,
        fullName: user.fullName,
        info: {
            Bio: "No biography",
            Career: "No role",
        },
        profileImageURL: null,
        academicInfo: null,
        researchInfo: null,
        careerInfo: null
    }

    var userUpdates = {
        preference: true,
        currentProfile: "mentor",
    }

    var updates = {}

    updates['mentors/' + uid] = entryData
    updates['profiles/mentors/' + uid] = profileData
    updates['users/' + uid + '/currentProfile'] = "mentor"
    updates['users/' + uid + '/preference'] = true

    console.log('Updating database...')

    return database().ref().update(updates);
}