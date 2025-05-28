const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter)// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// } this value will be come false if we change the value of PI in Math object PI value are constant and this is not changable

// console.log(Math.PI)
// Math.PI = 5;
// console.log(Math.PI)// can't be override pi value

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    OrderChai: function(){
        console.log("chai nahi bani")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name" , {
    // writable: false,
    enumerable: false, //this will stop the itratable of chai object
    // configurable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function')
    console.log(`${key} : ${value}`);
}