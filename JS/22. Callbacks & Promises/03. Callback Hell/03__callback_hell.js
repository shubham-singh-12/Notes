// ==================================================================== CALLBACK HELL =====================================================================

// =========================== EXAMPLE ============================
loadScript("script_1.js", function(script_1) {
    loadScript("script_2.js", function(script_2) {
        loadScript("script_3.js", function(script_3) {
            loadScript("script_4.js", function(script_4) {
                // Deeper and deeper...❌
            });
        });
    });
});