// Represents a user account in the database 
export class User {
    constructor(id, name, fName, lName, dateOfBirth, uwNetID, statusInUW, stage) {
        this.state = {
            id: id
        }
    }

    // Returns the full name of the user
    fullName() {
        return this.state.fName + " " + this.state.lName
    }
}