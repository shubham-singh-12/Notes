// ===================================================================== WHY 2 AWAITS =====================================================================

async function main() {
    let x = await fetch("url");         // await 1 -> wait for response

    let data = await x.json();          // await 2 -> wait for parsing
};