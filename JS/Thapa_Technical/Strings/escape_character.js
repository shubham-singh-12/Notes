// =================================================================== ESCAPE CHARACTER ===================================================================


// ====================== MOST COMMONLY USED ======================

// // \n
// let userString = "Hello\nWorld";
// console.log(userString);

// // OUTPUT
// /*
// Hello
// World
// */


// ================================================================
// // \t

// let userString = "Hello\tWorld";
// console.log(userString);                    // Hello    World


// ================================================================
// // \\

// let userString = "C:\\Users\\Alice";
// console.log(userString);                    // C:\Users\Alice


// ================================================================
// // \'

// let userString = 'It\'s a great day';
// console.log(userString);                    // It's a great day


// ================================================================
// // \"

// let userString = "She said \"Hello\"";
// console.log(userString);                    // She said "Hello"





// ================================================================== LESS COMMONLY USED ==================================================================

// // \r

// let userString = "Hello\rWorld";
// console.log(userString);                    // World


// ================================================================
// // \b

// let userString = "Helloo\b World";
// console.log(userString);                    // Hello World


// ================================================================
// // \f

// let userString = "Hello\fWorld";
// console.log(userString);

// // OUTPUT
// /* 
// Hello
//      World 
// */


// ================================================================
// // \v

// let userString = "Hello\vWorld";
// console.log(userString);

// // OUTPUT:
// /*
// Hello
//      World
// */





// ================================================================== UNICODE & SPECIAL ==================================================================

// // \0

// let userString = "Hello\0World";
// console.log(userString);                    // HelloWorld


// ================================================================
// // \uXXXX

// let userString = "\u0041";
// console.log(userString);                    // A

// let userString_2 = "\u20B9";
// console.log(userString_2);                  // ₹

// let userString_3 = "\u2764";
// console.log(userString_3);                  // ❤


// ================================================================
// \xXX

let userString = "\x41";
console.log(userString);                    // A

let userString_2 = "\x61";
console.log(userString_2);                  // a