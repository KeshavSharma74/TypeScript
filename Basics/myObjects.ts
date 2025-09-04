const user = {
    username:"keshavsharma",
    email:"keshavsharma12345",
    isActive:true
}

function createUse({name:string,isPaid:boolean}){
    
}

function createUser():{name:string,isPaid:boolean,
}{
    return {name:"keshav",isPaid:true}
}

type User = {
    name:string,
    email:string,
    isVerified:boolean,
}

type myString=string;

function createUsers(user:User):User{
    return {name:"Keshav Sharma",email:"keshavsharma9472@gmail.com",isVerified:true}
}

createUsers({name:"Keshav Sharma",email:"keshavsharma9472@gmail.com",isVerified:true})


type Person={
    readonly _id:string,
    name:string,
    email:string,
    creditCardDetails?:string,
}

const  keshav :Person={
    _id:"1234567654321",
    name:"Keshav Sharma",
    email:"keshavsharma9472@gmail.com",
}

// keshav._id="23456789876"
keshav.name="rthtrewertytre"