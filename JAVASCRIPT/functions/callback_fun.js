// Callback function is a function which is passed as arguement to another function'

// function Task(fun){
//     fun()
// }
// function add(){
//     console.log(100+20);
    
// }
// Task(add)

function Task(fun){
    fun()
}
Task(function() {                    //anonymus function 
    console.log(100+20);
    
})