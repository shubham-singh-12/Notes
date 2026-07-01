// ========================= ASSIGNMENT OPERATORS =========================

// =========================== Basic Assignment ===========================
//public class Assignment_Operators {
//    int age = 5;                // Assign 5 to age
////    '=' is the assignment operator
//}





// ========================================================================
// =============================== EXAMPLE ================================
public class Assignment_Operators {
    static void main() {
        int ratingPoints = 100;

        ratingPoints += 20;
        System.out.println(ratingPoints);           // 120

        ratingPoints -= 10;
        System.out.println(ratingPoints);           // 110

        ratingPoints *= 2;
        System.out.println(ratingPoints);           // 220

        ratingPoints /= 4;
        System.out.println(ratingPoints);           // 55

        ratingPoints %= 30;
        System.out.println(ratingPoints);           // 25
    }
}
