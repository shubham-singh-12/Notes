// ====================================================== POSITION RULE - SPREAD ON RHS, REST ON LHS ======================================================

// =========================== EXAMPLE ============================

// Spread - Always on RHS ✅
let newArr = [...oldArr];               // RHS
let newObj = {...oldObj};               // RHS
functionName(...arr);                   // Spreading values being sent (RHS - like, argument)

// Rest - Always on LHS ✅
let [a, ...rest] = arr;                 // LHS
let {x, ...rest} = obj;                 // LHS
function fn(...rest) {};                // parameter - LHS-like position