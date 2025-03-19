const accountId = 12345;
let accountEmail = "sahil@gmail.com"
var accountPassowrd = "1234";
    accountCity = "nallasopara";
let accountState;


// accountId = 2;This is not allowed
accountEmail = "sa@gmail.com";
accountPassowrd = "321";
accountCity = "Bhayandar";

/* avoid to use var
because issue in block scope and functional scope */


console.log(accountId);

// we will call once all the variables using console.table()

console.table([accountId, accountEmail, accountPassowrd, accountCity, accountState]);
