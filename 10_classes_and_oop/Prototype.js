// let myName = "hitesh       "
// let mychannel = "Chai      " 
// console.log(myName.trueLength);



let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.sahil = function(){
    console.log("sahil is present in all objects")
}

Array.prototype.heySahil = function(){
    console.log("hello Sahil")
}

// myHeros.sahil()
// myHeros.heySahil()
// heroPower.heySahil()



// inheritance************************

const user = {
    name: "sahil",
    email: "sahil@gmail.com"
}
const Teacher = {
    makeVedio: true
}

const TeachingSupport = {
    isAvalable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = user //old approach  for inheritance


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)// this is inherit the Teacher in TeahingSupport


let anotherUserName = "ChaiAourCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"hitesh".trueLength()
"icetea".trueLength()

//***this matlab jis matlab jo call karega usko milega ye this kam karta hai */