//static methods:
//1. array.from()
//2. array.isarray()
//3. Array.of()

//1. array.from(): it will convert array to iterable form of data
// let str="hello"
// let arr=Array.from(str)
// console.log(arr);

// let bool=true  //not iterable
// console.log(Array.from(bool));


// let n=10     //not iterable
// console.log(Array.from(n));

// let data=[1,2,3,4,5]
// console.log(Array.from(data,(num)=>num*5));

//convert string to array
// let arr="javascript"
// console.log(Array.from(arr,(num)=>num+0).toString().replaceAll(",",""));

//isArray: checks whether given data is array or not and returns boolean
// let data=[1,2,3,4,5,]
// //console.log(Array.isArray(data));
// if(Array.isArray(data)){
//     console.log("Data received is in the form of array");
    
// }
// else{
//     console.log("Data received is not array");
    
// }

//array.of(): 
// console.log(Array.of(1,2,3,4,5,6));
// console.log(Array.of(10));
