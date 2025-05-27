//singletons
// Object.create()

// literals

const mySym = Symbol("key1")
const JsUser = {
    name: "sahil",
    "full name": "sahil Shaikh",
    age:21,
    [mySym]:"mykey1",//[] are use to acess the symbol
    email:"sahil@gmail.com",
    location: "Mumbai",
    isLoggin: true,
    lastLogginDays: ["Monday", "Tuesday"]

}

// console.log(JsUser.name)
// console.log(JsUser["age"])
// // console.log(JsUser.full name)//this type  object value can't by acessible using this syntax
// console.log(JsUser["full name"])
console.log(JsUser[mySym]) //symbol also access uning this syntax
// //impo question for interview how to acess symmbol in a object value

JsUser.email = "sahil@chaatgpt.com" //use to change the value of object
// Object.freeze(JsUser)//use to freez the object cant be change the values after freeez
// JsUser.email = "sah@google.com"//can't be able to chaange the value
// console.log(JsUser)


//add function into onjects


JsUser.greeting = function(){
    console.log("Hello Js User")
}

//string interpolation
JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
