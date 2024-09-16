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

    private _courseCount = 1

    readonly city: string = "Rome"
    constructor(
        public email: string,
        private name: string,
        // private userId: string
    ) {
    }

    private deleteToken() {
        console.log("Token deleted");
    }

    get getAppleEmail(): string {
        return `apple ${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(coursenum) {
        if (coursenum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = coursenum
    }
}


const long = new User("long@mail.com", "Long")

// long.city = "London"

// long.deleteToken()