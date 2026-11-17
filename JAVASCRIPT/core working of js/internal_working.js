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
//1. Block 2. global 3. Function 
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


//block scope: scope that is  declared inside curly braces
//let keyword
// let flag=true
// if(flag){
//     let data=100
//     console.log("The value of data is:"+data);
    
// }
// else{
//     let data=200
//      console.log("The value of data is:"+data);
    
// }
// console.log(data);

//let and const are block scope variable:


//var keyword
// let flag=true
// if(flag){
//     var data=100
//     console.log("The value of data is:"+data);
    
// }
// else{
//     var data=200
//      console.log("The value of data is:"+data);
    
// }
// console.log(data);


//scope chaining:Scope chaining is the process by which JavaScript/TypeScript searches for a variable in the current scope and, 
// if it is not found, looks in its outer (parent) scope until it finds the variable or reaches the global scope.

//example

let data1="somu"
function outerFunction(){
    let data2="rani"
    function innerFunction(){
        let data3="raja"
        console.log(data1);
        console.log(data2);
        console.log(data3);
           
    }
    innerFunction()
}
outerFunction()

//output:
// somu
// rani
// raja
