// ======================================================================== PRIMITIVE DATA TYPES ========================================================================


// ======================= Integer Type (Numeric) =======================

// byte --> 1 byte --> range: -128 to 127
//public class Primitive_Data_Type {
//    static void main(String[] args) {
//        byte numOne = 100;              // Valid ✅
//        byte numTwo = 127;              // Valid ✅ (Max value)
//        byte numThree = 500;            // ERROR ❌ - Out of range!
//
//        System.out.println(numOne);     // 100
//        System.out.println(numTwo);     // 127
//        System.out.println(numThree);   // ERROR ❌ (java: incompatible types: possible lossy conversion from int to byte)
//    }
//}



// short --> 2 bytes --> range: -32768 to 32767
//public class Primitive_Data_Type {
//    static void main(String[] args) {
//        short numOne = 500;              // Valid ✅
//        short numTwo = 40000;            // ERROR ❌ — out of range!
//
//        System.out.println(numOne);      // 500
//        System.out.println(numTwo);      // ERROR ❌ (java: incompatible types: possible lossy conversion from int to short)
//    }
//}



// int --> 4 bytes --> Most commonly used
//public class Primitive_Data_Type {
//    static void main(){
//        int numOne = 50000;                 // Valid ✅
//        System.out.println(numOne);         // 50000
//    }
//}



// long --> 8bytes --> for very large numbers
//public class Primitive_Data_Type {
//    static void main() {
//        long numFour = 1234567890L;             // Valid (add L at end) ✅
//        System.out.println(numFour);            // 123456789
//    }
//}





// ==================== Decimal Type (Floating Point) =====================

// float --> 4 bytes --> ~6 - 7 decimal digit precision
//public class Primitive_Data_Type {
//    static void main() {
//
//        float numFive_1 = 3.14f;                // Must add 'f' at end
//        float numFive_2 = 3.142436f;            // 6 decimal place
//
//        System.out.println(numFive_1);          // 3.14
//        System.out.println(numFive_2);          // 3.142436
//    }
//}



// double --> 8 bytes (~15 decimal digit precision)
//public class Primitive_Data_Type {
//    static void main() {
//
//        double numSix = 3.14243546464;          // No suffix needed ✅
//
//        System.out.println(numSix);;            // 3.14243546464
//    }
//}





// ========================================================================
// ============================= Boolean Type =============================
//public class Primitive_Data_Type {
//    static void main() {
//
//        boolean eligibleToVote = true;
//        System.out.println(eligibleToVote);             // true
//    }
//}





// =======================================================================
// =========================== Character Type ============================
//public class Primitive_Data_Type {
//    static void main() {
//
//        char firstChar = 'A';               // Correct declaration ✅
//        System.out.println(firstChar);      // A
//
//        char secondChar = "B";              // Wrong declaration ❌
//        System.out.println(secondChar);     // java: incompatible types: java.lang.String cannot be converted to char
//    }
//}





// =======================================================================