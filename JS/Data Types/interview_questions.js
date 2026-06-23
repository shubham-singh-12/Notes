// 1. What is the difference between null & undefined?
var name;
console.log(name);                  // undefined

var userName = null;
console.log(userAge);               // null


console.log(null == undefined);     // true -> Both mean "no value"
console.log(null === undefined);    // false -> but they are Not the same type





// ================================================================
// 2. What is the purpose of typeof Operator in JavaScript?
var userAge = 24;
console.log(typeof (userAge));          // number

var userFirstName = "Shubham";
console.log(typeof (userFirstName));    // string

var isLoggedIn = true;
console.log(typeof isLoggedIn);         // "boolean"

var city;
console.log(typeof (city));             // undefined

var user = null;
console.log(typeof (user));             // object





// ================================================================
// 3. What is the result of ‘typeof null’ in JavaScript?
var user = null;
console.log(typeof (user));             // object





// ================================================================
// 4. What are primitive data types in JavaScript?
var name = "Shubham";
console.log(typeof (name));                 // string

var age = 25;
console.log(typeof (age));                  // number

var isAdmin = true;
console.log(typeof (isAdmin));              // boolean

var city;
console.log(typeof (city));                 // undefined

var user = null;
console.log(typeof (user));                 // object

var bigNum = 1234567890987654321n;
console.log(typeof (bigNum));               // bigint

var id1 = Symbol("id");
console.log(typeof (id1));                   // symbol





// ================================================================
// 5. Explain the concept of truthy & falsy values in JavaScript. Provide examples?
// ========================= FALSY VALUES =========================
var a = false;
var b = 0;
var c = "";
var d = null;
var e = undefined;
// var f = Nan;


// ========================= TRUTHY VALUES ========================
var g = true;
var h = 1;
var i = "hello";
var j = [];
var k = {};
var l = "0";





// ================================================================
// 6. Convert a string to a number?
var myString = "25";
console.log(typeof (myString));                 // string

var myNumber_1 = Number(myString);
console.log(typeof (myNumber_1));               // number

var myNumber_2 = parseInt(myString);
console.log(typeof (myNumber_2));               // number

var myNumber_3 = parseFloat(myString);
console.log(typeof (myNumber_3));               // number

var myNumber_4 = +myString;
console.log(typeof (myNumber_4));               // number





// ================================================================
// 7. Convert a number to a string?
var myNumber = 5;
console.log(typeof (myNumber));                 // number

var myString_1 = String(myNumber);
console.log(typeof (myString_1));               // string

var myString_2 = myNumber.toString();
console.log(typeof (myString_2))                // string

var myString_3 = myNumber + "";
console.log(typeof (myString_3));               // string






// ================================================================
// ParseInt
var userString = "42";
console.log(typeof (userString));                   // string

var userNumber = parseInt(userString);
console.log(parseInt(userNumber));                  // 42
console.log(typeof (userNumber));                   // number



// ParseFloat
var userString = "42.5";
console.log(typeof (userString));                   // string

var userNumber = parseFloat(userString);
console.log(userNumber);                            // 42.5
console.log(typeof (userNumber));                   // number





// ================================================================
// 8. NaN == NaN is false?

var a = "hello" * 5;
var b = undefined + 1;

console.log(a);                 // NaN
console.log(b);                 // NaN

console.log(a == b);            // false (Both are Nan but come from different invalid operations)