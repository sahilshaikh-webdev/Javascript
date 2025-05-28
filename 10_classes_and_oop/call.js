function SetUsername(username){
    //complex DB calls
    this.username = username;
    console.log("called")
}

function createUser(username, email, password){
    SetUsername.call(this, username)//current execution context kisi aor ko pass kardeta hai jaise ki isme kia hai 
    this.email = email
    this.password = password
}

const chai = new createUser("test", "test@example.com", "test");
console.log(chai)