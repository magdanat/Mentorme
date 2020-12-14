// import firebase from 'firebase/app'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export { User } from './User.js'

// Accepts a key ID value representing the users ID
// and creates a new mentee profile for the user,
// storing that information in the database
// and returning status. 
export function createMentee(uid, fullName) {
    var newMenteeKey = database().ref().child('mentees').push().key;

    var entryData = {
        menteeID: newMenteeKey
    }

    var profileData = {
        menteeID: newMenteeKey,
        menteeName: fullName,
        info: {
            bio: "No biography",
            career: "No role",
        },
        profileImageURL: null,
        academicInfo: null,
        researchInfo: null,
        careerInfo: null
    }

    var updates = {
        preferences: true
    };

    updates['mentees/' + uid] = entryData
    updates['profiles/mentees/' + uid] = profileData

    return database().ref().update(updates);
}