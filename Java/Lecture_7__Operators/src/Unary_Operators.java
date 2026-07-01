// =========================================================================== UNARY OPERATORS ============================================================================

// =================== Pre-Increment VS Post-Increment ====================
//public class Unary_Operators {
//    static void main() {
//
//        int a = 10;
//
////        Pre-Increment
//        System.out.println(++a);            // 11
//
////        Post-Increment
//        System.out.println(a++);            // 11
//    }
//}





// ========================================================================
// =================== Pre-Decrement VS Post-Decrement ====================
//public class Unary_Operators {
//    static void main() {
//        int a = 10;
//
////        Pre-Decrement
//        System.out.println(--a);                // 9
//
////        Post-Decrement
//        System.out.println(a--);                // 9
//    }
//}





// ========================================================================
// ====================== Combining Pre/Post Example ======================
//public class Unary_Operators {
//    static void main() {
//        int activeUsers = 100;
//
////        Pre-Increment --> Increment first, then copy
//        int prefix = ++activeUsers;
//        System.out.println(prefix);             // 101
//        System.out.println(activeUsers);        // 101
//
////        Post-Increment -> Copy first, then increment
//        int postFix = activeUsers++;
//        System.out.println(postFix);            // 101
//        System.out.println(activeUsers);        // 102
//    }
//}





// ========================================================================
// =========================== Logical NOT (!) ============================
public class Unary_Operators {
    static void main() {

        boolean isLoggedIn = true;
        System.out.println(isLoggedIn);             // true

        boolean isActive = false;
        System.out.println(!isActive);;             // true
    }
}