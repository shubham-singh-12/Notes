// =============================== EXAMPLE ================================
public class Logical_Operators {
    static void main() {

        boolean completedDSA = true;
        boolean completedCore = false;

//        AND --> both must be true
        System.out.println(completedDSA && completedCore);          // false

//        OR --> any one true is enough
        System.out.println(completedDSA || completedCore);          // true

//        NOT --> reverses value
        System.out.println(!completedCore);;                        // true
    }
}
