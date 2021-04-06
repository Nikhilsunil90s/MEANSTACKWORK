console.log("Hello, JavaScript!");
// let or const

// var a = 100;
// var s = "Hello, World";
// var arr = [100,200,300,400,500];
// console.log(a , s, arr);
let a = 100;
let b  = "Hello, World";
console.log(a,b);
a = a * 10
const numbers_ = [100,200,300,400,500,600];
numbers_.push(1000);
console.log(numbers_);
const c = 100;
//c = 900;
const person = { //JS Object (JSON)
    name: 'Kevin',
    age: 20,
    getDetails: function(){

    }
}
console.log(person.name);

function getData(a,b){
    console.log(a * b);
    console.log('Getting Data ...');
}
getData(34 , 78);
 

// Fat Arrow Functions --- unnamed
const showData = (a,b) => {
    console.log(a,b);
}

showData(100,'Hundred');











