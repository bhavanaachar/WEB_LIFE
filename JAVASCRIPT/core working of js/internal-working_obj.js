//internal working of object

// let userInfo={
//     name:"somu",
//     age:20,
//     flag:false,

//     working:function(){
//         console.log("Ramu is working");
        
//     }
// }
// console.log(userInfo);
// userInfo.working()

//function internal working

// function add(a,b){
//     console.log(a+b);
    
// }
//add(10,20)

// console.log(add.name);  //add
// console.log(add.length); //2ujmu

//pass by value
// let data1=10
// let data2=data1

// console.log("before updation"); 

// console.log("data 1:", data1);  //10
// console.log("data 2:",data2);  //10
  
// data2=100

// console.log("After updation:");

// console.log("data 1:", data1);  //10
// console.log("data 2:",data2);  //100

//passing value by refrences

// let obj1={
//     name:"somu",
//     age:30
// }
// obj2=obj1

// console.log("before updating");

// console.log(obj1);  //{ name: 'somu', age: 30 }
// console.log(obj2); //{ name: 'somu', age: 30 }

// console.log("After updating:");

// obj1.age=100

// console.log(obj1); //{ name: 'somu', age: 100 }
// console.log(obj2); //{ name: 'somu', age: 100 }

//closures

function outerFunction(){
    console.log("Outer Function has started");
    
    let outerFunData=10
    function innerFunction(){
        console.log("Inner function has started");
        
        console.log("Accessing outerFunction data:",outerFunData);

        console.log("Inner function has ended");
        
        
    }
    console.log("Outer function has ended");
    
    return innerFunction
    
}
let res=outerFunction()
res()









