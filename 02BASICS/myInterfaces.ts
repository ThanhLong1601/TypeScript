interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: number
}

interface Admin extends User {
    role: "admin" | "ta" | "leader"
}



const long: Admin = {
    githubToken: 456,
    role: "admin",
    dbId: 456, email: "l@l.com", userId: 123,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "long", off: 40) => {
        return 40 
    }
 }

long.email = "g@dc.com"
// long.dbId = 456

