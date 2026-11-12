
// ==========================================
// 1. TYPE CASTING IN JAVASCRIPT
// ==========================================

// Type casting means converting one data type into another.

// 1. Number to String
let num = 100;
let str = String(num);

console.log(str);        // "100"
console.log(typeof str); // string


// 2. String to Number
let data = "200";
let convertedNum = Number(data);

console.log(convertedNum);        // 200
console.log(typeof convertedNum); // number


// 3. String to Integer using parseInt()
let value1 = "123.45";
let intValue = parseInt(value1);

console.log(intValue);        // 123
console.log(typeof intValue); // number


// 4. String to Float using parseFloat()
let value2 = "123.45";
let floatValue = parseFloat(value2);

console.log(floatValue);        // 123.45
console.log(typeof floatValue); // number


// 5. Number to String using toString()
let value3 = 500;
let stringValue = value3.toString();

console.log(stringValue);        // "500"
console.log(typeof stringValue); // string


// 6. Boolean to Number
console.log(Number(true));  // 1
console.log(Number(false)); // 0


// 7. Number to Boolean
console.log(Boolean(1));  // true
console.log(Boolean(0));  // false


// 8. String to Boolean
console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false


// 9. Null to Number
console.log(Number(null)); // 0


// 10. Undefined to Number
console.log(Number(undefined)); // NaN


// 11. Array to String
let arr = [10, 20, 30];
console.log(String(arr)); // "10,20,30"


// 12. Object to String
let obj = { name: "John" };
console.log(String(obj)); // "[object Object]"


// ==========================================
// 2. TRUTHY AND FALSY VALUES
// ==========================================

// Falsy values in JavaScript (8)

// false, 0, -0, 0n, null, undefined, NaN, ""

// Checking falsy values

console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(-0));        // false
console.log(Boolean(0n));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
console.log(Boolean(""));        // false

// Checking truthy values

console.log(Boolean("Hello")); // true
console.log(Boolean(100));     // true
console.log(Boolean(-10));     // true
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true
console.log(Boolean("0"));     // true


// ==========================================
// 3. LOGICAL OPERATORS IN JAVASCRIPT
// ==========================================

// Logical operators are used to combine conditions.

// 1. AND (&&)
// Returns true only when both conditions are true.

let age = 22;
let hasID = true;

console.log(age >= 18 && hasID); // true
console.log(age >= 18 && false); // false


// 2. OR (||)
// Returns true when at least one condition is true.

let marks = 80;

console.log(marks >= 90 || marks >= 35); // true
console.log(false || false);             // false


// 3. NOT (!)
// Reverses the boolean value.

let isLoggedIn = true;

console.log(!isLoggedIn); // false
console.log(!false);      // true


// ==========================================
// 4. SHORT-CIRCUIT EVALUATION
// ==========================================

// AND (&&)
// If the first value is falsy, it returns the first value.

console.log(0 && 10);       // 0
console.log("Hello" && 10); // 10


// OR (||)
// If the first value is truthy, it returns the first value.

console.log(10 || 20); // 10
console.log(0 || 20);  // 20


// ==========================================
// 5. NULLISH COALESCING OPERATOR (??)
// ==========================================

// Returns the right-hand value only when the left
// value is null or undefined.

let username = null;

console.log(username ?? "Guest"); // Guest

let user = "John";

console.log(user ?? "Guest"); // John


// ==========================================
// 6. COMBINING LOGICAL OPERATORS
// ==========================================

let studentAge = 21;
let studentMarks = 85;

console.log(studentAge >= 18 && studentMarks >= 35); // true

console.log(studentAge < 18 || studentMarks >= 35); // true

console.log(!(studentMarks < 35)); // true
