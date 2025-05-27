const  myArr = [0,1,2,3,4,5]
const myHeroes = ["SpiderMan","SuperMan"];

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[1])
// console.log(typeof myArr2)

//Array Methods



// myArr.push(7)//use to push the element on end
// myArr.pop()//pop the element from end
// myArr.unshift(9)//push the element on beginning
// myArr.shift()//pop the element from beginning

// console.log(myArr.includes(9))//use to chick given value are present or not

// console.log(myArr.indexOf(9))//use to check the index of element if the index are not present in the array then this will return -14
// console.log(myArr.indexOf(1))//0 give on which index the elemtn is present

const myArr3 = myArr.join()//Adds the elemtnts of array into the string and convert into string

// console.log(myArr)
// console.log(myArr3)
// console.log(typeof myArr3)


//slice() and splice()

// console.log("A", myArr)

const myn1 = myArr.slice(1, 3)//copy the element from myArr and return the o/p from 1 to 3 and can't include 3

console.log(myn1);
// console.log("B", myArr)

const myn2 = myArr.splice(1, 3)//in the splice include 3 means include the reach and this wil change the original array 
// console.log("C", myArr)
console.log(myn2)

