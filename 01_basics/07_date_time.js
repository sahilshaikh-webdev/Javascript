//+++++++++++++++++++++++++++++Dates++++++++++++++++++++++++++++++++++++++++

let myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toJSON())

let myCreateDate = new Date(2025,0,30);
// let myCreateDate = new Date(2025,0,30,13,30,20,);
// let myCreateDate = new Date("2025-01-20");
// let myCreateDate = new Date("02-15-2025");
// let myCreateDate1 = new Date(2025,1,20);
// let myCreateDate2 = new Date(2025,0,10);
// let myCreateDate3 = new Date(2025,3,9);
// let myCreateDate4 = new Date(2025,5,30);
// let myCreateDate5 = new Date(2025,7,30);
// let myCreateDate6 = new Date(2025,8,30);

// console.log(myCreateDate.toDateString())
// console.log(myCreateDate1.toDateString())
// console.log(myCreateDate2.toDateString())
// console.log(myCreateDate3.toDateString())
// console.log(myCreateDate4.toDateString())
// console.log(myCreateDate5.toDateString())
// console.log(myCreateDate6.toDateString())

// console.log(myCreateDate.toLocaleString())


let myTimeStamp = Date.now()


// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Date.now()/1000)
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

console.log(newDate.getDay())
console.log(newDate.getDate())
console.log(newDate.getHours())
console.log(newDate.getMonth())

console.log(`${newDate.getDate()}and the time is`)

// newDate.toLocaleString('default',{
//     weekday:"long",
// })
