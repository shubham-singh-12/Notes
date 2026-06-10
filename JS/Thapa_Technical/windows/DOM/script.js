// ======================== DOM NAVIGATION ========================

// // 1. Entire Document

// console.log(document);                  // #document
// console.log(document.documentElement);  // <html> element (root)



// // 2. Go to Parent
// let heading = document.getElementById("heading");

// console.log(heading.parentNode);        // <div id = "container">...</div>
// console.log(heading.parentElement);     // <div id = "container">...</div>



// // 3. Get all children
// let container = document.getElementById("container");

// console.log(container.childNodes);
// // NodeList(9) [text, h1#heading.title, text, p.text, text, p.text, text, ul#list, text]

// console.log(container.children);
// // HTMLCollection(4) [h1#heading.title, p.text, p.text, ul#list, heading: h1#heading.title, list: ul#list]



// // 4. Get first Child
// let container = document.getElementById("container");

// console.log(container.firstChild);                  // #text
// console.log(container.firstElementChild);           // <h1 id="heading" class="title">Hello World</h1>



// // 5. Get last child
// let container = document.getElementById("container");

// console.log(container.lastChild);                   // #text
// console.log(container.lastElementChild);            // <ul id="list">...</ul>



// // 6. Get next sibling
// let heading = document.getElementById("heading");

// console.log(heading.nextSibling);                   // #text
// console.log(heading.nextElementSibling);            // <p class="text">First Paragraph</p>



// // 7. Get previous sibling
// let list = document.getElementById("list");

// console.log(list.previousSibling);                  // #text
// console.log(list.previousElementSibling);           // <p class="text">Second Paragraph</p>



// // 8. Find closest ancestor
// let item = document.querySelector(".item");

// console.log(item.closest("ul"));                    // <ul id = "list">...</ul>
// console.log(item.closest("#container"));            // <div id="container">...</div>
// console.log(item.closest(".title"));                // null





// ======================== DOM SEARCHING =========================

// // 1. Find by ID
// let heading = document.getElementById("heading");

// console.log(heading);                   // <h1 id="heading" class="title">Hello World</h1>



// // 2. Find by Class name
// let text = document.getElementsByClassName("text");

// console.log(text);                  // HTMLCollection(2) [p.text, p.text]
// console.log(text[0]);               // <p class="text">First Paragraph</p>
// console.log(text[1]);               // <p class="text">Second Paragraph</p>



// // 3. Find by Tag name
// let paragraph = document.getElementsByTagName("p");

// console.log(paragraph);                 // HTMLCollection(2) [p.text, p.text]
// console.log(paragraph[0]);              // <p class="text">First Paragraph</p>



// // 4. Find first matching element

// // by id
// let heading = document.querySelector("#heading");
// console.log(heading);                   // <h1 id="heading" class="title">Hello World</h1>

// // by class
// let text = document.querySelector(".text");
// console.log(text);                      // <p class="text">First Paragraph</p>

// // by tag
// let li = document.querySelector("li");
// console.log(li);                        // <li class="item">...</li>



// // 5. Find all matching elements

// // by class
// let texts = document.querySelectorAll(".text");
// console.log(texts);                     // NodeList(2) [p.text, p.text]
// console.log(texts[0]);                  // <p class="text">First Paragraph</p>
// console.log(texts[1]);                  // <p class="text">Second Paragraph</p>

// // by tag
// let items = document.querySelectorAll("li");
// console.log(items.length);              // 3





// =========================== DOM CRUD ===========================

// // 1. Create new element
// let newPara = document.createElement("p");

// console.log(newPara);                   // <p></p>



// // 2. Add element to end of parent
// let newPara = document.createElement("p");
// newPara.textContent = "New Paragraph Added!!!";

// let container = document.getElementById("container");
// container.appendChild(newPara);



// // 3. Remove a child element
// let list = document.getElementById("list");
// let firstItem = list.firstElementChild;

// list.removeChild(firstItem);



// // 4. Set attribute on element
// let heading = document.getElementById("heading");

// heading.setAttribute("class", "newClass");
// // <h1 id="heading" class="newClass" style="color: red">Hello World</h1>

// heading.setAttribute("style", "color: red");

// console.log(heading);



// // 5. Get attribute value
// let heading = document.getElementById("heading");

// console.log(heading.getAttribute("id"));                    // heading
// console.log(heading.getAttribute("class"));                 // title



// // 6. Read or update HTML content
// let container = document.getElementById("container");

// // read
// console.log(container.innerHTML);
// /*
// <h1 id="heading" class="title">Hello World</h1>
// <p class="text">First Paragraph</p>
// <p class="text">Second Paragraph</p>
// <ul id="list">
//     <li class="item">Item 1</li>
//     <li class="item">Item 2</li>
//     <li class="item">Item 3</li>
// </ul>
// */

// // update
// let heading = document.getElementById("heading");
// heading.innerHTML = "<span>Updated Heading!!!</span>"



// // 7. Read or update text content
// let heading = document.getElementById("heading");

// // read
// console.log(heading.textContent);                   // Hello World

// // update
// heading.textContent = "Updated Heading...";



// // 8. Add event listener
// let heading = document.getElementById("heading");

// heading.addEventListener("click", function () {
//     console.log("Heading was clicked");
// });



// // 9. Remove event listener
// let heading = document.getElementById("heading");

// function handleClick() {
//     console.log("Heading was Clicked!!!");
// }

// // add listener
// heading.addEventListener("click", handleClick);

// // remove listener
// heading.removeEventListener("click", handleClick);





// ======================== DOM Iteration =========================

// // 1. forEach with querySelectorAll
// let items = document.querySelectorAll(".item");

// items.forEach(function (item, index) {
//     console.log(`Item ${index}: ${item.textContent}`);
// });

// // OUTPUT:
// // Item 0: Item 1
// // Item 1: Item 2
// // Item 2: Item 3




// // 2. Array.from() — Convert NodeList to Array
// var items = document.getElementsByClassName("item");

// var itemsArray = Array.from(items);

// itemsArray.forEach(function(item) {
//   console.log(item.textContent);
// });
// // OUTPUT:
// // Item 1
// // Item 2
// // Item 3


// var texts = itemsArray.map(function(item) {
//   return item.textContent;
// }); 

// console.log(texts);                 // (3) ['Item 1', 'Item 2', 'Item 3']