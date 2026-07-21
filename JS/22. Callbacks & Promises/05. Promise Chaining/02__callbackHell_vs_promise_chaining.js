// ========================================================== CALLBACK HELL vs PROMISE CHAINING ===========================================================

// Callback Hell ❌
loadScript("script_1.js", function () {
    loadScript("script_2.js", function () {
        loadScript("script_3.js", function () {
            // More and more
        });
    });
});

// Promise Chaining ✅ --> flat, readable
loadScript("script_1.js")
    .then(function () {
        loadScript("script_2.js");
    })
    .then(function () {
        loadScript("script_3.js");
    })
    .catch(function (err) {
        console.log(err);
    });
