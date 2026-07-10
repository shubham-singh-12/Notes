// ===================================================================== DATE OBJECT =====================================================================


// ==================== Creating a Date Object ====================

// // 1. Current Date & Time
// const now = new Date();
// console.log(now);                   // 2026-06-18T14:21:14.055Z --> UTC Time Format

// console.log(now.toString());        // Thu Jun 18 2026 19:51:14 GMT+0530 (India Standard Time)

// console.log(now.toLocaleString());  // 18/6/2026, 7:51:14 pm



// // 2. From a Timestamp (milliseconds)
// const timestamp = Date.now();
// console.log(timestamp);                 // 1781796211263

// const date = new Date(1781796178445);
// console.log(date);                      // 2026-06-18T15:22:58.445Z



// // 3. Specific Date -- Recommended Way
// const myDate = new Date(2026, 8, 4, 6, 20, 11, 125);
// console.log(myDate.toString());         // Fri Sep 04 2026 06:20:11 GMT+0530 (India Standard Time)





// ================================================================
// ====================== Get Info from Date ======================

// const now = new Date();


// console.log(now.getFullYear());                 // 2026     -> Full 4 digit year

// console.log(now.getMonth());                    // 5        -> Month (0 indexed, 5 = June)

// console.log(now.getDate());                     // 18       -> Day of month (1 to 31)

// console.log(now.getDay());                      // 4        -> Day of week (0 = Sunday, 1 = Monday, ...)

// console.log(now.getHours());                    // 21       -> hours (0 to 23)

// console.log(now.getMinutes());                  // 2        -> Minutes (0 to 59)

// console.log(now.getSeconds());                  // 34       -> Seconds (0 to 59)

// console.log(now.getTime());                     // 1781796775011    -> Total miliseconds since Unix Epoch





// ================================================================
// ================= Formatting Date for Display ==================

// const now = new Date();

// // toString -> Full date & time in LOCAL TIMEZONE
// console.log(now.toString());                    // TThu Jun 18 2026 21:31:54 GMT+0530 (India Standard Time)

// // toDateString() -> Only date part
// console.log(now.toDateString());                // Thu Jun 18 2026

// // to ISOString() -> Universal UTC format (use for server)
// console.log(now.toISOString());                 // 2026-06-18T16:01:54.965Z

// // toLocalString() -> Best for User Display
// console.log(now.toLocaleString());              // 18/6/2026, 9:31:54 pm

// // toLocalDateString() -> Only Date in Local Format
// console.log(now.toLocaleDateString());          // 18/6/2026

// // toLocalTimeString() -> Only time in Local Foramt
// console.log(now.toLocaleTimeString());          // 9:31:54 pm





// ================================================================
// ====================== REAL LIFE EXAMPLES ======================

// // Get Current Year
// const now = new Date();
// console.log(`Current Year: ${now.getFullYear()}`);                  // Current Year: 2026



// // Get Current Month Name
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// const now = new Date();
// console.log(`Current Month: ${months[now.getMonth()]}`);                    // Current Month: June



// // Get Current Day Name
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// const now = new Date();
// console.log(`Current Day: ${days[now.getDay()]}`);                  // Current Day: Thursday



// // Calculate Age

// const birthYear = 2002;
// const currentYear = new Date().getFullYear();
// const age = currentYear - birthYear;

// console.log(`Age: ${age}`);                 // Age: 26



// // Days until New Year
// const now = new Date();
// const newYear = new Date(now.getFullYear() + 1, 0, 1);

// const diff = newYear - now;
// const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

// console.log(`Days until New Year: ${days}`);        // Days until New Year: 197