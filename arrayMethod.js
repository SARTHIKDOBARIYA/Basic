// const name=["Sarthik","Jeel","Krushil"]
// console.log(name)
//
// //length of array
// console.log("length of name array is: ",name.length)
//
// // convert array into String
// console.log("Array to String: ",name.toString())
//
// // get indexed element from an array
// console.log("2nd element of the array : ",name.at(1))
//
// //all array element is joined
const fruit=['banana','Apple','Kiwi']
console.log("join: ",fruit.join(''))   // join method join all array element into String

//remove last element from the array
// fruit.pop();
// console.log("pop: ",fruit)

//add element in array at the end
// fruit.push('Orange')
// console.log("push: ",fruit)

//remove the first array element -> shift
// fruit.shift()
// console.log("shift: ",fruit)

//add new element in array at the beginning -> unshift
// fruit.unshift("Mango")
// console.log("unshift: ",fruit)

//method search an array of element value and return its position
// console.log(fruit.indexOf("Apple"))
    // if item is not found then it return -1

//check if an element is present in the array or not
console.log("include: ",fruit.includes("Kiwi"))

//check last index of element
console.log(fruit.lastIndexOf("Kiwi"))   // lastIndexOf(searchElement, fromIndex)
    // it gives a last index given element in array.(if element is not their then return -1)

//Array.findIndex
    // it is used to find the index of the first element that passed in a condition.
// const number=[34,23,54,21,65]
// const large=(number)=>number>43
// console.log(number.findIndex(large))

//Array.find
    // it is use for to find some specific first element into an array .
// const  ar=[23,34,43,1,2,34,21]
// const found=ar.find((ele)=>ele>30)
// console.log("find: ",found)

//Array.Splice
    //it is add/replace/remove the content in given object in specific location
// const fruits=["banana","Apple","Kiwi","Mango"]
// fruits.splice(2,1,"Orange","Grapes")  // (index,deletecount,item1,...)
// console.log(fruits)

//Array.slice
    // it copy some portion of the array into new array. It is not modified existing array
// const newfruit=fruits.slice(2,5)
// console.log(newfruit)

//Array.concat
    // it combine two or more array,it does not make any modification on existing array
// const a=[1,2,3,4,5,6]
// const b=[7,8,9,0,3,4]
// console.log(a.concat(b))

//Array.reverse
    // it reverse existing array and store into new array
// const ar1=[1,2,3,4,5,6]
// const reverse=ar1.reverse();
// console.log(reverse)

//Array.split
    // it is split the words or characters from the string and store them into a new array.
const sentence="The Quick brown Fox jumping over the lazy Dog"
console.log(sentence.split(' '))

//Array.isArray
    // check given value is array type or not
// const a=[1,2,3,4,"xyz",true]
// console.log(Array.isArray(a))

//Array.sort
    // it is used to Sort the Array
// const sorting=[12,45,75,23,32]
// console.log(sorting.sort())

//for Each
    // forEach() method calls a function for each element in an array.
// const number=[12,23,34,45,56]
// number.forEach(myfunction);

// function myfunction(num){
//     // console.log(num)
// }

//Array.map
    // It is create a new array that contain a result of callback function performed on every element.(X * 2)
// const person=[
//     {key:1,value:200},
//     {key:2,value: 250}
// ]
// person.map(getvalue)
//
// function getvalue(val){
//     console.log(val.key,val.value,val.key*val.value)
// }

// Array.filter
    // it is used to apply any kind of filter in the array and store the
// const word=["give","me","some","words","listen","hey"]

// const filterWord=word.filter((x)=>x.length>3)
// console.log(filterWord)

//Array.reduce
    // The final result of running the reducer across all elements of the array is a single value./
// const sum=[12,233,455,643,545]
// const result=sum.reduce((acc,currVal)=>{
//     console.log(`acc: ${acc} and currVal: ${currVal}`)
//     return acc + currVal
// },0)

// console.log(`Sum is: ${result}`)

// console.log(...sum)