//methods
//keys: It is used to acess keys of object
let data={
    name:"somu",
    age:21,
    flag:true
}
console.log(Object.keys(data));//[ 'name', 'age', 'flag' ]

//values: It is used to acees values of object
console.log(Object.values(data)); //[ 'somu', 21, true ]

//entries: It is used to access both keys and values
let dataFormat=Object.entries(data); 
console.log(dataFormat); //[ [ 'name', 'somu' ], [ 'age', 21 ], [ 'flag', true ] ]

//4.fromentries():It is used to convert back to object
console.log(Object.fromEntries(dataFormat)); //{ name: 'somu', age: 21, flag: true }




