number=[12,23,34,45,56,67,78,89]

// get the value
for (const value of number) {
    console.log(value)
}

//get the index
for (const Key in number) {
    console.log(Key)
}

const object={
    a:1,
    b:2,
    c:3
}

for (const Key in object) {
    console.log(Key)
}

//instead of for in
for (const key of Object.keys(object)) {
    console.log(key)
}