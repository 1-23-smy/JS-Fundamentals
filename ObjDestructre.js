//Rest operator
function addElements(...elems){
        console.log(elems)
}

addElements(2,4,4,4)

//if we have more numbers to pass through then it is very hectic to hard code the arguements
//so instead we can use Rest operator.

//Objects destructuring
const myObj={
    name:"Smy",
    age:"21",
    DOB:"13th MAY"
}
const {name:nm}=myObj

console.log(nm);
// We can use : to give a short name


//In react we use props but instead we can do destructuring.
//For Example:

// const Navbar=({company})=>{
// console.log(company);
// }
// Navbar(company="smy")