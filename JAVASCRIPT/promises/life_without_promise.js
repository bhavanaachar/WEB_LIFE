function orderFood(callback) {
    setTimeout(() => {
        console.log("Food is ordered:");
        callback()
    }, 2000)
}

function prepareFood(callback) {
    setTimeout(() => {
        console.log("Food is is being prepared:");
        callback()
    }, 2000)
}

function Paymentstatus(callback) {
    setTimeout(() => {
        console.log("Payment done:");
        callback()
    }, 2000)
}


function takeAway(callback) {
    setTimeout(() => {
        console.log("Food is ready for takeaway:");
        callback()
    }, 2000)
}
orderFood(() => {
    prepareFood(() => {
        Paymentstatus(() => {
            takeAway(() => {
                console.log("Enjoy your food");

            })
        })
    })
})


