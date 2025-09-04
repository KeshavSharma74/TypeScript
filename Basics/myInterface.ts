interface UserI{
    readonly dbId:number,
    email:string,
    userId:string,
    googleId?:string,
    startTrail():string
}

interface UserI{
    github:string
}

interface AdminI extends UserI{
    role:"admin"|"student"|"teacher"
}

const keshav123:AdminI = {dbId:12345678,email:"hgfds",userId:"werghj",
    github:"uytrewq",
    role:"admin",
    startTrail: () =>{
        return "trail started"
    }
}