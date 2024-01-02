let myheros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Soumya = function () {
    console.log(`proto is called by ${this}`);
}

myheros.Soumya()

heroPower.Soumya()

//Everything in JS is treated as Object. so when i declared object's prototype then anyone can access that arrays,strings, functions..
//IF anything at object level not found then it will returned as null.

//Inheritance

const myTeacher = {
    makeVideos: true
}

const teachingSupport = {
    isavailable: false
}

const TASupport = {
    makeAssignment: false,
    fullTime: true,
    __proto__: teachingSupport //TASupport object is now access the teachingsupport
}

console.log(TASupport.__proto__);

//Modern Syntax

Object.setPrototypeOf(teachingSupport, myTeacher)//now teachingsupport can access the properties of myteacher.


let mystring = "Soumya    "

String.prototype.trueLength = function () {
    console.log(`Your length of the string is ${this.trim().length}`);
}
mystring.trueLength()
