// import firebase from 'firebase/app'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import { getUser } from './User.js';

// Accepts a key ID value representing the users ID
// and creates a new mentee profile for the user,
// storing that information in the database
// and returning status. 
export async function createMentee(uid, fullName, email) {
    var newMenteeKey = database().ref().child('mentees').push().key;

    let user = await getUser(uid)

    var entryData = {
        menteeID: newMenteeKey
    }

    var profileData = {
        menteeID: newMenteeKey,
        fullName: user.fullName,
        info: {
            bio: {
                title: "Biography",
                enabled: false,
                key: "bio",
                description: "",
            },
            academics: {
                title: "Academics",
                enabled: false,
                key: "academics",
                description: "",
            },
            research: {
                title: "Research",
                enabled: false,
                key: "research",
                description: "",
            },
            career: {
                title: "Career",
                enabled: false,
                key: "career",
                description: "",
            },
            projects: {
                title: "Projects",
                enabled: false,
                key: "projects",
                description: "",
            },
            help: {
                title: "What I can help with",
                enabled: false,
                key: "help",
                description: "",
            },
        },
        email: email,
        profileImageURL: null,
        academicInfo: null,
        researchInfo: null,
        careerInfo: null
    }

    var updates = {
    };

    updates['mentees/' + uid] = entryData
    updates['profiles/mentees/' + uid] = profileData
    updates['users/' + uid + '/currentProfile'] = "mentee"
    updates['users/' + uid + '/preference'] = true

    return database().ref().update(updates);
}

export function getMentee(uid) {

}