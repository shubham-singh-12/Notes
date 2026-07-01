// ==================================================================== clearTimeout() ====================================================================

let box = document.querySelector(".box");
let cancelBtn = document.querySelector("#cancelBtn");

// ====================== Apply setTimeout() ======================
let boxTimer = setTimeout(() => {
    box.style.color = "crimson";
    box.style.backgroundColor = "lightgreen";
}, 5000);

// ============ Use button to clear applied Timeout() =============
cancelBtn.addEventListener("click", function() {
    clearTimeout(boxTimer);
    box.textContent = "Timeout was cancelled ❌";
});