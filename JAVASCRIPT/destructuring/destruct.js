//Destructuring: Destructuring helps break down larger or complex problems to smaller parts

//array destructuring

// let colors = ["red", "blue", "green", "black", "white"];

// let [r, g, b] = colors;

// console.log(r); // red

// console.log(g); // blue

// console.log(b); // green

//skipping elements using commas

// let colors = ["red", "blue", "green", "black", "white"];

// let [,,,,last] = colors;

// console.log(last); // white

//object destructuring

let userdata={
    first_name:"somu",
    last_name:"raj",
    age:49,
    isLoggedIn:true
}

// let {first_name,isLoggedIn,last_name}=userdata

// console.log(first_name);  //somu

// console.log(isLoggedIn);  //true

// console.log(last_name);  //raj

let {first_name:fn,isLoggedIn:is,last_name:ln}=userdata

console.log(fn);  //somu

console.log(is);  //true

console.log(ln);  //raj











