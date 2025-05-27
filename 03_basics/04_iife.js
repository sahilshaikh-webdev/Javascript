//Imediately invoked function expression (IIFE)

//globalscope ke polution se problem hoti hai kai bar to us global scope ke jo bhi veriables ya declarations hai unke polutions ko hatane ke liye ye IIFE use  hota hai 

//imidiately function execute hojaye

//()() this is the syntext of iife


//this is named IIFE
(function chai(){
    console.log(`DB Connected`);

})();// ";" use for end of the code because imidiately execute to hota hai but use pata nahichlata ki end kahan pe hai bina semicolon code run karenge to error aega 

//this is unnnamed iife
(() => {
    console.log(`DB Connected Two`)
})();

//pass the parameters in iife
((name) => {
    console.log(`DB Connected Two${name}`)
})("sahil")

