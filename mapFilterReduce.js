const myobj=[
    {
        name:"SMY",
        age:20
    },
    {
        name:"SMY",
        age:28
    },
    {
        name:"SMY",
        age:8
    },
    {
        name:"SMY",
        age:10
    },
    {
        name:"SMY",
        age:12
    },
    {
        name:"SMY",
        age:18
    },
];



//Reduce

const myCart=[
    {
        item:"Vimbar",
        price:1
    },{
        item:"Soap",
        price:2
    },{
        item:"Cornflakes",
        price:3
    }
];
const initialVal=0
const allTotal=myCart.reduce(
(acc,item)=>{
    console.log(acc,item);
    return acc+item.price
}
,0)
console.log(allTotal);