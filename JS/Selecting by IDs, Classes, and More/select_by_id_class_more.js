// =========================================================== Select by IDs, classes, and More ===========================================================

// ======================= getElementById() =======================

// let cons = document.getElementById("redbox");
// cons.style.backgroundColor = "crimson";





// ================================================================
// =================== getElementsByClassName() ===================

// let boxes = document.getElementsByClassName("box");

// console.log(boxes);
// // HTMLCollection [div.box, div.box, div.box, div.box, div.box]

// console.log(boxes[0]);                  // <div class="box">1</div>
// console.log(boxes[1]);                  // <div class="box">2</div>
// console.log(boxes[2]);                  // <div class="box">3</div>
// console.log(boxes[3]);                  // <div class="box">4</div>
// console.log(boxes[4]);                  // <div class="box">5</div>





// ================================================================
// ==================== getElementsByTagName() ====================

// let allDivs = document.getElementsByTagName("div");

// console.log(allDivs);
// // HTMLCollection [div.container, div.box, div.box, div.box]
// // Note: the parent container div also comes ✅

// console.log(allDivs.length);            // 4 (1 Container + 3 boxes)





// ================================================================
// ======================= querySelector() ========================

// // Selects FIRST element with class "box" only ✅
// let cons = document.querySelector(".box");

// cons.style.backgroundColor = "green";
// // Only box 1 turns green (first match)





// ================================================================
// ====================== querySelectorAll() ======================

// let boxes = document.querySelectorAll(".box");

// console.log(boxes);
// // NodeList(5) [div.box, div.box, div.box, div.box, div.box,]

// // Cannot style a NodeList directly ❌
// // boxes.style.backgroundColor = "green";

// // Use forEach loop to apply style on NodeList ✅
// boxes.forEach(function (box) {
//     box.style.backgroundColor = "green";
//     // all 5 boxes turns green
// })

// // OR we use arrow function with forEach
// boxes.forEach(box => {
//     box.style.backgroundColor = "red";
//     // all 5 boxes turns red
// })





// ================================================================
// ===================== getElementsByName() ======================

// let userNames = document.getElementsByName("username");

// console.log(userNames);
// // NodeList(2) [input, input]

// userNames.forEach(input => {
//     input.style.border = "5px solid green";
// });
// // Both username inputs get green border ✅





// ================================================================
// ====================== element.matches() =======================

// let boxes = document.querySelectorAll(".box");

// // Check if box 3 (index 2) matches id selector
// console.log(boxes[2].matches("#redbox"));           // true ✅

// // Check if box 1 (index 0) matches id selector
// console.log(boxes[0].matches("#redbox"));           // false ❌

// // Check if box 1 (index 0) matches class selector
// console.log(boxes[0].matches(".box"));              // true ✅





// ================================================================
// ====================== element.closest() =======================

// let boxes = document.querySelectorAll(".box");
// let box3 = boxes[2];

// // Find closest ancestor that matches ".container"
// console.log(box3.closest(".container"));
// // <div class="container">...</div>;    ✅

// // Find closest ancestor that matches "body"
// console.log(box3.closest("body"));
// // <body>...</body> ✅

// // Find closest ancestor that matches "html"
// console.log(box3.closest("html"));
// // <html>...</html> ✅

// // Find sonething that does not exists in ancestor chain
// console.log(box3.closest(".header"));
// // null ❌





// ================================================================
// ====================== elements.contains() =====================

// let container = document.querySelector(".container");
// let box2 = document.querySelectorAll(".box")[1];
// let body = document.querySelector("body");

// // Does container contains box 2
// console.log(container.contains(box2));          // true ✅

// // Does box 2 contain container
// console.log(box2.contains(container));          // false ❌

// // Does body contains container
// console.log(body.contains(container));          // true ✅

// // Does an element container itself
// console.log(container.contains(container));     // true ✅