// setTimeout(functionreference,delay,parameter)
function f1(){
    setTimeout(()=>{
        console.log("Execute after 3 Second")
    },3000)
}

f1();