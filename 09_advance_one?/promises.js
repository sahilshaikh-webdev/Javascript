//typeOne

const promiseOne = new Promise(function (resolve, reject){
//Do async task
//DB calls, cryptography,network

    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise is resolved')
})

//typeTwo

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async Two Completed')
        resolve()
    },1000)
}).then(function(){
    console.log('promise two resolved')
})

//typeThree

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "sahil", useEmail: "sahil@gmail.com"})
    },1000)
}).then(function(user){
    console.log(user)
})

// typeFour

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "sahil", passowrd: "123"})
        }
        else{
            reject("ERROR: something are wrong")
        }
        
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("the promise is either resolve or rejected")
})


//typeFive


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "afjal", passowrd: "123"})
        }
        else{
            reject("ERROR: something are wrong")
        }
        
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
    
}
consumePromiseFive()


// using fetch access the data from the server using async await function

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("ERROR:", error)
//     }
// }
// getAllUsers()



// this is another type to get the data from the server using async await function
fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch(function(error){
    console.log("ERROR:", error)
})

