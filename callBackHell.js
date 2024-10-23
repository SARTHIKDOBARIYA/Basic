function func1(call){
    setTimeout(()=>{
        console.log("func1")
        call();
    },3000)
}

function func2(call){
    setTimeout(()=>{
        console.log("func2")
        call();
    },3000)
}

function func3(call){
    setTimeout(()=>{
        console.log("func3")
        call()
    },3000)
}

func1(()=>{
    func2(()=>{
        func3(()=>{
            console.log("Function is called")
        })
    })
})
