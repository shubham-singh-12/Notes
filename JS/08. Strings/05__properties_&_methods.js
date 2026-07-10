// ================================================================== STRING PROPERTIES ==================================================================


// length Property

// let userFirstName = "Shubham";
// let userLastName = "Singh";

// console.log(userFirstName.length);                  // 7
// console.log(userLastName.length);                   // 5





// ==================================================================== STRING METHODS ====================================================================

// ========================= CASE METHODS =========================

// toUpperCase()

// let text_1 = "Hello World";
// console.log(text_1.toUpperCase());                  // HELLO WORLD



// toLowerCase()

// let text_1 = "Hello World";
// console.log(text_1.toLowerCase());                  // hello world





// ================================================================
// ==================== SEARCH & CHECK METHODS ====================

// includes()
// let message = "Hello, Welcome to JavaScript Development";

// console.log(message.includes("JavaScript"));            // true
// console.log(message.includes("javascript"));            // false



// // startsWith()
// let message = "Hello, Welcome to JavaScript Development";

// console.log(message.startsWith("Hello"));               // true
// console.log(message.startsWith("welcome"));             // false



// endsWIth()
// let message = "Hello, Welcome to JavaScript Development";

// console.log(message.endsWith("Development"));           // true
// console.log(message.endsWith("development"));           // false



// indexOf()
// let text = "Brave new world";

// console.log(text.indexOf("new"));               // 6
// console.log(text.indexOf("world"));             // 10
// console.log(text.indexOf("space"));             // -1



// lastIndexOf()
// let text = "Hello planet earth, you are a great planet.";

// console.log(text.lastIndexOf("planet"));            // 36
// console.log(text.lastIndexOf("Planet"));            // -1



// search()
// let text = "Mr. Blue has a blue window";

// console.log(text.search("Blue"));               // 4
// console.log(text.search("xyz"));                // -1








// ================================================================
// ======================= EXTRACT METHODS =======================

// slice()
// let text = "Hello World";

// console.log(text.slice(0, 5));                  // Hello
// console.log(text.slice(6));                     // World
// console.log(text.slice(-5));                    // World
// console.log(text.slice(0, -6));                 // Hello



// substring()
// let text = "Hello World";

// console.log(text.substring(0, 5));                  // Hello
// console.log(text.substring(6));                     // World
// console.log(text.substring(6, 11));                 // World




// charAt()
// let text = "Hello";

// console.log(text.charAt(0));                    // H
// console.log(text.charAt(1));                    // e
// console.log(text.charAt(4));                    // 0
// console.log(text.charAt(9));                    //



// charCodeAt()
// let text = "Hello";

// console.log(text.charCodeAt(0));                // 72
// console.log(text.charCodeAt(1));                // 101
// console.log(text.charCodeAt(4));                // 111



// at()
// let text = "Hello World";

// console.log(text.at(0));                    // H
// console.log(text.at(1));                    // e
// console.log(text.at(-1));                   // d
// console.log(text.at(-5));                   // W








// ================================================================
// ======================= REPLACE METHODS =======================

// replace()
// let text = "Hello World Hello";

// console.log(text.replace("Hello", "Hi"));       // Hi World Hello



// replaceAll()
// let text = "Hello World Hello";

// console.log(text.replaceAll("Hello", "Hi"));        // Hi World Hi








// ================================================================
// ========================= TRIM METHOD =========================

// trim()
// let text = "    Hello World     ";
// let result = text.trim();

// console.log(result);                    // "Hello World"
// console.log(result.length);             // 11
// console.log(text.length);               // 17



// trimStart()
// let text = "    Hello World     ,welcome";
// let result = text.trimStart();

// console.log(result);                // Hello World     ,welcome
// console.log(text);                  //     Hello World     ,welcome



// trimEnd()
// let text = "    Hello World     ";
// let result = text.trimEnd();

// console.log(result);                //     Hello World
// console.log(text);                  //     Hello World








// ================================================================
// ========================= PAD METHODS =========================

// padStart()
// let text = "5";

// console.log(text.padStart(3, "0"));             // 005
// console.log(text.padStart(5, "0"));             // 00005
// console.log(text.padStart(3, "*"));             // **5



// padEnd()
// let text = "5";

// console.log(text.padEnd(3, "0"));               // 500
// console.log(text.padEnd(5, "0"));               // 50000
// console.log(text.padEnd(3, "*"));               // 5**








// ================================================================
// ==================== SPLIT & REPEAT METHODS ====================

// split()
// let text = "Apple,Banana,Mango";

// console.log(text.split(","));           // [ 'Apple', 'Banana', 'Mango' ]


// let text = "Hello World How Are You";

// console.log(text.split(" "));           // [ 'Hello', 'World', 'How', 'Are', 'You' ]


// let text = "Hello";

// console.log(text.split(""));            // [ 'H', 'e', 'l', 'l', 'o' ]



// repeat()
// let text = "-";

// console.log(text.repeat(20));           // --------------------








// ================================================================
// ======================= CONVERT METHODS =======================

// toString()
// let num = 25;
// let result = num.toString();

// console.log(typeof (num));                  // number
// console.log(typeof (result));               // string


// With different bases
// let num = 255;

// console.log(num.toString(2));          // 11111111 -> (binary)
// console.log(num.toString(8));          // 377      -> (octla)
// console.log(num.toString(16));         // ff       -> (hexadecimal)