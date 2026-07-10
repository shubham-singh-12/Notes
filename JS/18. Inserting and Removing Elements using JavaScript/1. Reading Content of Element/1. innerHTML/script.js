// ====================================================================== innerHTML =======================================================================
let box = document.querySelector(".box");
let container = document.querySelector(".container");



// ============================ SYNTAX ============================
element.innerHTML;                          // for read
element.innerHTML = "html";                 // for write



// =========================== EXAMPLE ============================
// Reading innerHTML
console.log(box.innerHTML);                 // Hey I am a box

// Reading container's innerHTML
console.log(container.innerHTML);               
//         <div class="box">Hey I am a box</div>
// Gives us the full HTML inside the container

//  Writting InnerHTML -> Changes the content
box.innerHTML = "Hey I am <b>Shubham</b>";
// renders bold text ✅