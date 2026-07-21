// ============================================================== await MUST BE INSIDE async ==============================================================

// WRONG ❌
let data = await getData();             // SyntaxError


// CORRECT ✅
async function main() {
    let data = await getData();
};