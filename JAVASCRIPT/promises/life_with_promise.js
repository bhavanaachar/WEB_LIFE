let prm = new Promise((resolve, reject) => {
    console.log("Promise is created");
    //console.log("Data is received");
    console.log("Data is not received");
    
});

prm.then(data => console.log(data))
   .catch(err => console.log(err));