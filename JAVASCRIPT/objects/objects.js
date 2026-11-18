//objects in javascript
//objects:a collection of different types of data stored in the form of key value pairs
// var emp={
//     name:"somu",
//     age:22,
//     isLoggesIn:true,

//     reading:function(){
//         console.log("Somu is reading");
        
//     },
//     sleeping:function(){
//         console.log("Somu is sleeping");
        
//     }
// }
// console.log(emp);
// console.log("------------");

// emp.reading()
// console.log("------------");

// emp.sleeping()
// console.log("------------");

//example
// let friend1 = {
//     name: "Rahul",
//     age: 22,
//     isStudent: true,
//     greet: function () {
//         console.log("Hello, I am Rahul");
//     },
//     skills: ["JavaScript", "Python", "HTML"],
//     address: {
//         city: "Bangalore",
//         state: "Karnataka"
//     }
// };

// let friend2 = {
//     name: "Priya",
//     age: 21,
//     isStudent: false,
//     greet: function () {
//         console.log("Hello, I am Priya");
//     },
//     skills: ["Java", "CSS", "React"],
//     address: {
//         city: "Mysore",
//         state: "Karnataka"
//     }
// };

// let friend3 = {
//     name: "Arjun",
//     age: 23,
//     isStudent: true,
//     greet: function () {
//         console.log("Hello, I am Arjun");
//     },
//     skills: ["C", "C++", "Python"],
//     address: {
//         city: "Chennai",
//         state: "Tamil Nadu"
//     }
// };

// let friend4 = {
//     name: "Sneha",
//     age: 22,
//     isStudent: true,
//     greet: function () {
//         console.log("Hello, I am Sneha");
//     },
//     skills: ["JavaScript", "Angular", "SQL"],
//     address: {
//         city: "Hyderabad",
//         state: "Telangana"
//     }
// };

// let friend5 = {
//     name: "Kiran",
//     age: 24,
//     isStudent: false,
//     greet: function () {
//         console.log("Hello, I am Kiran");
//     },
//     skills: ["Python", "Django", "MySQL"],
//     address: {
//         city: "Mumbai",
//         state: "Maharashtra"
//     }
// };

// let friend6 = {
//     name: "Anjali",
//     age: 20,
//     isStudent: true,
//     greet: function () {
//         console.log("Hello, I am Anjali");
//     },
//     skills: ["HTML", "CSS", "Bootstrap"],
//     address: {
//         city: "Delhi",
//         state: "Delhi"
//     }
// };

// let friend7 = {
//     name: "Vikram",
//     age: 25,
//     isStudent: false,
//     greet: function () {
//         console.log("Hello, I am Vikram");
//     },
//     skills: ["Node.js", "Express", "MongoDB"],
//     address: {
//         city: "Pune",
//         state: "Maharashtra"
//     }
// };

// let friend8 = {
//     name: "Divya",
//     age: 22,
//     isStudent: true,
//     greet: function () {
//         console.log("Hello, I am Divya");
//     },
//     skills: ["React", "TypeScript", "JavaScript"],
//     address: {
//         city: "Kochi",
//         state: "Kerala"
//     }
// };

// let friend9 = {
//     name: "Rohit",
//     age: 23,
//     isStudent: false,
//     greet: function () {
//         console.log("Hello, I am Rohit");
//     },
//     skills: ["C#", "ASP.NET", "SQL"],
//     address: {
//         city: "Jaipur",
//         state: "Rajasthan"
//     }
// };

// let friend10 = {
//     name: "Bhavya",
//     age: 21,
//     isStudent: true,
//     greet: function () {
//         console.log("Hello, I am Meena");
//     },
//     skills: ["Python", "Machine Learning", "AI"],
//     address: {
//         city: "Coimbatore",
//         state: "Tamil Nadu"
//     }
// };

// console.log("Friend 1:",friend1);
// friend1.greet() //hello I am rahul
// console.log("-----------------------");
// console.log("Friend 2:",friend2);
// friend2.greet()
// console.log("-----------------------");

// // Accessing object properties
// console.log(friend1.name);
// console.log(friend2.age);
// console.log(friend3.skills);
// console.log(friend4.address.city);
// console.log("-----------------------");

// // Calling object functions
// friend1.greet();
// friend5.greet();
// friend10.greet();

//ways to create a object
//1. using object literal
//2. using object constructor

//1. using object literal:
//syntax:
// let obj={
//     key:value,
//     key:value,
//     key:value
// }
//example:
// let student={
//     name:"somu",
//     age:22,
//     rollno:12
// }

//ways to acess object properties
//1. using dot notation
//2. using square brackets

//1. dot notation
// console.log(student.name);  //somu
// console.log(student.age);   //22
// console.log(student.rollno); //12
//console.log(student); //{ name: 'somu', age: 22, rollno: 12 }

//2. using square brackets: it is used for dynamic access
// console.log(student["name"]); //somu
// console.log(student["age"]);  //22
// console.log(student["rollno"]); //12

//example 2

// Creating an object
// var emp = {
//     name: "somu",
//     age: 22,
//     isLoggedIn: true,

//     reading: function () {
//         console.log("Somu is reading");
//     },

//     sleeping: function () {
//         console.log("Somu is sleeping");
//     },

//     favColour: ["red", "green", "blue"],

//     address: {
//         city: "pune",
//         pincode: 12345
//     },

//     // Property with space
//     "is LoggedIn": true,

//     // Properties with special characters
//     "@email": "somu@gmail.com",
//     "emp-id": 101,

//     // Number as key
//     1: "Developer"
// };


// // Accessing methods
// emp.sleeping(); // somu is sleeping

// // Accessing array
// console.log(emp.favColour);    // [ 'red', 'green', 'blue' ]
// console.log(emp.favColour[1]); // green

// // Accessing nested object
// console.log(emp.address.pincode); // 12345


// // Advantages of using square brackets


// // 1. Dynamic accessing of data
// let key = "name";
// console.log(emp[key]); // somu


// // 2. If property name consists of space
// console.log(emp["is LoggedIn"]); // true


// // 3. If property name consists of special characters
// console.log(emp["@email"]); // somu@gmail.com
// console.log(emp["emp-id"]); // 101


// // 4. Numbers as key
// console.log(emp[1]);   // Developer
// console.log(emp["1"]); // Developer

//Updating the properties of object
// let data={
//     name:"somu",
//     age:21,
//     flag:true
// }
// adding new property
// data.luckyNo=3
// console.log(data);

// updating 
// data.age=22
// console.log(data);

// deleting
// delete data.flag
// console.log(data);

