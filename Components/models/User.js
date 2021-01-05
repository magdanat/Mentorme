import database from '@react-native-firebase/database';

// Accepts a user id parameter and returns the users
// information as an object
export async function getUser(uid) {
    let ref = database().ref('users/' + uid)
    let snapshot = await ref.once('value')
    let snapshotItem = snapshot.val()
    console.log(snapshotItem)
    return snapshotItem;
}

export async function updateUser(uid) {
    
}


export async function updateUserType(uid) {

}

// Accepts a user object and checks the user's current profile type (mentee/mentor)
// Returns the current active profile type for a user as a string value
export function getOppositeUserType(user) {
    if (user.currentProfile == "mentee") {
        return "mentors"
    } else if (user.currentProfile == "mentor") {
        return "mentees"
    } else {
        console.log("Error in getting user type. Invalid user object.")
    }
}

// Creates a new user and puts it in the database
export function createNewUser(uid, email, fName, lName) {
    let fullName = fName + ' ' + lName

    database()
        .ref('users/' + uid)
        .set({
            preference: false,
            email: email,
            firstName: fName,
            lastName: lName,
            uid: uid,
            fullName: fullName,
            currentProfile: "none",
        })
        .then(() => console.log('Data set.'));
}