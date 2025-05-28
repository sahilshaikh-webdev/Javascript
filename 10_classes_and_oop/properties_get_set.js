// old approach of getter and setter without class 

//function based

function user (email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get : function(){
            return this._password.toUpperCase()
        },
        set : function(value){
            this._password = value
        }
    })
}

const test = new user('test@gmail.com', 'password123')
console.log(test.email)
console.log(test.password)

