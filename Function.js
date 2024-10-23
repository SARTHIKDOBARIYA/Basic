function func1(num1,num2,call){
    console.log("This is a Func1")
    // return num1+num2
    call();
}

function func2(name){
    console.log("This is a func2")
    // console.log(`${name}`)
}


function User(username,loginCount,isLoggedIn){
    this.username=username     //variable = this value is you passed
}


// HighOrder Function 
function func(){
    return function func3(){

    }
}

func()()    
// or

const f=func("hi")
f("hii")