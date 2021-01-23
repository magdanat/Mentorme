import database from '@react-native-firebase/database';

// TODO: ATM only returns a map of all mentors in the database.
// In the future, should act as algorithm for finding all mentors that would
// be of the greatest fit for a 
export async function findMentors() {
    // Fetching database keys from Firebase
    let ref = database().ref('profiles/mentors')
    let snapshot = await ref.once('value')
    let snapshotItem = snapshot.val()
    let snapshotKeys = Object.keys(snapshotItem)

    let snapshotMap = new Map()

    // Insert object items into map to return object
    // as a map
    snapshotKeys.map((key) => {
        snapshotMap.set((key), snapshotItem[key])
    })

    return snapshotMap
}

export async function findMentees() {
    let ref = database().ref('profiles/mentees')
    let snapshot = await ref.once('value')
    let snapshotItem = snapshot.val()
    let snapshotKeys = Object.keys(snapshotItem)

    let snapshotMap = new Map()

    // Insert object items into map to return object
    // as a map
    snapshotKeys.map((key) => {
        snapshotMap.set((key), snapshotItem[key])
    })

    return snapshotMap
}