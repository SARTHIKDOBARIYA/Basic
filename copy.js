const originalObject = {
    name: 'Sarthik',
    age: 20,
    address: {
        city: 'New York',
        country: {
            start:'30 June',
            end:'30 April'
        }
    }
};

// Deep copy using JSON methods
const deepCopyObject =
    JSON.parse(JSON.stringify(originalObject));

// Modifying the originalObject
// originalObject.name = 'John';
// originalObject.address.city = 'Los Angeles';

deepCopyObject.name='xyz'
console.log("Deep copy: ",deepCopyObject);
console.log("original: ",originalObject);

// const shallowcopyObject=originalObject

// shallowcopyObject.name="ABC"
// console.log("shallow copy: ",shallowcopyObject);
// console.log("original copy: ",originalObject);

// const player={
//     name:'xyz',
//     run:20000,
//     country:'India'
// }

// // const copyPlayer=player
// const newobject=originalObject

// // console.log(copyPlayer);
// console.log("shallow copy: ",newobject);