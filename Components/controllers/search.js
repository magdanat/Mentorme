import database from '@react-native-firebase/database';

import { getUser, getUserType, getOppositeUserType } from '../models/User.js';

/*
SEARCHING ALGORITHM:
Current functionality is just doing a simple search, comparing
the input  
*/

// Search will take any input and look through the opposite user type
// directory and go through each user and find if the input matches the
// user's name or contains part of the input. Will return the list of
// names containing similar value to the input. If no user is found, will
// return no user. 
// Input: Entry representing a string value and user type
// Output: List of users
export async function search(keywords, uid) {
    // let user = await getUser(uid)
    // let userType = getUserType(user)
    // let oppositeUserType = getOppositeUserType(user)

    // Mentees
    let ref1 = database().ref('profiles/mentees')
    let snapshot1 = await ref1.once('value')
    let snapshotItem1 = snapshot1.val()
    let snapshotKeys1 = Object.keys(snapshotItem1)

    let ref2 = database().ref('profiles/mentors')
    let snapshot2 = await ref2.once('value')
    let snapshotItem2 = snapshot2.val()
    let snapshotKeys2 = Object.keys(snapshotItem2)



    let snapshotMap = new Map()

    // Iterate through entire list of mentees
    snapshotKeys1.map((key) => {
        let item = snapshotItem1[key]
        let name = snapshotItem1[key].fullName
        let info = snapshotItem1[key].info

        let infoObject = Object.keys(info)

        // Check if name includes key words
        if (name.includes(keywords)) {
            snapshotMap.set((key), snapshotItem1[key])

            // If name doesn't include keywords, look through descriptions
        } else {

            // Iterate through profile descriptions
            infoObject.map((key1) => {
                // Check if description exists or is valid
                if (item[key1]) {
                    if (item[key1].includes(keywords)) {
                        snapshotMap.set((key), snapshotItem1[key])
                    }
                }
            })
        }
    })

    // Iterate through entire list of mentors
    snapshotKeys2.map((key) => {
        let item = snapshotItem2[key]
        let name = snapshotItem2[key].fullName
        let info = snapshotItem2[key].info

        let infoObject = Object.keys(info)

        // Check if name includes key words
        if (name.includes(keywords)) {
            snapshotMap.set((key), snapshotItem2[key])

            // If name doesn't include keywords, look through descriptions
        } else {

            // Iterate through profile descriptions
            infoObject.map((key1) => {
                // Check if description exists or is valid
                if (item[key1]) {
                    if (item[key1].includes(keywords)) {
                        snapshotMap.set((key), snapshotItem2[key])
                    }
                }
            })
        }

    })

    return snapshotMap
}