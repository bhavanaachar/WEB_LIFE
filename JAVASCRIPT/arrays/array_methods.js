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

//console.log("HIi. How are you");

//array methods

//1.push()
// let arr=[10,20,30,40,50]
// arr.push("Hii")
// console.log(arr);

//2. pop(): removes last element of array
// arr.pop()
// console.log(arr);

//3. shift(): used to delete element at the beginning of array
// arr.shift()
// console.log(arr);

// 4. unshift: adds the element at the beginning of array
// arr.unshift("somu")
// console.log(arr);

//5. slice(): returns a shallow copy of an array into new array
// let arr=[10,20,30,40,50]
// console.log(arr);

// console.log(arr.slice(2));  //[30,40,50]
// console.log(arr.slice(2,4)); //[30,40]
// console.log(arr.slice(-2));  //[40,50] negative indexing

//6. splice(): changes the content of array by removing replacing and adding elements. It returns deleted data as an array and modifies the original arraay
// let arr=[10,20,30,40,50]

// //adding element
// let addedData=arr.splice(5,1,60)
// console.log("original array:",arr);
// console.log("Added data:", addedData);


// //removing element
// let deletedData=arr.splice(1,2,"somu", "rani")
// console.log("Original array:",arr);
// console.log("Deleteed data:", deletedData);


// // Updating element
// let updatedData = arr.splice(1, 1, "Rajeev");

// console.log("Original array:", arr);
// console.log("Updated data:", updatedData);

//7. concat(): concats 2 strings
// let str1="Bhavana"
// let str2="achar"
// let newArr=str1.concat(str2)
// console.log(newArr);

//8. reverse(): used to reverse the array. It modifies the original array
// let arr=[10,20,30,40,50]
// console.log(arr.reverse());  //[50,40,30,20,10]


//9. join(): Used to convert array to string sperated by a specified seperator
//let arr=[10,20,30,40,50]
//console.log( typeof arr.join());  string
// console.log(arr.join("*"));
// console.log(arr.join("$"));

//10. indexOf(): returns first index of a specified element in array, returns -1 if not found
//let arr=[10,20,30,40,50]
// console.log(arr.indexOf(20));  //1
// console.log(arr.indexOf(50));  //4
// console.log(arr.indexOf(400));  //-1

//11. lastIndexOf():
// let arr=[10,20,30,40,50,50,40]
// console.log(arr.lastIndexOf(50));  //5
// console.log(arr.lastIndexOf(40));  //6
// console.log(arr.lastIndexOf(10));  //0

//12. includes(): determines whether certain element is present or not. always returns a boolean value
// let arr=[1,2,3,4]
// console.log(arr.includes(2)); //true
// console.log(arr.includes(5));  //false

//13. entries(): returns a new iterator object of the array in the form of key and value pairs
// let arr=[10,20,30,40,50]
// for(let x of arr.entries()){
//     console.log(x);
    
// }

//14. keys(): it is used to print only keys 
// let arr=[10,20,30,40,50]
// for(let x of arr.keys()){
//     console.log(x);
    
// }

//15. values(): It is used to print only values
// let arr=[10,20,30,40,50]
// for(let x of arr.values()){
//     console.log(x);
    
// }

//16. every(): tests whether all elements in array passes the test implemented 
// let arr=[2,4,6,8] 
// console.log(arr.every((num)=>num%2==0));  //true










