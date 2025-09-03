function addTwo(num:number){
    return num+2
}

addTwo(5);

function getUpper(val:string){
    return val.toUpperCase();
}

getUpper("keshav");

function signUpUser(name:string,email:string,isPaid:boolean){}

signUpUser("keshav","wdfg",false);

function login(name:string,email:string,isPaid:boolean=false){

}
login("keshav","sharma.com");


// function getValue(myVal:number):boolean{
//     if(myVal>5){
//         return true
//     }
//     return "200 ok"
// }

const arrowFunction = (s:string):string =>{
    return "200"
}

const heros = ["keshav" ,"wertyuytrew","werty"];

const ans = heros.map( (hero)=>{
    console.log(hero);
} )

const handleVoidFunction = (errorMessage:string):void =>{
    
}