//ES6

//classes in js

class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc `
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user('JohnDoe', 'john@example.com', 'password123')

console.log(chai.encryptPassword()) // Output: password123abc
console.log(chai.changeUsername()) 


//behind the seen

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return`${this.password}abc`
}

User.prototype.changeUsername = function(){
    return`${this.username.toUpperCase()}`
}

const Tea = new User('tea', 'tea@gmail.com', '123')
console.log(Tea.encryptPassword()); // Output: 123abc
console.log(Tea.changeUsername());
