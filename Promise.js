const promise1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1)
    },2001);
})

const promise2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(2)
    },3000);
})

const promise3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject(3)
    },500);
})


// console.time("start: ");
// promise1.then((a)=>{
//     console.log(a);
// })
// .catch((e)=>{
//     console.log(e);
// })

// promise2.then((a)=>{
//     console.log(a);
// })
// .catch((e)=>{
//     console.log(e);
// })

// promise3.then((a)=>{
//     console.log(a);
// })
// .catch((e)=>{
//     console.log(e);
// })

// console.timeEnd("start: ");

const fun=async function p1(){

    try{
    // console.time("start: ")
    // const a=await promise1
    // console.log(a);

    // const b=await promise2
    // console.log(b);

    // const c=await promise3
    // console.log(c);
    // console.timeEnd("start: ")

    const l=await Promise.allSettled([promise1,promise2,promise3])
    console.log('++++++++++',l);

    }

    catch(e){
        console.log(e);
    }

    finally{
        console.log("running");
    }
} 
fun()


// Promise chaining

// console.time("start: ");
// promise1.then((a)=>{
//     console.log(a);
//     return promise2
// })
// .then((b)=>{
//     console.log(b);
//     return promise3
// })
// .then((c)=>{
//     console.log(c);
//     console.timeEnd("start: ")
// })
// .catch((e)=>{
//     console.log(e);
// })

Promise.allSettled([promise1,promise2,promise3]).then((a)=>{
    console.log("running a:",a);
    console.log("running b:",b);
    console.log("running c:",c);

})
.catch((e)=>{
    console.log(e);
})


//allsettled,all

