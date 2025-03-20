

//Data Types
//1. primitive and 2. non-primitive 

//1.primitive


let string = "string";//string data types

let num = 1234;//number data type

let boolean = true;//boolean data types

let bigint = 12345678901234567890123456789n;//bigInt data type

let n = null;//null data type

let un = undefined;//undefined data type

let sym = Symbol("unique");


//2.non- primitive


const student = {
    name:"sahil",
    age: 21,
    isStudent: true,
    class: "TYcs",
    div:"A"
};//object

let customer = ["name", "ID","age"];//array

function greet(){
    console.log("Hello world");

};//function


let today = new Date();//Date

let regex = /[a-z]/g;



console.log(typeof string)
console.log(typeof num)
console.log(typeof boolean)
console.log(typeof bigint)
console.log(typeof n)
console.log(typeof un)
console.log(typeof sym)
console.log(typeof student)
console.log(typeof customer)
console.log(typeof function(){})
console.log(typeof today);
console.log(typeof regex)
