import database from '@react-native-firebase/database';
import { getUser } from '../models/User.js';
import { getProfile } from '../models/Profile.js';

import { getPreference } from '../models/Preference.js';

/*
    Returns a map of users that is sorted based upon their selected preferences.
    Order is based upon how many of the prequisites are similar to the parameter uid
    of that user.  

    How it works:
    1. Comb through preferences, iterate through each key
    2. Check the preferences, if it's a match, increase the score
    3. Once finished checking/assigning scores, sort the datastructure by score
    4. Get the profiles of the users who pass the score threshold, organized by score
    5. If users don't meet a certain threshold, then don't include them at all. 

    Things To Consider: 
    With a large userbase, cannot just load every single profile, can only
    do a certain amount of time. To overcome this, keep track of how many 
    users we want to render through the client-side (ex: everytime we refresh,
    increment the amount and use a multiplier with that amount to get the next
    amount of profiles we want to view)
*/
export async function findUsers(uid) {
    const USER_VALUE = 10 * 1.0;
    const STAGE_VALUE = 10 * 1.0;
    const DIRECTION_VALUE = 10 * 1.0;
    const RELATIONSHIP_VALUE = 10 * 1.0;

    // Threshold to determine whether we include a user in our array 
    const RELEVANCY_SCORE = 0

    function calcScore(preference1, preference2) {
        let score = 0

        function addScore(key) {
            switch(key) {
                case "stage":
                    score += STAGE_VALUE
                    break
                case "userType":
                    score += USER_VALUE
                    break
                case "direction":
                    score += DIRECTION_VALUE
                    break
                case "relationship":
                    score += RELATIONSHIP_VALUE
                    break;
            }
        }

        // Iterate through each key value pair and compare
        // other users' preference with hours
        for (const key2 in preference1) {
            if (preference1[key2] === preference2[key2]) {
                addScore(key2)
            }
        }

        return score
    }

    let prefRef = database().ref('preferences')

    let userPreferences = await getPreference(uid)

    let userPreferenceObject = {
        stage: userPreferences.stage,
        relationship: userPreferences.relationship,
        // Want to check users' preferred user type, not their own
        userType: userPreferences.prefUserType,
        direction: userPreferences.direction,
    }

    // Access preferences value and turn it into an object to iterate through
    let prefSnapshot = await prefRef.once('value')
    let prefSnapshotItem = prefSnapshot.val()
    let prefSnapshotKeys = Object.keys(prefSnapshotItem)

    let prefArray = []

    for (const key of prefSnapshotKeys) {
        let preference = prefSnapshotItem[key]
        // Ignore our own preference
        if (preference.uid !== uid) {

            let otherUserPreferenceObject = {
                stage: preference.stage,
                relationship: preference.relationship,
                userType: preference.userType,
                direction: preference.direction,
            }
            
            let userScore = calcScore(userPreferenceObject, otherUserPreferenceObject)

            if (userScore >= RELEVANCY_SCORE) {
                prefArray.push([key, userScore])
            }
        }
    }

    console.log(prefArray)

    // Sort the array in ascending order
    prefArray.sort(function (a, b) {
        console.log(a[1])
        console.log(b[1])

        if (a[1] < b[1]) {
            return -1
        }
        if (b[1] < a[1]) {
            return 1
        }

        return 0

    })

    let usersArray = []

    // Retrieve each profile
    for (const key in prefArray) {
        const profileUID = prefArray[key][0];

        let profile = await getProfile(profileUID)
        usersArray.push([profileUID, profile])
    }

    return usersArray
}