import database from '@react-native-firebase/database';

export async function createPreference(preferenceObject) {
    var newPreferenceKey =  database().ref().child('preferences').push().key

    console.log(preferenceObject)

    var preferenceData = {
        preferenceID: newPreferenceKey,
        stage: preferenceObject.stage,
        direction: preferenceObject.direction,
        relationship: preferenceObject.relationship,
        userType: preferenceObject.userType,
        prefUserType: preferenceObject.prefUserType,
        uid: preferenceObject.uid,
    }

    console.log(preferenceData)

    var updates = {}

    updates['preferences/' + preferenceObject.uid] = preferenceData
    
    return database().ref().update(updates)
}

export async function getPreference(uid) {
    let ref = database().ref('preferences/' + uid)
    let snapshot = await ref.once('value')
    let snapshotItem = snapshot.val()

    // console.log(snapshotItem)

    return snapshotItem;
}


export async function updatePreference(uid, update) {
    var updates = {} 

    updates['preferences/' + uid + '/direction'] = update.direction
    updates['preferences/' + uid + '/relationship'] = update.relationship
    updates['preferences/' + uid + '/prefUserType'] = update.prefUserType
    updates['preferences/' + uid + '/stage'] = update.stage

    database().ref().update(updates).then(() => {
        console.log("Successful update")
    }).catch((e) => {
        console.log(e)
    })
}