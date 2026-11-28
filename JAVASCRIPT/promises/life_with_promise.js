// traditional way: then and cath
// let prm = new Promise((resolve, reject) => {
//     console.log("Promise is created");
//     //console.log("Data is received");
//     console.log("Data is not received");
    
// });

// prm.then(data => console.log(data))
//    .catch(err => console.log(err));


//cafe example with promise

function orderFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Food is ordered");
            resolve();
        }, 2000);
    });
}

function prepareFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Food is being prepared");
            resolve();
        }, 2000);
    });
}

function Paymentstatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment done");
            resolve();
        }, 2000);
    });
}

function takeAway() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Food is ready for takeaway");
            resolve();
        }, 2000);
    });
}
//traditional way to handle promise: then and catch 

// orderFood()
// .then(() => prepareFood())
// .then(() => Paymentstatus())
// .then(() => takeAway())
// .then(() => console.log("Enjoy your food"))
// .catch((error) =>console.log(error));

//modern method of handling a promise
async function processOrder() {
    try{
        await orderFood()
        await prepareFood()
        await Paymentstatus()
        await takeAway()
        console.log("Enjoy ur meal");
    }
    catch(error){
        console.log("Order failed:",err);
        
    }
}
processOrder()


//modern way of handling promise: async and await

//to handle success and failure state we use try and catch

// async function handlingPromise() {
//     try{
//         let res=await prm
//         console.log(res);
        
//     }catch(err){
//         console.log(err);
        
//     }
// }
// handlingPromise()

// let prm = new Promise((resolve, reject) => {
//     console.log("Employee login status");
//     let flag=true
//     if(flag) console.log("Employee logged in");   
//     else console.log("Employee dint login")
// })
// async function LoggedStatus() {
//     try{
//         let res=await prm
//         console.log(res);    
//     }catch(err){
//         console.log(err)
//     }   
// }
// LoggedStatus()