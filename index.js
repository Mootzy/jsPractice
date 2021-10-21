let isTrue = false;

isTrue ? console.log("it's true! ") : console.log("it's false!");

function getTotalSum(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let arr = [12,12,12];

let fiat = {
    f_name:"fiat",
    l_name:"wallaace",
    age:27,
    greeting:"hello",
    fullName: function (){
        return "My full name is " + this.f_name + " " + this.l_name;
    },
    sayHello: function (name){
        return "hello, " + name + "!";
    }
};

console.log(fiat.age);

let totalSum = getTotalSum(arr);
console.log(totalSum.toString());

//let newCar = new car("mazda", 70, "desel");
//newCar.drive();
console.log(fiat.fullName());
console.log(fiat.sayHello("james"));

let dArr = [[1,2,3],[4,5,6],[7,8,9]];

console.log("3d arr length: " + dArr.length);

function print3dArray(arr){
    let finished = "";
    for(let i = 0; i < arr.length; i++){
        for (let j = i; j < i; j++){
            finished += arr[i][j];
        }
    }
}

//console.log(print3dArray(dArr)); ?  ?
//demonstrating capacity for javascript to justify and coerce the types of this obj.
const obj = {height: 10, width: 10};
const area = obj.dataSpelledWrong * obj.width; // result's in NaN instead of telling us the error, although IDE seems to acknowledge.
console.log(area);
// should be obj.height * obj.width;

console.log("" == 0 + " this is the type coersion of == "); // demonstration of type coersion.

console.log("true" === "true");// + "this is true === true, which is true! "

//interfaces: only useable with typescript!
// interface Test {
//     name: string;
//     age: number;
// }
// const test: test

let person = 'user';
console.log(person instanceof String); // this is false, instanceof performs Type coercion if there is no declared type,
                                        // -> this is of Type: Object. and not String.

//for...of loop in js, iterating over an array, essentilly an enhanced for loop
let array = [12,13,14];
for (const index of array){
    console.log(index);
}

//creating a map obj in js
const iterable = new Map([['a',1],['b',2],['c',3]]);

//iterating over entirety of map, printing ['a',1] etc.
for (const entry of iterable){
    console.log(entry);
}

//iterating over values of map, prints 1,2,3
for(const [key,value] of iterable){
    console.log(value);
}

//IIFE in javascript, anon function to protect variabe's and scope.
(function (){
    let x = 20;
    let y = 20;
    var answer = x + y;
    console.log(answer);
})();
//promise syntax
let myPromise = new Promise(function (myResolve,myReject){

    myResolve();
    myReject();

    myPromise.then(
        function (value){console.log(value)},
        function (error){console.log(error)}
        );
});
//set interval syntax
setInterval(function (n1,n2) {let sum = n1 + n2; return sum}, 1000);


// let add = function (x,y){
//     return x + y;
// }
function add(x,y){
    return x + y;
}

function returnAdd(add){
    return add(10 + 20);
}
console.log("\n demonstrating arrow functions, both equate to the same value");
console.log(add(10,20));

let add1 = (x,y) => x+y;

console.log(add1(10,20));
console.log("\n This is the result of console.log(typeof add1): ")
console.log(typeof add1);

console.log("\n console.log(add1 instanceof Function) result: ");
console.log(add1 instanceof Function);

console.log("Code to sort array in descending order: ");
let numbers = [4,2,6];
console.log("original array: " + numbers);
numbers.sort(function (a,b){
    return b - a;
});


console.log(numbers);


function download(url, callback) {
    setTimeout(() => {
        console.log('Download() start, asynch');
        // script to download the picture here
        console.log(`Downloading ${url} ...`);

        // process the picture once it is completed
        callback(url);
    }, 3000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://wwww.javascripttutorial.net/pic.jpg';

download(url, process);

//console.log(returnAdd());

function map(array, callback){
    console.log('map() starts');
    const mappedArray = [];
    for (const item of array){ mappedArray.push(callback(item));}

        console.log('map() completed');
        return mappedArray
}

function greet(name){
    console.log('greet() called');
    return `Hello, ${name}!`;
}

const persons = ['Cristina'];

map(persons, greet);