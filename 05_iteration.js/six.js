const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    // console.log(item)
    // return item
})

// console.log(values)

//**********************filter********************** */

const myNums = [1,2,3,4,5,6,7,8,9,10]

// let newNums = myNums.filter( (num) => num > 4 )

// console.log(newNums)

// let newNums = myNums.filter ( (num) => {
//     return num > 4  // without return they will give empty [] when we using parenthesis in filters
// })
// console.log(newNums)

// same work we can do usnig foreach()

// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums)


const books = [
    { title: "Book One", genre: "science", publish: "2003", edition: 2014},
    { title: "Book Two", genre: "History", publish: "1989", edition: 2020},
    { title: "Book Three", genre: "science", publish: "1987", edition: 2016},
    { title: "Book Four", genre: "Python", publish: "2006", edition: 2017},
    { title: "Book Five", genre: "science", publish: "2003", edition: 2012},
    { title: "Book Six", genre: "Python", publish: "1999", edition: 2019},
    { title: "Book Seven", genre: "History", publish: "1980", edition: 2014},
    { title: "Book Eight", genre: "Javascript", publish: "1887", edition: 2010},
    { title: "Book Nine", genre: "History", publish: "2000", edition: 2021},
    { title: "Book Ten", genre: "Javascript", publish: "2001", edition: 2023},
    { title: "Book eleven", genre: "science", publish: "20010", edition: 2014},
]

let userBooks = books.filter( (bk) => bk.genre === "science")
userBooks = books.filter ( (bk) => {
   return bk.publish >= 2000 && bk.genre === "History"
})

// console.log(userBooks)

