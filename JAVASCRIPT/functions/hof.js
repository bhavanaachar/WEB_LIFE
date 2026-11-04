// a function that accepts another function as parameter is called hof function
// or if it returns another function

// function Task(somu)
// {
//     return function()
//     {
//         console.log("Thank you");    
//     }
// }
// let res=Task()
// res()


// function add(a, b) {
//     console.log(a + b);
// }

// function sub(a, b) {
//     console.log(a - b);
// }

// function mul(a, b) {
//     console.log(a * b);
// }

// function div(a, b) {
//     console.log(a / b);
// }

// function calci(callback, a, b) {
//     callback(a, b);
// }

// calci(mul, 10, 20);
// calci(add, 100, 20);
// calci(sub, 30, 20);
// calci(div, 40, 20);


// function Greeting(order, takeaway) {
//     console.log("Welcome to COFFEE TATTVA");
//     console.log("You can order here..");

//     order(takeaway);
// }

// function ChickenBiryani(takeaway) {
//     setTimeout(() => {
//         console.log("Thank you for your order..");
//         console.log("Your chicken biryani is getting ready..");
//         console.log("Here is your chicken biryani!");

//         takeaway();
//     }, 5000);
// }

// function VegBiryani(takeaway) {
//     setTimeout(() => {
//         console.log("Thank you for your order..");
//         console.log("Your veg biryani is getting ready..");
//         console.log("Here is your veg biryani!");

//         takeaway();
//     }, 5000);
// }

// function takeaway() {
//     console.log("Your order is ready for takeaway!");
// }

// // Order chicken biryani
// Greeting(ChickenBiryani, takeaway);

// // To order veg biryani, use this instead:
// // Greeting(VegBiryani, takeaway);


