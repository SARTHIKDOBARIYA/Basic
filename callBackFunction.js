// function Sum(num1,num2){
//     return num1+num2
// }
// num=[23,34,45,56]
// const red=num.reduce(Sum,0)
// console.log("Sum is: ",red)
//
// //other example
// function func1(num1,num2,call){
//     console.log("This is a Func1")
//     // return num1+num2
//     call();
// }
//
// function func2(name){
//     console.log("This is a func2")
//     // console.log(`${name}`)
// }
//
// func1(12,23,func2)
//
// // third example
const number=[12,23,34,45,67,89]

function mul(num){
    return num*num
}

let squareNumber=[]
for(let i=0;i<number.length;i++) {
    squareNumber.push(number[i]*number[i])
}
console.log(squareNumber)
//
//
const multi=number.map(mul);
console.log(multi)
//
// // Define the array
// const numbers = [12, 23, 34, 45, 67, 79];
//
// // Define the function that takes an array and returns a new array with each element multiplied
// function multiplyArray(arr) {
//     return arr.map(num => num * num);
// }
//
// // Call the function with the array
// const multipliedNumbers = multiplyArray(numbers);
//
// // Print the result
// console.log(multipliedNumbers); // Output: [144, 529, 1156, 2025, 4489, 7921]
