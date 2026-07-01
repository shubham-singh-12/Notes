// ==================================================================== TYPE CASTING (Type Conversion) ====================================================================

// ========================= IMPLICIT CONVERSION ==========================
//public class Type_casting {
//    static void main() {
//
//        byte numOne = 127;
//        long newNum = numOne;           // Automatic - no error ✅
//
////        No data loss - smaller fits into bigger easily
//        System.out.println(newNum);     // 127
//    }
//}





// ========================================================================
// ========================= EXPLICIT CONVERSION ==========================
public class Type_casting {
    static void main() {

//        Case 1: Value IS within range -> No data loss
        long valueOne = 123456789;
        int valueTwo = (int) valueOne;          // Explicit case needed
        System.out.println(valueTwo);           // 123456789

//        Case 2: Value is NOT within range -> Data loss!
        long value_1 = 123456789999L;           // Bigger than int range
        int value_2 = (int) value_1;            // Explicit Cast
        System.out.println(value_2);            // -1097261585
    }
}