//IIFE stands for immediately invoked function expression

(function (){
    console.log("Hello from IIFE");
})(); //If we dont use semicolon then it will give error.Because to end up this code we have to put an semicolon explicitly.

(()=>{
    console.log("Hello from arrow function IIFE")
})()

console.log();
