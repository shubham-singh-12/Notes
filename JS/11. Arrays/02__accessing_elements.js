// ========================================================== ACCESSING ELEMENTS FROM ARRAY ==============================================================


let fruits = ['apple', 'grapes', 'mango'];
console.log(fruits);                    // [ 'apple', 'grapes', 'mango' ]

// Correct way to access elements
console.log(fruits[0]);                 // apple
console.log(fruits[1]);                 // grapes
console.log(fruits[2]);                 // mango

// Wrong way to access elements
console.log(fruits['apple']);           // undefined
console.log(fruits['grapes']);          // undefined
console.log(fruits['mango']);           // undefined