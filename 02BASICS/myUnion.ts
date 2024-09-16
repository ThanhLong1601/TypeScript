let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let long: User | Admin = { name: "long", id: 123 }

long = { username: "hc", id: 123 }

// function getDbId(id: number | string) {
//     // making some API calls
//     console.log(`DB id is : ${id}`);
// }

getDbId(3)
getDbId("3")


function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
}


const data: number[] = [1,2,3]
const data2: string[] = ["1", "2", "3"]
const data3: (string|number|boolean)[] = ["1","2",3,true]

let seat: "window" | "aisle" | "midle"

seat = "window"
// seat = "crew"

export {}