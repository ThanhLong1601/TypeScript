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

    protected _courseCount = 1

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

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4   
    }
}


const long = new User("long@mail.com", "Long")

// long.city = "London"

// long.deleteToken()

/*
- Protected có thể sử dụng trong cùng 1 class hoặc class kế thừa nó
- Private chỉ được sử dụng trong cùng 1 class
- Public được sử dụng ở cả trong và ngoài class
 */