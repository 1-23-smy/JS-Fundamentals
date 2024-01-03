// Math.prototype.pi=function(){
//     this.val=4;
// }

// console.log(Math.pi());

// console.log(Object.getOwnPropertyDescriptor(Math,"PI"))

const cars={
    name:"GWAGON",
    price:`${900}$`,
    isavailable:true,
    orderNo:function(){
        console.log("Order no");
    }
}
console.log(Object.getOwnPropertyDescriptor(cars,"name"))
Object.defineProperty(cars,"name",{
    writable:false,
    enumerable:true
})//if i write enumerable false we can't iterate through it.

for (const [key , val] of Object.entries(cars)) {
    if(typeof val !== "function")
    console.log(`${key} : ${val}`);
}
