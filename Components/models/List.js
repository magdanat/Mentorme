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

/* Accepts two parameter
*/
export async function addToList(uid1, uid2) {
    var updates = {}

    updates['lists/' + uid1 + '/' + uid2] = true

    database()
        .ref()
        .update(updates)
        .then(() => {
            console.log("Successfully added list.")
        }).catch((e) => {
            console.log(e)
            return false
        })

    return true
}

// export async function removeFromList(uid1, uid2) {
//     var updates = {}

//     database()
//         .ref('lists/' + uid1)
//         .set(() => {
//             updates[uid2] = null
//         }).then(() => {
//             console.log("Remove successful")
//         }).catch((e) => {
//             console.log(e)
//         })
// }