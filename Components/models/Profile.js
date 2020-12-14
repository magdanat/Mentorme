import database from '@react-native-firebase/database';


// Accepts a user's key ID and retrieves the associated
// profile information with that key and returns it
export async function getProfile(uid, userType) {
    // NOTE: Hardcoded to be mentors atm, switch back to userType
    // so that mentors will get mentees and mentees will get mentors appropriately
    let ref = database().ref('profiles/' + "mentors" + '/' + uid)
    let snapshot = await ref.once('value')
    let snapshotItem = snapshot.val()

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