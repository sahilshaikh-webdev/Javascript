// Object literals

const user = {
    username: 'John Doe',
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function(){
        // console.log('Got user details from data base')
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

//***********************Constructor function*******************
// new object created

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Hello, ${this.username}!`);
    }

    return this
}

const userOne = new User("sahil", 21, true);
const userTwo = new User("Hitesh", 11, false);

// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);
