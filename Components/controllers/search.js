import database from '@react-native-firebase/database';

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
export async function search(keywords, userType) {
    let ref = database().ref('profiles/' + userType)
    let snapshot = await ref.once('value')
    let snapshotItem = snapshot.val()
    let snapshotKeys = Object.keys(snapshotItem)

    let snapshotMap = new Map()

    // Iterate through entire list... 
    snapshotKeys.map((key) => {
        console.log(snapshotItem[key])
    })


}