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
let friend1 = {
    name: "Rahul",
    age: 22,
    isStudent: true,
    greet: function () {
        console.log("Hello, I am Rahul");
    },
    skills: ["JavaScript", "Python", "HTML"],
    address: {
        city: "Bangalore",
        state: "Karnataka"
    }
};

let friend2 = {
    name: "Priya",
    age: 21,
    isStudent: false,
    greet: function () {
        console.log("Hello, I am Priya");
    },
    skills: ["Java", "CSS", "React"],
    address: {
        city: "Mysore",
        state: "Karnataka"
    }
};

let friend3 = {
    name: "Arjun",
    age: 23,
    isStudent: true,
    greet: function () {
        console.log("Hello, I am Arjun");
    },
    skills: ["C", "C++", "Python"],
    address: {
        city: "Chennai",
        state: "Tamil Nadu"
    }
};

let friend4 = {
    name: "Sneha",
    age: 22,
    isStudent: true,
    greet: function () {
        console.log("Hello, I am Sneha");
    },
    skills: ["JavaScript", "Angular", "SQL"],
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

let friend5 = {
    name: "Kiran",
    age: 24,
    isStudent: false,
    greet: function () {
        console.log("Hello, I am Kiran");
    },
    skills: ["Python", "Django", "MySQL"],
    address: {
        city: "Mumbai",
        state: "Maharashtra"
    }
};

let friend6 = {
    name: "Anjali",
    age: 20,
    isStudent: true,
    greet: function () {
        console.log("Hello, I am Anjali");
    },
    skills: ["HTML", "CSS", "Bootstrap"],
    address: {
        city: "Delhi",
        state: "Delhi"
    }
};

let friend7 = {
    name: "Vikram",
    age: 25,
    isStudent: false,
    greet: function () {
        console.log("Hello, I am Vikram");
    },
    skills: ["Node.js", "Express", "MongoDB"],
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
};

let friend8 = {
    name: "Divya",
    age: 22,
    isStudent: true,
    greet: function () {
        console.log("Hello, I am Divya");
    },
    skills: ["React", "TypeScript", "JavaScript"],
    address: {
        city: "Kochi",
        state: "Kerala"
    }
};

let friend9 = {
    name: "Rohit",
    age: 23,
    isStudent: false,
    greet: function () {
        console.log("Hello, I am Rohit");
    },
    skills: ["C#", "ASP.NET", "SQL"],
    address: {
        city: "Jaipur",
        state: "Rajasthan"
    }
};

let friend10 = {
    name: "Bhavya",
    age: 21,
    isStudent: true,
    greet: function () {
        console.log("Hello, I am Meena");
    },
    skills: ["Python", "Machine Learning", "AI"],
    address: {
        city: "Coimbatore",
        state: "Tamil Nadu"
    }
};

console.log("Friend 1:",friend1);
friend1.greet() //hello I am rahul
console.log("-----------------------");
console.log("Friend 2:",friend2);
friend2.greet()
console.log("-----------------------");

// Accessing object properties
console.log(friend1.name);
console.log(friend2.age);
console.log(friend3.skills);
console.log(friend4.address.city);
console.log("-----------------------");

// Calling object functions
friend1.greet();
friend5.greet();
friend10.greet();