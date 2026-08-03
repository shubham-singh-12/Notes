// ======================================================================== SWITCH ========================================================================

// ============================ SYNTAX ============================
// switch (condition) {
//     case 1:
//         // Code Block
//         break;

//     case 2:
//         // Code Block
//         break;

//     case 3:
//         // Code Block
//         break;

//     default:
//     // Code Block
// }

// ================================================================
// =========================== EXAMPLE ============================
// let currentDay = "Saturday";

// switch (currentDay) {
//     case "Monday":
//         console.log("Today is Working...");
//         break;

//     case "Tuesday":
//         console.log("Today is Working...");
//         break;

//     case "Wednesday":
//         console.log("Today is NOT WORKING...");
//         break;

//     case "Thursday":
//         console.log("Today is Working...");
//         break;

//     case "Friday":
//         console.log("Today is Working...");
//         break;

//     case "Saturday":
//         console.log("Today is WEEK-END...");
//         break;

//     case "Sunday":
//         console.log("Today is WEEK-END...");
//         break;

//     default:
//         console.log(object);
// }

// ================================================================
// ====================== OPTIMIZED EXAMPLE =======================
// let currentDay = "Monday";

// switch (currentDay) {
//     case "Monday":
//     case "Tuesday":
//     case "Thursday":
//     case "Friday":
//         console.log("Today is WORKING...");
//         break;

//     case "Wednesday":
//         console.log("Today is NOT WORKING...");
//         break;

//     case "Saturday":
//     case "Sunday":
//         console.log("Today is WEEK-END...");
//         break;

//     default:
//         console.log("Day is not INVALID...");
// };