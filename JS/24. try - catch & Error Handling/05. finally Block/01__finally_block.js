// ==================================================================== finally BLOCK =====================================================================

// ============================ SYNTAX ============================
// try {
//     // Risky Code
// } catch (error) {
//     // Handle Error
// } finally {
//     // Always runs
// }


// =========================== EXAMPLE ============================
function processData(data) {
    console.log("STARTING PROCESS....");

    try {
        if (!data) {
            throw new Error("No data provided!");
        }
        console.log(`Processing: ${data}`);
    } catch (err) {
        console.log(`Error: ${err.message}`);
    } finally {
        console.log(`Process finished -- cleanup done 🧹`);
    }
};

processData("Hello");
console.log("====================");
processData(null);