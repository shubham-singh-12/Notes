let keyInput = document.querySelector("#keyInput");
let valueInput = document.querySelector("#valueInput");
let output = document.querySelector("#output");

// =========================== setItem ============================
document.querySelector("#setBtn").addEventListener("click", function () {
  let insertedKey = keyInput.value.trim();
  let insertedValue = valueInput.value.trim();

  if (!insertedKey || !insertedValue) {
    output.textContent = `Please enter both key and value ⚠️`;
    return;
  } else {
    localStorage.setItem(insertedKey, insertedValue);
    output.textContent = `Set: ${insertedKey}, ${insertedValue}`;
    keyInput.value = "";
    valueInput.value = "";
  }
});

// =========================== getItem ============================
document.getElementById("getBtn").addEventListener("click", function () {
  let key = keyInput.value.trim();
  let value = localStorage.getItem(key);

  if (value === null) {
    output.textContent = `❌ Key "${key}" not found in localStorage`;
  } else {
    output.textContent = `✅ Value at "${key}": ${value}`;
  }
});

// ========================== removeItem ==========================
document.getElementById("removeBtn").addEventListener("click", function () {
  let key = keyInput.value.trim();
  localStorage.removeItem(key);
  output.textContent = `✅ Removed key: "${key}"`;
});

// ============================ clear =============================
document.getElementById("clearBtn").addEventListener("click", function () {
  localStorage.clear();
  output.textContent = "✅ All localStorage data cleared!";
});

// ============================= show =============================
document.getElementById("showAllBtn").addEventListener("click", function () {
  if (localStorage.length === 0) {
    output.textContent = "localStorage is empty ⚠️";
    return;
  }

  let allItems = `Total items: ${localStorage.length}<br>`;
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    allItems += `${key} → ${value}<br>`;
  }

  output.innerHTML = allItems;
});
