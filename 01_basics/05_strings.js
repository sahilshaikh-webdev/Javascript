const name = "sahil";

const repoCount = 50;

// console.log(name + repoCount + "value")//this is not a good pratice


// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)//this is another type which is backticks how we can add the words withh string add this is the good practice

const gameName = new String("sahil_ha_com")

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length)

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("l"));

// console.log(gameName.substring(0, 4))

// console.log(gameName.slice(-1, 7))

const newStringOne = "   sahil   ";

// console.log(newStringOne);
// console.log(newStringOne.trim());//use to ignor the unnecessary spaces

const url = "https://sahil.com/sahil%20shaikh"

// console.log(url.replace("%20", "_"))//use to replace any thing in a line

// console.log(url.includes(('sahil')))// using to check available strings

// console.log(gameName.split('_'))


// let str = "JavaScript is cool, and JavaScript is powerful.";
// console.log(str.lastIndexOf('JavaScript'))
// console.log(str.lastIndexOf('JavaScript', 25));

let text = "I am Student";
// console.log(text.includes("am"));
// console.log(text.startsWith("I"))


// console.log(text.slice(2, -5));
// console.log(text.substring(2, 7));

let str2 = "Hello, JavaScript!";
// console.log(str2.slice(7, 17)); // JavaScript
// console.log(str2.substring(7, 17)); // JavaScript
// console.log(str2.substr(5, 9)); // JavaScript

let str3 = "sahil";
// console.log(str3.toUpperCase("sahil"))

let greeting = " Hello World! ";

// console.log(greeting)
// console.log(greeting.trim())

const number = "123456789";

const lastNumber = number.slice(-4)
// console.log(lastNumber)

const maskedNumber = lastNumber.padStart(number.length, "*")
// console.log(maskedNumber)

const name1 = "sahil"
// console.log(name1.padEnd(8, "."))

const paragraph = "Halima osman is better than gonca osman";
// console.log(paragraph.replace("better", "good"))

const regex = /Osman/i;
// console.log(paragraph.replace(regex, "alauddin"))

let firstName = "Sahil";
let lastName = "Shaikh";

console.log(firstName.concat("_",lastName))

let names = "Sahil, Ahmad, Faizan";
// console.log(names.split(","))

let example = "Hello";
// console.log(example.charAt(1))
// console.log(example.charCodeAt(4))
// console.log(example.at(-2))