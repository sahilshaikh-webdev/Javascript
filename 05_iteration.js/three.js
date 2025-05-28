//***************** for-of loop **********/
// ["", "", ""]
// [{},{},{}]



// const arr = [1,2,3,4]

// for (const num of arr) {
//     console.log(`value are ${num}`)
// }

const greeting = "Hello Sir"

for(const greet of greeting){
    // console.log(`Value are: ${greet}`)
}



//***************Map()*********** */

const map = new Map()

map.set("IN", "India")
map.set("USA", "United State of America")
map.set("Fr", "France")
map.set("IN", "India")// 

// console.log(map);


// Apply the loops on map()

for (const [key, value] of map) {
    // console.log(key, ":-", value)
}

//*****************for-of loop on objects ******/

const myObjects = {
    name1: "sahil",
    name2: "aman",
    name3: "afzal"
}

// for (const [key, Value] of myObjects) {
//     console.log(key, ":-", Value)
// } //this syntax are not vaalid for objects
