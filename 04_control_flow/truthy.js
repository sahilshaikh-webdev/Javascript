const userEmail = []

if(userEmail){
    console.log("Got user email")
}
else{
    console.log("not have  user email")
}


//false values

// false, 0, -0, BigInt 0n, null, undefined, NaN, ""

//truthy values

//"0", 'false', " ", [], {}, function(){}


// const userEmail = []

// if( userEmail.length === 0 ){
//     console.log("Array is empty")
// }

const myObject = {}
if(Object.keys(myObject).length === 0){
    console.log("This is empty object")
}

//false = 0 //o/p:- true
// false = ''// o/p:- true
//0 = '' // true

//Nullish Coalescing Operator (??): null undefined*********************************************

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10
// val1 = undefined ?? 10

val1 = undefined ?? 10 ?? 20
console.log(val1)


//Ternery Operator*****************************************************************************

//condition ? true: false

const iceTeePrice = 100
iceTeePrice <=80 ? console.log("less than 80"): console.log("more than 80")





