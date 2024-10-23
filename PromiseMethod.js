// const p1=new Promise(function (resolve,rejected){
//     setTimeout(resolve,500,"Hii")
// })

// const p2=new Promise(function (resolve, reject){
//     setTimeout(reject,133,"Error")
// })

// const p3=new Promise(function (resolve, reject){
//     setTimeout(resolve,132,"Promise executed")
// })

// Promise.race([p1,p2,p3]).then((data)=>{
//     console.log(data)
// })
// .catch(()=>{
//     console.log("ERROR")
// })


// Promise.any([p1,p2,p3]).then((data)=>{
//     console.log(data)
// })       // which iteration is first it is executed.


const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];


// function fetchData(url) {
//     return fetch(url)
//     .then((data)=>data.json())
// }
// async function fetchApi(url){

//     const promise=url.map((link)=>fetchData(link))   // Array of promise

//     try{

//         const [first, ...rest] = await Promise.all(promise)
//         console.log(first);   //rest 
//         console.log("rest:",rest);
//     }
//     catch(err){
//         console.log("Error: ",err);
//     }
// }

// fetchApi(urls)


//using For-Each loop
function FetchData(url) {
    return fetch(url)
    .then((data)=>data.json())
    .catch((err)=>{
        console.log(err);
    })
}

async function fetchApi(urls){

    promise=[]
    urls.forEach(element =>{
        promise.push(FetchData(element))
    });

    try{

        const result=await Promise.all(promise)
        console.log(result);
    }
    catch(err){
        console.log("Error: ",err);
    }

}

fetchApi(urls)