// =============================================================== WAYS TO CREATE FUNCTIONS ===============================================================


// 1. Without Parameters & without return

function sum() {
    console.log(3 + 2);
}

sum();                  // 5





// ================================================================

// 2. Without Parameter & with return

function sum_1() {
    return (3 + 2);
}

console.log(sum_1());                   // 5





// ================================================================

// 3. With Parameter & without return

function greet(userName) {
    console.log("Hello " + userName + "!");
}

greet("Shubham");                   // Hello Shubham!
greet("Harsh");                     // Hello Harsh!





// ================================================================

// 4. With Parameter & with return

function add(a, b){
    return a + b;
}

var result = add(3, 2);
console.log(result);                    // 5