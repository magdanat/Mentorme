import database from '@react-native-firebase/database';

export async function createPreference(preferenceObject) {
    var newPreferenceKey =  database().ref().child('preferences').push().key

    console.log(preferenceObject)

    // var idType
    var preferenceData = {
        preferenceID: newPreferenceKey,
        stage: preferenceObject.stage,
        direction: preferenceObject.direction,
        relationship: preferenceObject.relationship,
        userType: preferenceObject.userType,
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
    return snapshotItem;
}