//function Hoisting

sum(5,5)

function sum(a,b){
    console.log(a+b);
}


// Hoisting is not working because function hoisting is work only  function function_name(){}

// method1:                                             // it is working but it is not call Hoisting
sum1(5,6)                                               // (function sum1(a,b){
                                                        //        console.log(a+b);
(function sum1(a,b){                                    //    })
    console.log(a+b);                                   
})                                                      // sum1(5,6)


//method 2:

sum2(5,6)                                               // const sum=(a,b)=>{
                                                        //        console.log(a+b);
const sum=(a,b)=>{                                      //        }
    console.log(a+b);                                   //sum(7,8)
}


