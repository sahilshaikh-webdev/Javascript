const user = {
    username: "sahil",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);//this keyword refer the current contexts
        // console.log(this)

    }
}
// user.welcomeMessage()
// user.username = "sallu"
// user.welcomeMessage()

// console.log(th

function  chai(){
    let username = "sahil"
    console.log(this.username)
}

chai()

// const chai = function () {
//     let username = "sahil"
//     console.log(this.username)
// }

// chai()


// const chai =  () => {
//     let username = "sahil"
//     console.log (this.username)
// }

// chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // this is the basic arrow function 


//one more optioon to use the arrow fucntion which we can say implicite returned 
// in the implicit returned function we can't use curly braces  and return 


// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )// when we can use parenthesis () then can't be write return

const addTwo = (num1, num2) => ({username: "sahil"})//use parethesis () for the objects

console.log(addTwo(3, 4))

