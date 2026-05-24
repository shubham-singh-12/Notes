// =================================================================== SWITCH STATEMENT ===================================================================

// // SYNTAX

// switch (value) {
//     case 1:
//         // Runs if value === 1
//         break;

//     case 2:
//         // Runs if value === 2
//         break;

//     default:
//     // Runs if no Case matches
// }


// EXAMPLE

var day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of week!");                  // Monday
        break;

    case "Sunday":
        console.log("End of week!");
        break;

    default:
        console.log("Middle of week!");
}