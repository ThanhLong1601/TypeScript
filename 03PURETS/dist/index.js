"use strict";
// class User {
//     public email: string
//     private name: string
//     readonly city: string = ""
//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Rome";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(coursenum) {
        if (coursenum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = coursenum;
    }
}
const long = new User("long@mail.com", "Long");
// long.city = "London"
// long.deleteToken()
