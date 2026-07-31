// ================================================================== NULLISH COALESCING ==================================================================

// ===================================================== ?? --> ignored null or undefined if present ======================================================
console.log(null ?? "Name");                    // Name
console.log("Name" ?? null);                    // Name
console.log(undefined ?? 12);                   // 12
console.log(12 ?? undefined);                   // 12
console.log("userName" ?? false);               // "unseName"
console.log(true ?? "userName");                // true
console.log();

// ========================================================================================================================================================
// ========================================= || --> ignored false, 0, -0, NaN, null, undefined, "", 0n if present =========================================
console.log(false ?? "Name");                   // false
console.log(0 || "Name");                       // Name
console.log(-0 || "Name");                      // Name
console.log(NaN || "Name");                     // Name
console.log(null || "Name");                    // Name
console.log(undefined || "Name");               // Name
console.log("" || "Name");                      // Name
console.log(0n || "Name");                      // Name
console.log();