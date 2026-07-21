// ============================ SYNTAX ============================
// class CustomError extends Error {
//   constructor(message) {
//     super(message);                     // pass message to parent Error class
//     this.name = "CustomError";          // give it a custom name
//   }
// }





// ================================================================
// =========================== EXAMPLE ============================
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age) {
  if (age < 0) {
    throw new ValidationError("Age cannot be negative!");
  }
  if (age > 150) {
    throw new ValidationError("Age seems unrealistic!");
  }
  return true;
}

try {
  validateAge(-5);
} catch (error) {
  console.log(error.name);                  // "ValidationError"
  console.log(error.message);               // "Age cannot be negative!"
}