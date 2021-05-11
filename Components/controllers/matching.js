import database from '@react-native-firebase/database';
import { getUser } from '../models/User.js';
import { getPreference } from '../models/Preference.js';

/*
    Returns a map of users that is sorted based upon their selected preferences.
    Order is based upon how many of the prequisites are similar to the parameter uid
    of that user.  
*/
export async function findUsers(uid) {

    let prefRef = database().ref('preferences')
    let profRef = database().ref('profiles')

    let userPreferences = await getPreference(uid)

    // Access preferences value and turn it into an object to iterate through
    let prefSnapshot = await prefRef.once('value')
    let prefSnapshotItem = prefSnapshot.val()
    let prefSnapshotKeys = Object.keys(prefSnapshotItem)

    // Access profiles and turn it into an object to iterate through
    let profSnapshot = await profRef.once('value')
    let profSnapshotItem = profSnapshot.val()
    // let profSnapshotKeys = Object.keys(profSnapshotItem)

    let prefArray = []

    // TODO: Iterate through the entire list. Only show users who are the opposite user type.
    // Otherwise, the other preference settings are only used for ordering which
    // users get the highest priority 
    prefSnapshotKeys.map((key) => {

        // Ignore out own uid when iterating through the list
        // if (key !== uid) {
            prefArray.push(key)
        // }
    })

    let snapshotMap = new Map()

    // Might be better to do a for each loop. Remember that one CSE 373 assignment? lol. 
    for (let i = 0; i <= prefArray.length - 1; i++) {
        let prefKey = prefArray[i]
        snapshotMap.set(prefKey, profSnapshotItem[prefKey])
    }

    let usersArray = Array.from(snapshotMap)

    return usersArray
}