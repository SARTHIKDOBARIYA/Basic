const interview=(name)=>{
    return function (topic) {
        if(name === "sarthik"){
            console.log(`hi ${name} pleas explain ${topic}`);
        }
        else{
            console.log(`welcome!`);
        }
    }
}

interview("XYZ")()