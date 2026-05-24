// =============================================================== return CONTROL STATEMENT ===============================================================


function checkAge(age) {
    if (age >= 18) {
        return "Welcome";
    } else {
        return "Not Allowed";
    }
}

console.log(checkAge(15));                  // Not Allowed
console.log(checkAge(20));                  // Welcome