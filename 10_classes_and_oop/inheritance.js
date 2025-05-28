class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// extends are Used to create a child class that inherits from a parent class.
class Teacher extends User{
    constructor(username, email, password){
        super(username)// Call the parent class constructor inside the child class.
        this.email = email;
        this.password = password; 
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher('John Doe', 'john.doe@example.com', 'password123');

chai.addCourse()
chai.logMe()// chai are accessible by parent class properties and methods

const MasalaChai = new User('Masala Chai');
MasalaChai.logMe()
// MasalaChai.addCourse()//not accessible by parent class properties and methods

