

const user = {
    _email: "sah@gmail.com",
    _password: "sah123",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

//factroty function

const tea = Object.create(user)
console.log(tea.email)

