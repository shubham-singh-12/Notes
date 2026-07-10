// ======================================================================= append() =======================================================================


// ============================ SYNTAX ============================
// parentEllment.append(newElement);
// parentElement.append("plain text");         // also works with text ✅


// =========================== EXAMPLE ============================
let container = document.querySelector(".container");

// Create new element (using createElement())
let newDiv = document.createElement("div");

// Set it's content (using innerText) & attribute (using setAttribute())
newDiv.setAttribute("class", "new-box");
newDiv.innerHTML = "I have been <b>inserted by <i>Shubham</i></b>"

// Insert it inside the container at the END (using append())
container.append(newDiv);
// newDiv is now the child inside container ✅