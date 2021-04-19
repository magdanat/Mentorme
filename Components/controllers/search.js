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

    keywords = keywords.toLowerCase()
    keywords = keywords.replace(/\s/g, "")

    // Mentees
    let ref1 = database().ref('profiles/mentees')
    let snapshot1 = await ref1.once('value')
    let snapshotItem1 = snapshot1.val()
    let snapshotKeys1 = Object.keys(snapshotItem1)

    // Mentors
    let ref2 = database().ref('profiles/mentors')
    let snapshot2 = await ref2.once('value')
    let snapshotItem2 = snapshot2.val()
    let snapshotKeys2 = Object.keys(snapshotItem2)

    let snapshotMap = new Map()

    // Iterate through entire list of mentees
    snapshotKeys1.map((key) => {

        let name = snapshotItem1[key].fullName.toLowerCase()
        let info = snapshotItem1[key].info

        // Check if name includes key words
        if (name.includes(keywords)) {
            console.log("Name found!")

            snapshotMap.set((key), snapshotItem1[key])

            // If name doesn't include keywords, look through descriptions
        } else {
            // Iterate through profile descriptions
            for (const [key2, value] of Object.entries(info)) {

                if (value && value.description) {
                    var alteredValue = value.description.toLowerCase().replace(/\s/g, "")
                    if (alteredValue.includes(keywords)) {
                        snapshotMap.set((key), snapshotItem1[key])
                    }
                }

            }
        }
    })

    console.log(snapshotKeys2)

    // Iterate through entire list of mentors
    snapshotKeys2.map((key) => {

        let name = snapshotItem2[key].fullName.toLowerCase()
        let info = snapshotItem2[key].info
        // Check if name includes key words
        if (name.includes(keywords)) {
            snapshotMap.set((key), snapshotItem2[key])

        // If name doesn't include keywords, look through descriptions
        } else {
            // Iterate through profile descriptions
            for (const [key2, value] of Object.entries(info)) {
                if (value && value.description) {
                    var alteredValue = value.description.toLowerCase().replace(/\s/g, "")
                    if (alteredValue.includes(keywords)) {
                        snapshotMap.set((key), snapshotItem2[key])
                    }
                }
            }
        }

    })

    console.log("Returning snapshotMap...")
    console.log(snapshotMap)

    return snapshotMap
}