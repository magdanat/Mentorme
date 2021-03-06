import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


// Check if uid2 exists in uid's list
export async function checkProfileList(uid1, uid2) {
    let ref = database().ref('lists/' + uid1 + '/' + uid2)
    let snapshot = await ref.once('value')
    let snapshotItem = snapshot.val()
    if (snapshotItem) {
        return true
    }
    return false
}

// Gets given uid1's user list from database
export async function getUserList(uid) {
    let ref = database().ref('lists/' + uid) 
    let snapshot = await ref.once('value')
    let snapshotItem = snapshot.val()

    console.log(snapshotItem)

    let itemKeys = Object.keys(snapshotItem)

    console.log(itemKeys)

    let usersArray = []

    itemKeys.map((key) => {
        

        if (snapshotItem[key]) {
            usersArray.push(key)
        }
    })

    return usersArray
}

/*
    1. Check if user exists in list
*/
export async function toggleFavorite(uid1, uid2, favorited) {
    let updates = {}

    console.log("Toggling favorite...")
    // User doesn't exist yet
    // Add to list

    console.log(favorited)

    if (favorited === undefined || favorited === null) {
        updates['lists/' + uid1 + '/' + uid2] = true

        database()
            .ref()
            .update(updates)
            .then(() => {
                console.log("Sucessfully added new list item.")
            }).catch((e) => {
                console.log("Error adding new list item")
                console.log(e)
            })

        return true

    // List item already exists. Toggle result
    }  else {
        let newFavorited = !favorited

        updates['lists/' + uid1 + '/' + uid2] = newFavorited

        database()
            .ref()
            .update(updates)
            .then(() => {
                console.log("Sucessfully toggled list item in database")
            }).catch((e) => {
                console.log("Error toggling list item boolean value.")
                console.log(e)
            })

        return newFavorited
    }
}