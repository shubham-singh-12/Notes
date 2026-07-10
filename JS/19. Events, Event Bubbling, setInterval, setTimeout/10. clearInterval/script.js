// =================================================================== clearInterval() ====================================================================


// =========================== EXAMPLE ============================
let box = document.querySelector(".box");
let cancelButton = document.querySelector("#stopBtn");


// Function to generate a random color
function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// =================== Apply Interval (2000 ms) ===================
let boxColor = setInterval(function () {
  box.style.backgroundColor = randomColor();
}, 1000);

// ============== clearInterval() by click on Button ==============
cancelButton.addEventListener("click", function() {
    clearInterval(boxColor);

    box.textContent = "Disco Stopped! 🛑"
    box.style.backgroundColor = "transparent";
})
