//advanced array methods

//map: creates a new array by applying a function to all the elements present in a collecion

//let array=[1,2,3,4,5,6]

// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
    
// }

// function mul(x){
//     return x*5
// }
// let newArr=array.map(mul)

// console.log("Nwe array:", newArr);

// console.log("Original array:",array);


//let arr=[1,2,3,4,5,6]

// function cube(x){
//     return x**3
// }
//  let newArr=arr.map(cube)

// console.log("Nwe array:", newArr);

// console.log("Original array:",arr);

// let newArr=arr.map(x=>x**3)
// console.log(newArr);

//filter():It filters the array based on some condition. If the condition is evaluated o true , that value is added to collection, else that value will be rejected

//let data = [1,2,3,4,5,6,7,8,9,10];

// let oddNumbers = data.filter((num) => {
//     return num % 2 !== 0;
// });

// console.log(oddNumbers);

// arr=["javascript","Python","vaish"]
// let len=arr.filter((value)=>{
//     return value.length>5
// })
// console.log(len);

//  arr=["javascript","Python","vaish","Rahul","Riya"]
//  let startsWith=arr.filter((value)=>{
//     return value.startsWith("R")
//  })
//  console.log(startsWith);
 
// let arr=[" "," ","python"]
// let validString=arr.filter((value)=>{
//     return value!==(" ")
// })
// console.log(validString);

// let arr=["vaish","raju","lxmi","deepthi"]
// let Alphabet=arr.filter((value)=>{
//     return value.includes("a")
// })
// console.log(Alphabet);

// let arr = [25, 55, 40, 60, 85]

// let n = arr.filter((value) => {
//     return String(value).includes("5")
// })

// console.log(n);

//reduce: reduce the complete array to a single value

//let data=[1,2,3,4,5]

// let res=data.reduce((sum, cnum)=> sum+cnum)

//let p=data.reduce((product,cnum)=> product*cnum)

//console.log(p);

// let newData=data.reduce((acc,x)=>{
//     return acc+x
// },100)
// console.log(newData);


//sum of all even numbers
let data = [1,2,3,4,5,6,7,8,9,10]

// let even = data.filter((value) => {
//     return value % 2 == 0
// })

// let res = even.reduce((sum, value) => {
//     return sum + value
// }, 0)

// console.log(even);
// console.log("Sum of even numbers:",res);

// let res = data.filter(value => value % 2 == 0).reduce((sum, value) => sum + value, 0)  //in single line

// console.log(res);


//count of odd numbers in array
//sum of squares of elementss
//count how many numbers are divisble by 2 and 3 both
//find total number of chraecter in given strings