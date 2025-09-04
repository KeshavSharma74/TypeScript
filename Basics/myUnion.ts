type user1={
    name:string,
    email:string,
}

type admin1={
    username:string,
    email:string,
}

const keshav1:user1|admin1={
    username:"keshav",
    email:"gfds"
}

function func1(id:number|string){
    
    if(typeof id==="string"){
        id.toLowerCase();
    }
}

const data:number[]=[1,2,3,54,5,6];
const data1:string[]=["gfds","hgfds","iuytrd","uhygfd"];
const data2:number[]|string[]=[2,3,4,5];
const data3:(string | number | boolean)[]=["1","2",3,true];
