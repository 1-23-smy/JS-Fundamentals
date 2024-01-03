 //Lexical Scoping
// function outer (){
//     let username="SMY";
//     // console.log(myname);// this will throw an error because this is out of scope.

//     function inner(){
//         let myname="DAS"
//         console.log(username);
//     }
//     inner();
// }

// outer();

//Closures
function outer(){
    const username="SMYDAS";
   return function displayName(){
        console.log(username);
    }
    //Here the whole lexical scope is go. that's why it will not show any errors. the outer functions properties is available for the inner function. 
}
const myfunc=outer();
myfunc()