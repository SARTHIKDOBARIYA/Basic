try {
    const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(data)

    data.then((data) => {
        console.log("Data: ",data)
        return data.json()
    })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
            throw err
        })
}
catch(err){
    console.log("Error: ",err);
}
// async function FetchApi(){
//     try {
//         const data = await fetch("https://jsonplaceholder.typicode.com/todos/4")
//         console.log(await data.json())
//     }
//     catch (err){
//         console.log(err)
//     }
// }
//
// FetchApi()

// const newuser={
//     name:"Sarthik",
//     job:"Intership"
// }

// async function FetchApi(){
//     try {
//         const res = await fetch("https://reqres.in/api/users",{
//             method:"POST",
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify(newuser)
//         })
//         const data = await res.json();
//         if(!res.ok){
//             console.log(data.description)
//             return;
//         }
//         console.log("Add Data: ",data)
//     }
//     catch (err){
//         console.log(err)
//     }
// }
// FetchApi();

// async function FetchApi1(){
//     try {
//         const res = await fetch("https://reqres.in/api/users/39",{
//             method:"PUT",
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 name:"xyz"
//             })
//         })
//         const data = await res.json();

//         if(!res.ok){
//             console.log(data.description)
//             return;
//         }
//         console.log("Update Data",data)
//     }
//     catch (err){
//         console.log(err)
//     }
// }
// FetchApi1();

// async function FetchApi2(){
//     try {
//         const res = await fetch("https://reqres.in/api/users/3", {method:"DELETE"})
//         const data = await res.json();
//         if(!res.ok){
//             console.log(data.description)
//             return;
//         }
//         console.log("delete data",data)
//     }
//     catch (err){
//         console.log(err)
//     }
// }

// FetchApi2();


const newuser = {
    name: "Sarthik",
    email: "Fack@gmail.com"
}

url = 'https://jsonplaceholder.typicode.com/users'


// const data = fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newuser)
// })    
// data.then((response)=>{
//     if(!response.ok){
//         throw new Error('POST is not working')
//     }
//     return response.json()
// })
// .then((data)=>{
//     console.log("============",data);
// })
// .catch((err)=>{
//     console.log(err);
// })


const data=fetch(url,{
    method:'DELETE',
})
data.then((response)=>{
    if(!response.ok){
        throw new Error('Delete not working')
    }
    return response.json()
})
.then((data)=>{
    console.log("===========",data);
})
.catch((err)=>{
    console.log("========",err);
})
