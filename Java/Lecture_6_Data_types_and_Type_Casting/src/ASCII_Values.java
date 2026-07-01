// ============================================================================= ASCII VALUES =============================================================================

// ================ Mathematical operations on characters =================
public class ASCII_Values {
    static void main() {

//        ASCII value of 'a' = 97
        char firstChar = 'a';

//        Adding 2 to 'a' --> Moves 2 positions forward
        System.out.println(firstChar + 2);              // 99

//        To get character output --> explicitly cast to char
        System.out.println((char)(firstChar + 2));      // c
    }
}