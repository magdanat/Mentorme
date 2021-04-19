import database from '@react-native-firebase/database';
import { useFocusEffect } from '@react-navigation/native';

import { getUser, getUserType } from './User.js';


// Accepts a user's key ID and retrieves the associated
// profile information with that key and returns it
export async function getProfile(uid) {
    let user =  await getUser(uid)
    let userType = getUserType(user)

    let ref = database().ref('profiles/' + userType + '/' + uid)
    let snapshot = await ref.once('value')
    let snapshotItem = snapshot.val()

    // console.log(snapshotItem)

    return snapshotItem;
}

// Accepts a info object and returns it as a formatted
// array
export function profileArray(infoItem) {
    let infoKeys = Object.keys(infoItem)
    let infoMap = new Map()

    infoKeys.map((key) => {
        infoMap.set((key), infoItem[key])
    })

    return infoMap;
}

// Accepts information being changed, the change being uploaded, and the id of the user
// whose information is being updated
export async function editProfileInfo(info, update, id) {
    let user = await getUser(id)
    let userType = getUserType(user)
    var updates = {}

    updates['profiles/' + userType + '/' + id + "/info/" + info + '/description'] = update

    database().ref().update(updates)
}

// Accepts two parameters
// Input: Update represents the new URI for the picture being uploaded
// id represents the user's specific id
// Output: 
export async function updateProfilePicture(update, id) {
    let user = await getUser(id)
    let userType = getUserType(user)
    var updates = {}

    updates['profiles/' + userType + '/' + id + '/uri'] = update

    database().ref().update(updates)
}

// Accepts userid and returns profile picture associated with that user
// from profiles 
export async function getProfilePicture(id) {
    let user = await getUser(id)
    let userType = getUserType(user)

    var updates = {}

    let ref = database().ref('profiles/' + userType + '/' + id + '/uri')
    let snapshot = await ref.once('value')
    let snapshotItem = snapshot.val()

    // console.log(snapshotItem)

    return snapshotItem
}

export async function focusProfile() {
    useFocusEffect(
        React.useCallback(() => {
            console.log("Screen focused")
            const unsubscribe = API.subscribe();

            return () => unsubscribe();
        })
    )
    return null;
}

// export function getProfileInfo(info, id) {
//     let ref  = database().ref('profiles/')


// }