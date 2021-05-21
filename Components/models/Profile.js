import database from '@react-native-firebase/database';
import { useFocusEffect } from '@react-navigation/native';

import { getUser } from './User.js';
import { getUserList } from './List.js';

// Accepts two parameters, uid
export async function createProfile(profileObject) {
    let newProfileKey = database().ref().push().key;

    let user = await getUser(profileObject.uid)

    // var entryData = {
    //     id: newProfileKey
    // }

    var profileData = {
        id: newProfileKey,
        fullName: user.fullName,
        info: {
            bio: {
                title: "Biography",
                enabled: false,
                key: "bio",
                description: false,
            },
            academics: {
                title: "Academics",
                enabled: false,
                key: "academics",
                description: false,
            },
            research: {
                title: "Research",
                enabled: false,
                key: "research",
                description: false,
            },
            career: {
                title: "Career",
                enabled: false,
                key: "career",
                description: false,
            },
            projects: {
                title: "Projects",
                enabled: false,
                key: "projects",
                description: false
            },
            help: {
                title: "What I can help with",
                enabled: false,
                key: "help",
                description: false
            },
        },
        email: profileObject.email,
        uri: false,
    }

    var updates = {}

    updates['profiles/' + profileObject.uid] = profileData
    updates['users/' + profileObject.uid + '/currentProfile'] = profileObject.userType
    updates['users/' + profileObject.uid + '/preference'] = true

    return database().ref().update(updates)
}

// Accepts a user's key ID and retrieves the associated
// profile information with that key and returns it
export async function getProfile(uid) {
    let ref = database().ref('profiles/' + uid)
    let snapshot = await ref.once('value')
    let snapshotItem = snapshot.val()

    return snapshotItem;
}

// Accepts a users' key ID and retrieves
// the profiles that user has favorited 
export async function getUserProfiles(uid) {

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
    var updates = {}
    updates['profiles/' + id + "/info/" + info + '/description'] = update
    updates['profiles/' + id + '/info/' + info + '/enabled'] = true
    database().ref().update(updates)
}

// Accepts two parameters
// Input: Update represents the new URI for the picture being uploaded
// id represents the user's specific id
// Output: 
export async function updateProfilePicture(update, id) {
    var updates = {}

    console.log(update)

    updates['profiles/' + id + '/uri'] = update

    database().ref().update(updates).then(() => {
        console.log("Successful update")
    }).catch((e) => {
        console.log(e)
    })
}

// Accepts userid and returns profile picture associated with that user
// from profiles 
export async function getProfilePicture(id) {
    let ref = database().ref('profiles/' + id + '/uri')
    let snapshot = await ref.once('value')
    let snapshotItem = snapshot.val()

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

export async function getListOfProfiles(uid) {
    let userFavorites = await getUserList(uid)

    let userProfilesArray = []

    console.log(userFavorites)

    for (const user of userFavorites) {
        let userProfile = await getProfile(user)
        userProfilesArray.push([user, userProfile])
    }

    return userProfilesArray
}