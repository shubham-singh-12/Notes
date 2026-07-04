// =========================================================== Callback Hell (Pyramid of Doom) ============================================================

// =============== Callback hell (Pyramid of Doom) ================
loadScript("script1.js", function(script){
    console.log("Script 1 loaded.");

    loadScript("script2.js", function(script2){
        console.log("Script 2 loaded.");

        loadScript("script3.js", function(script3){
            console.log("Script 3 loaded");

            loadScript("script4.js", function(script){
                console.log("Script 4 loaded");

                // Keeps going deeper and deeper...
                // Pyramid shape ❌ - hard to read, maintain, debug
            });
        });
    });
});