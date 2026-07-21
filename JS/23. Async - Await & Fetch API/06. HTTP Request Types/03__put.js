// ========================================================================= PUT ==========================================================================

// ============================= PUT ==============================
await fetch("https://api.example.com/users/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Shubham Updated"
    })
});