// const tinderUser = new Object()//this is singleton object 
const tinderUser = {}//thi is non singleton object but both are givinng thee same vaalue
tinderUser.Id = 1234;
tinderUser.name = "sah"
tinderUser.isLoggin = false
// console.log(tinderUser)

const regularUser = {
    email: "sahil@gmail.com",
    fullname:{
        userfullname:{
            firstname: "sahil",
            lastname: "shaikh"

        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {7: "a", 8:"b"}

// const obj3 =  {obj1, obj2} this is wrong way to combine obj
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2,...obj4}//this is another to combine two objects 90% of the time we are usinng this
// console.log(obj3)


const user = [
    {
    id: 1,
    email: "sah@gmail.com"
    },
    {
    id: 1,
    email: "sah@gmail.com"
    },
    {
    id: 1,
    email: "sah@gmail.com"
    },
    {
    id: 1,
    email: "sah@gmail.com"
    },
]

// console.log(user[1].email)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))//each key value make into array first valu are key and second are value minum use of this syntax

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))//use to check value are have in the object or not



//********************* object de-structure***************************************

const course = {
    coursename: "you tube in hindi",
    courseprice: "999",
    coourseInstructor: 'sahil'
}

const {coourseInstructor: instructor} = course //de structure the object 

console.log(instructor)


// what is api 

// {
//     "name": "sahil",
//     "coursename": "you tube in hindi",
//     "price": "free"
// } 

[
    {},
    {},
    {}
]