import database from '@react-native-firebase/database';

export async function createPreference(uid, preferenceObject, userType) {
    var newPreferenceKey =  database().ref().child('preferences').push().key

    console.log(preferenceObject)

    // var idType
    // var preferenceData = {
        
    // }

    // var updates = {}

    // updates['preferences/' + uid]


}