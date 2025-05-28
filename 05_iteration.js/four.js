const myObjects = {
    Js: "JavaScript",
    rb: "ruby",
    swift: "swift by apple",
    cpp: "C++"
}

for (const key in myObjects) {
//    console.log(`${key} is shourtcut for ${myObjects[key]}`)
}

//******************for-in loop on arrays**** */

const programes = ["js", "py", "cpp", "rb"]

for (const key in programes) {
    // console.log(programes[key])   
}


//********************for-in loop on map() */

// const map = new Map()

// map.set("IN", "India")
// map.set("USA", "United State of America")
// map.set("Fr", "France")
// map.set("IN", "India")

// for (const key in map) {
//     console.log(key)
// }// for in loop cannot apply on map()

