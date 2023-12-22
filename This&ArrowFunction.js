//This keyword in JS refer to the current context
const user={
    username:"SMY",
    age:16,
    myname:function(){
        console.log(`my name is ${this.username}`);
        console.log(this);
        //here this refers to the current context
    }
}

user.myname()

console.log(this);//this will print the empty object because of node but if we want to print this in browser the global object i.e window object will return(Onclick events etc..)

// hello()
function hello(){
    const username="SMY"
    console.log(this.username);//it will print undefined because this can't accesible inside function
}

const helloarrow=()=>{
    console.log(this);
}
helloarrow()

//In normal function the this keyword returns the objects but in arrow function the current context is empty object.


//Arrow Functions

const Arrowfunction=(num1,num2)=>{
    return num1+num2//Explicit type
}

const Arrowfunction2=(num1,num2)=>(num1+num2)//Implicit type

console.log(Arrowfunction(2,111))

//In Implicit type the return keyword is not used we simply use the paranthesis and it will return automatically, But in Explicit we use curly braces so that we have to right return keyword.

//The benefit of writing implicit is if we want to return the object we can't do it using curly braces so that we have to use the implicit type.