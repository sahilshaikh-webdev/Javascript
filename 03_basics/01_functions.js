// function sayMyName() {
//     console.log("S")
//     console.log("a")
//     console.log("h")
//     console.log("i")
//     console.log("l")
// }

// sayMyName()

// function addtwoNumbers (number1, number2){
//     console.log(number1+number2)

// }


function addtwoNumbers(number1, number2){
    // let result = number1+number2
    // return result
    return number1+number2
}
// const result  = addtwoNumbers(3, 5)
// console.log("result:", result)

function loginUserMessage (username = "sam"){

    if(!username){
        console.log("Enter thhe username")
        return

    }
    return `${username} just logged in`
}
console.log(loginUserMessage())


// ++++++++++++++++++++++++

// passing the objects in functions


//(...num1)here  this is rest operator 
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 4000, 2000))

const  user = {
    username : "sahil",
    price: 123
}
function handleObjects(anyObjects){
    console.log(`username is ${anyObjects.username} and price is ${anyObjects.price}`)
}
// handleObjects(user) we will also pass the direct objects 

handleObjects({
    username: "sahil",
    price: 999
})

// passing the arrays inn functions

const myNewArray = [400,200,300,100]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200,300,400,500]))