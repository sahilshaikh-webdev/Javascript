//  primitive data type

//  7 types: String, Number, Boolean, Null, Undefined, BigInt, Symbol

const name = "sahil";  //string

const score = 100; //Number
const isValue = 100.4  //Number

let isBoolean = true; //Boolean

let  outsideTemp = null; //null

let userEmail;  //undefined

const Id = Symbol('123');//Symbol

const anotherId = Symbol('123') //ssumbol

const bigNummber = 62151515515154785655545455555888n

// console.log(Id)
// console.log(anotherId)
// console.log(Id === anotherId);

console.log(typeof name)
console.log(typeof score)
console.log(typeof isValue)
console.log(typeof isBoolean)
console.log(typeof outsideTemp)
console.log(typeof userEmail)
console.log(typeof Id)
console.log(typeof anotherId)
console.log(typeof bigNummber)






//   Reference(Non- Primitive)

//   Array, Object, and Functions


const heros = ["spiderman","superman", "hulk"]; //arrays

let student = {
    name:"sahil",
    age: 22,
    isStudent: true
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof student)
console.log(typeof myFunction)