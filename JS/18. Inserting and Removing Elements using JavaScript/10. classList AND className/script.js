// ================================================================ className & classList ================================================================


// ============================ SYNTAX ============================
// element.className;                      // read -> "contain red bg-green"
// element.className = "value";            // write -> replace ALL classes ⚠️

// element.classList;                      // get all classes
// element.classList.add("name");          // add a class
// element.classList.remove("name");       // remove a class
// element.classList.toggle("name");       // add if missing, remove if present
// element.classList.contain("name");      // check if class exists -> true/false




// =========================== EXAMPLE ============================
let container = document.querySelector(".container");


// className -> all classes as one string
console.log(container.className);
// container red bg-green


// classList -> smart list of classes
console.log(container.classList);
// DOMTokenList(3) ['container', 'red', 'bg-green', value: 'container red bg-green']


// Add a new class
container.classList.add("shubham");
console.log(container.classList);
// DOMTokenList(4) ['container', 'red', 'bg-green', 'shubham', value: 'container red bg-green shubham']


// Remove a class
container.classList.remove("red");
console.log(container.classList);
// DOMTokenList(3) ['container', 'bg-green', 'shubham', value: 'container bg-green shubham']


// Contains -> check if class exists
console.log(container.classList.contains("bg-green"));      // true ✅
console.log(container.classList.contains("red"));           // false ❌


// Toggle -> add if missing, remove if present
container.classList.toggle("red");
// "red" was missing -> so it ADDS it ✅
console.log(container.classList.contains("red"));           // true ✅

container.classList.toggle("red");
// "red" is present -> so it REMOVES it
console.log(container.classList.contains("red"));           // false ❌