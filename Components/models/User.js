import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

// Accepts a user id parameter and returns the users
// information as an object
export async function getUser(uid) {
    let ref = database().ref('users/' + uid)
    let snapshot = await ref.once('value')
    let snapshotItem = snapshot.val()

    if (snapshotItem) {
        return snapshotItem
    } else {
        console.log(snapshotItem)
        throw 'Invalid user error.'
    }
}

/* Input: Accepts a update object which contains the path that will be updated
    and the update that will be made to that path
    Output: Returns the status of the update. 
*/
export async function updateUser(updateObject) {
    var updates = {}
    
    updates[updateObject.path] = updateObject.update

    database().ref().update(updates).then(() => {
        console.log("Successful update")
    }).catch((e) => {
        console.log(e)
    })
}


export async function updateUserType(uid) {
}

// Accepts a user object and checks the user's current profile type (mentee/mentor)
// Returns the current active profile type for a user as a string value
export function getOppositeUserType(user) {
}

export function getUserType(user) {
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
            currentProfile: 0,
        })
        .then(() => console.log('Data set.'));
}

export async function updateFirebaseUserEmail(value, valueType) {
    let user = auth().currentUser

    if (user != null) {
        switch(valueType) {
            case "email":
                user.updateEmail(value)
                .then(() => {
                    // Realtime database update
                    var updates = {}

                    updates['profiles/' + user.uid + '/email'] =  value
                    updates['users/' + user.uid + '/email'] = value

                    database().ref().update(updates).then(() => {
                        console.log("Update to realtime database successful.")
                    }).catch((e) => {
                        console.log(e)
                    })
                })
                .then(() => {
                    console.log("Successful update amigo.")
                }).catch((e) => {
                    console.log(e)
                })
        }
    }
}

export async function updateFirebaseUsername(firstName, lastName, valueType) {
    let user = auth().currentUser
    let fullName = firstName + " " + lastName


    var updates = {}

    if (user != null) {
        user.updateProfile({
            displayName: fullName
        }).then(() => {
            updates['profiles/' + user.uid + '/fullName'] = fullName
            updates['users/' + user.uid + '/fullName'] = fullName
            updates['users/' + user.uid + '/firstName'] = firstName
            updates['users/' + user.uid + '/lastName'] = lastName

            database().ref().update(updates).then(() => {
                console.log("Realtime database changes successful.")
            }).catch((e) => {
                console.log(e)
            })
        }).then(() => {
            console.log(user)
            console.log("Successful update.")
        }).catch((e) => {
            console.log(e)
        })
    }
}