// ===================================================================== beforebegin =====================================================================


//============================= SYNTAX=============================
// element.insertAdjacentHTML("beforebegin", newElement);
// element.insertAdjacentHTML("beforebegin", "content for new element");


// =========================== EXAMPLE ============================
let container = document.querySelector(".container");

// Create new element, set attributes & inner html
let newDiv = document.createElement("div");
newDiv.setAttribute("style", "color: red");
newDiv.innerHTML = "<b>beforebegin</b> — I am before container</div>";

// beforebegin -> inserts BEFORE the container (as sibling)
container.insertAdjacentElement("beforebegin", newDiv);
