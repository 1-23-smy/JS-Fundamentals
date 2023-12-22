let myname="SMY";
let anotherName=myname;
anotherName="Banty"
console.log(myname);
console.log(anotherName);

//Stack memory
//Here in Primitive datatypes(number,boolean,String) the copy of reference is given so that the original value is not changed. It goes to Stack memory

//Heap memory
//Here in Non-Primitive datatypes(Array,Objects,Function) the original reference is given so the changes made in the value reflected everywhere. It goes to Heap memory
//example
let myObj={
    name:"SMY",
    age:22
}
let myDuplicateobj=myObj
myDuplicateobj.name="Soumya";

console.log(myObj.name);
console.log(myDuplicateobj.name);