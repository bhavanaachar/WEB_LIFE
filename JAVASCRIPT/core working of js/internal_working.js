// example 1
// console.log(data);  //undefined
// var data="somu"
// console.log(data);  //somu

//internal working
// var data
// console.log(data);
// data="somu"
// console.log(data);m, 


// //example 2
// console.log(data1);  //error
// let data1="somu"
// console.log(data1);  //somu

// print()
// console.log(data);
// var data="somu"
// console.log(data);
// function print(){
//     console.log("HIi");   
// }

// console.log(data);  //undefined
// printFun()
// var printFun=function print(){
//     let name="rani"
//     console.log(data);  
//     console.log(name);    
// }
// var data="somu"
// console.log(data);  


//scopes:The region where a variable can be accessed is called as scopes
//1. Local 2. global 3. Function 
//global scope: Variables declared outside the function scope and can be accessed anywhere in the program

// console.log(data);
// function print(){
//       let name="rani"
//       console.log(data)
//       console.log(name)   
// }
// var data="somu"
// console.log(data);
// print()

//function scope: The variables declared inside function scope are accessible only inside that function
// console.log(data);
// function print(){
//     var name="rani"
//     console.log(data);
    
// }
// print()
// console.log(name);
// var data="somu"
// console.log(data);

//ex-2
// let x=10
// function print(){
//     x=20
//     console.log(x);    
// }
// print()
// console.log(x);


//block scope: 