let a = 23
const b = 30
// var c = 12
// this is global scope

if(true){
    let a = 300
    const b = 400
    // console.log("INNER: ", a)//this is global scope all the elemnts are having in {}
}

// console.log(a)
// console.log(b)
// console.log(c)

//*********************************** */

// function one(){
//     const username = "sahil"
//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }
//     console.log(website)
//     two()
// }
// one()

if (true){
    const username = "sahil"
    if(username === "sahil"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)


//****************************interesteng**************************** */

function addone(num){
    return num + 1
}
addone(5)   

const addTwo = function(num){
    return  num + 2
}
addTwo(5)