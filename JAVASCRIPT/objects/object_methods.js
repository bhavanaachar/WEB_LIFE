// objectmethods

//keys: It is used to acess keys of object
// let data={
//     name:"somu",
//     age:21,
//     flag:true
// }

// console.log(Object.keys(data));//[ 'name', 'age', 'flag' ]

// values: It is used to acees values of object

// console.log(Object.values(data)); //[ 'somu', 21, true ]

// entries: It is used to access both keys and values

// let dataFormat=Object.entries(data); 

// console.log(dataFormat); //[ [ 'name', 'somu' ], [ 'age', 21 ], [ 'flag', true ] ]

// 4.fromentries():It is used to convert back to object

// console.log(Object.fromEntries(dataFormat)); //{ name: 'somu', age: 21, flag: true }

//5.assign():This method copies one or more property from source object to new object

//syntax:Objcect.assign(target, sources)

// let person = {
//     name: "somu"
// }
// let info_user = {
//     age: 20,
//     isStudent: true
// }
// let userdata = Object.assign({}, person, info_user)

// console.log(userdata); //{ name: 'somu', age: 20, isStudent: true }

//6. seal(): This method prevents addition or deletion of new properties but we can modify the property

// let empInfo={
//     full_name:"Somu raj",
//     age:30,
//     pan:"123456",
//     isLoggedIn:true
// }

//Object.seal(empInfo) //sealing the object properties

//console.log("After sealing the object data");

//delete empInfo.pan  //deleting is not possible

//empInfo.age=31  //updating is possible

//empInfo.ref="rani" //adding is not possible

//console.log(empInfo);

//7. Object.isSealed():It checks whether the object is sealed or not. Returns boolean if true else false

// let empInfo={
//     full_name:"Somu raj",
//     age:30,
//     pan:"123456",
//     isLoggedIn:true
// }

// Object.seal(empInfo)

// if(Object.isSealed(empInfo)){
//     console.log("OO shit we cannot do any khand") 
  
// }

// else{
//     console.log("Come on we can easily do any khand");  
// }

//8. Object.freeze(): Cannot add , delete or update the property

// let empInfo={
//     full_name:"Somu raj",
//     age:30,
//     pan:"123456",
//     isLoggedIn:true
// }

// Object.freeze(empInfo)

// //deletion
// delete empInfo.full_name

// //updation
// empInfo.age=32

// //addition
// empInfo.ref="rani"

// console.log(empInfo); //{ full_name: 'Somu raj', age: 30, pan: '123456', isLoggedIn: true }

//9. isfrozen():Checks whether an object is frozen.

// let empInfo={
//     full_name:"Somu raj",
//     age:30,
//     pan:"123456",
//     isLoggedIn:true
// }

// Object.isFrozen(empInfo)

// deletion
// delete empInfo.full_name  //deletes full_name

// updation
// empInfo.age=32  //updates age to 32

// addition
// empInfo.ref="rani"  //adds ref property to object

// console.log(empInfo);

//10: Object.defineProperty(): Object.defineProperty() is used to add a new property to an object or modify the characteristics of an existing property.


//11.Object.hasOwm(): It checks for specified property is present inobject or not, returns boolean value

// let res=Object.hasOwn(empInfo,"full_name")

// console.log((res));

//12: Object.is(): checks whether 2 value is same or not

//case1:Comparing values within an object

//let res=Object.is(empInfo.age,30)

//console.log(res);  //true

//case 2:Comparing two objects

// let realInfo={
//     name:"rani",
//     age:20
// }

// console.log(Object.is(empInfo,realInfo));  //false









