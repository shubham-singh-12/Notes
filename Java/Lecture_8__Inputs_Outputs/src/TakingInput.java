// ==================================================================== TAKING INPUT / OUTPUT IN JAVA =====================================================================

// ================================ STEP 1 ================================
//import java.util.Scanner;
//
//public class TakingInput {
//    static void main() {
//
//// ================================ STEP 2 ================================
//        Scanner sc = new Scanner(System.in);
//
//// ================================ STEP 3 ================================
//        System.out.print("Enter the value for First Number: ");
//        int firstNum = sc.nextInt();        // Reads Integer
//
//        System.out.print("Enter the value for Second Number: ");
//        int secondNum = sc.nextInt();
//
//        int result = firstNum + secondNum;
//        System.out.println("Result is: " + result);
//
//// ================================ STEP 4 ================================
//        sc.close();
//    }
//}





// ========================================================================
// ======================= Multiple Data Type input =======================
import java.util.Scanner;

public class TakingInput {
    static void main() {

        Scanner sc = new Scanner(System.in);

//        Taking different types of input
        System.out.print("Enter boolean Value: ");
        boolean bool = sc.nextBoolean();

        System.out.print("Enter a short value: ");
        short shortValue = sc.nextShort();

        System.out.print("Enter a float value: ");
        float floatValue = sc.nextFloat();

//        Printing all values
        System.out.println("Boolean: " + bool);
        System.out.println("Short: " + shortValue);
        System.out.println("Float: " + floatValue);

        sc.close();
    }
}