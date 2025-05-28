class user {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    //getter

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}hitesh`
    }

    //setter
    set password(value){
        this._password = value
    }
}

const hitesh = new user("hitesh@gmail.com", "abc")
console.log(hitesh.password)

console.log(hitesh.email)