// ========================================================================= POST =========================================================================

// ============================= POST =============================
await fetch("https://api.example.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        name: "Shubham"
    })
});