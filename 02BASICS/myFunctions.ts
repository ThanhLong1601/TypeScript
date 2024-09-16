function addTwo(num: number): number {
    return num + 2
    // return "hello"
}

function getUpper(val: string) {
    return val.toUpperCase()
}


function sighUpUser (name: string, email: string, isPaid: boolean){}


let loginUser = (name:string, email: string, isPaid: boolean = false) => {}

addTwo(5)
getUpper("long")
sighUpUser("long", "long@sfs.dev", false)
loginUser("l", "l")




// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }


const getHello = (s: string): string => {
    return ""
}

// const heros = ["thor", "spiderman", "ironman"]
const heros = [1,2,3]
heros.map((hero):string => {
    return `hero is ${hero}`
})

export{}