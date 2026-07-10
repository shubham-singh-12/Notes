let btn = document.querySelector("#btn");
let output = document.querySelector("#output");
let count = 0;

// Store function in a variable so we can remove it later
function handleClick() {
  count++;
  output.textContent = `Clicks: ${count}`;

  if (count >= 3) {
    btn.removeEventListener("click", handleClick);
    btn.textContent = "Button disabled ❌";
    btn.style.backgroundColor = "grey";
    console.log("Event listenet remove ✅");
  }
};


// Add the event listener usinf thr named function
btn.addEventListener("click", handleClick);