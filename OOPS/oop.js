const user={
    username:"SMY",
    age:13,
    lastname:"Das",


}

function userone(username,password,lastname){
    
this.username=username,
this.password=password,
this.lastname=lastname

return this
}

const firstUser=new userone("SMY",123,"DAS")
const lastUser=userone("DAS",12323,"SMY") // HERE the values are override w.r.t the previous values which is not good to avoid this we use new keyword to create new object
console.log(firstUser);

