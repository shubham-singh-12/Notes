// ======================================================================== VARIABLE NAMING RULES ========================================================================


// ============================ Case Sensitive ============================

//void main() {
//    int weight = 80;        // variable 1 (First letter --> Small)
//    int Weight = 90;        // variable 2 (First letter --> Capital)
//
//    System.out.println(weight);         // OUTPUT: 80
//    System.out.println(Weight);         // OUTPUT: 80
//}





// ========================================================================
// ========================== Starting Character ==========================

//int age = 5         // lowercase letter ✅
//int Age = 5;        // Uppercase letter ✅
//int _age = 5;       // Underscore ✅
//int $age = 5;       // Dollar sign ✅
//
//int 1age = 5;       // Cannot start with digit ❌





// ========================================================================
// ======================== Subsequent Characters =========================
//int age1 = 5;               // digit at end ✅
//int age_1 = 5;              // underscore in middle ✅
//int age$1 = 5;              // dollar in middle ✅
//int my_age = 5;             // underscore in middle ✅





// ========================================================================
// ========================= No Reserved Keywords =========================
//int class = 5;              // ERROR - class is a reserved keyword ❌
//int static = 5;             // ERROR - static is a reserved keyword ❌
//int void = 5;               // ERROR - void is a reserved keyword ❌
//int age = 5;                // VALID - age is not a keyword ✅





// ========================================================================
// ================================ Length ================================
// // Bad - not meaningful ❌
//int a = 5;
//int b = 10;
//int c = 15;
//
// // Good - meaningful names ✅
//int englishMarks = 5;
//int mathMarks = 10;
//int scienceMarks = 15;