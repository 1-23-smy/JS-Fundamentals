// const firstPromise=new Promise((resolve,reject)=>{
//     console.log("promise is resolved");
//     resolve()
// })
// firstPromise.
// then(()=>{
//     console.log("promise resolved");
// })


// new Promise((res,rej)=>{
//     let time=1;
//     setTimeout(()=>{

//         if(time===1) time++

//          res(time)
//     },1000)
// }).then((data)=>{
//     console.log("Promise2 Resolved",data);
// })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;;
//         if (!error) {
//             resolve({ username: "the username is smy", password: 12 })
//         }
//         else {
//             reject('Error! Something went wrong')
//         }
//     }, 1000)
// })

//if we return then it will only accessible in then which is known as thenable chaining.
//if we store in a variable then it will throw an error basically print promise pending.
// const newLocal = promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// })

// console.log(newLocal);

//it will only accessible in then which is known as thenable chaining.
// promiseFour.then((user) => {
//     return user.username
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("Finally the promise is either resolve or rejected");
// })


// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;;
//         if (!error) {
//             resolve({ username: "the username is smy", password: 12 })
//         }
//         else {
//             reject('Error! Something went wrong')
//         }
//     }, 1000)
// })

// async function getPromise(){
//     const res=await promiseFive
//     console.log(res);
// }
// getPromise()

// USING ASYNC AWAIT.
// const URI='https://jsonplaceholder.typicode.com/users'
// async function testApi(){
//         const res=await fetch(URI);
//        const data= await res.json()
//     console.log(data);
// }
// testApi()

//USING THEN AND CATCH

fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

