// import firebase from 'firebase/app'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import { getUser } from './User.js';

// Accepts a key ID value representing the users ID
// and stores it in the database along with a mentor ID key.
// Returns status. 
export async function createMentor(uid, fullName, email) {
    var newMentorKey = database().ref().child('mentors').push().key;

    let user = await getUser(uid)

    var entryData = {
        id: newMentorKey
    }

    var profileData = {
        id: newMentorKey,
        fullName: user.fullName,
        // change to 
        info: {
            bio: {
                title: "Biography",
                enabled: false,
                key: "bio",
            },
            academics: {
                title: "Academics",
                enabled: false,
                key: "academics",
            },
            research: {
                title: "Research",
                enabled: false,
                key: "research",
            },
            career: {
                title: "Career",
                enabled: false,
                key: "career",
            },
            projects: {
                title: "Projects",
                enabled: false,
                key: "projects",
            },
            help: {
                title: "What I can help with",
                enabled: false,
                key: "help",
            },
        },
        email: email,
        uri: false,
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