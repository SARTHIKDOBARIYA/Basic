let person = {
    name: "Sarthik",
    "address one": {
        state: "Gujarat",
        country: "India"
    },
    fn: function () {
        console.log(`my name is ${this.name} and live in ${this.address}`);
    }
};

let key1='address one'
console.log(person[key1]);

let person2 = {
    name: "xyz",
    age: 25,
    qualification: "B.tech"
};
// console.log(Object.assign(person,person2))


let person3 = Object.create(person);
person3.name = "ABC";
person3.age = 23;
console.log(Object.assign(person, person3));

// console.log(person.name);
// console.log(person.address);
// console.log(person.fn);

// Access method

// 1.Dot notation
console.log("Dot notation: ", person2.name);

//2. Bracket Notation
console.log("Bracket: ", person2["name"]);
console.log("Bracket: ", person2["qualification"]);

//3.Accessing keys
console.log("Access key: ", Object.keys(person3));

//4.using value
const key = "age";
console.log("Value: ", person2[key]);

//5.object Destructuring
const { name, age } = person;
console.log("Object: ", name);
console.log("object: ", age);

//6.object entries
console.log("Entries: ", Object.entries(person));

//7.object value
console.log("object value: ", Object.values(person));

//8.for in loop
for (let key in person) {
    console.log(key, person[key]);
}

//9.Using Map object

const personMap = new Map([["name", "Sarthik"], ["age", 20]]);

console.log("Map name: ", personMap.get("name"));
console.log("Map age: ", personMap.get("age"));
