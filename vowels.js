function User(username,loginCount,isLoggedIn){
    this.username=username     //variable = this value is you passed
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn;

     return this
}

const userOne=User("Sarthik",890,true)
const userTwo=User("XYZ",23,false)
console.log(userOne)