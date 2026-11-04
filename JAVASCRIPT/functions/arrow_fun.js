//arrow function: Shorter way of writing functions
//used for anonymus function
//also called Fat arrow function 

// function add(a,b)
// {
//     console.log(a+b);
    
// }
// add(20,30)

// let add=(a,b)=>{
//     console.log(a+b);    
// }
// add(30,50)

// 1. In arrow function,, if code is written in single line no need to use return and curly braces

// let add=(a,b)=>(a+b)
// console.log(add(10,20));

//2. If you have single parameter..no need of parenthesis

// let add=a=>a+20
// {
//     console.log(add(10)); 
// }

//3.using underscore

// let addition=_=> 20+20
// console.log(addition());

//4. Implicit return
// let add=(a,b)=>(a+b)
// console.log(add(10,20));

// //explicit return 
// let addition = (a, b) => {
//     return a + b;
// };
// console.log(addition(10, 20));

//function experssion: Storing the function into a variable,, whole process is called as function expression

let add=function printAdd(){
    console.log(10+20);          //function expression
}
add()