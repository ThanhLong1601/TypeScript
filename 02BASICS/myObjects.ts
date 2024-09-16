// const User = {
//     name: "long",
//     email: "long@sfs.dev",
//     isActive: true
// }

// function createdUser({ name: string, isPaid: boolean }){}

// let newUser = { name: "long", isPaid: false, email: "h@h.com" }

// createdUser(newUser)


// function createdCourse(): {name: string, price: number}{
//     return {name: "typescript", price: 123}
// }


// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }


// function createdUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createdUser({name: "", email: "", isActive: true})


type User = {
    readonly _id : string
    name: string
    email: string
    isActive: boolean,
    credCardDetails?: number
}

let myUser: User = {
    _id: "123456",
    name: "long",
    email: "l@l.com",
    isActive: false
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUser.email = "l@gmail.com"
// myUser._id = "123"







export{}