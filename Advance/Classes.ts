class User{
    email:string
    private name:string
    protected courseCount=1
    // private courseCount=1
    readonly city:string="chandigarh"
    constructor(email:string,name:string){
        this.email=email,
        this.name=name
    }
    get getCount():number{
        return this.courseCount+1;
    }

    // set setCount(courseNum){
    //     this.courseNum=this.courseNum+1
    // }
}

class lord1 extends User{
    changeCourseCount(){
        this.courseCount=5;
    }
}

const keshav= new User("Keshav Sharma","keshavsharma9472@gmail.com");
// keshav.city="bgfds"
