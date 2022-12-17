public class control {
    public static void userDefinedMethods() {
        System.out.println("User Defined Funtion");
    }

    public static void main(String[] args) {
        int i = 1;
        int j = 10;

        if (i + j > 10) {
            System.out.println("If Statement");
        }

        if (i > j) {
        } else {
            System.out.println("If else Statement");
        }

        if (i > j) {
        } else if (j < i) {
        } else {
            System.out.println("If else if ladder Statement");
        }

        if (i < j) {
            if (j > i) {
                if (j + i > 10) {
                    System.out.println("Nested If statement");
                }
            }
        }

        switch (j) {
            case 0: {
            }
                break;
            default:
                System.out.println("Switch statement");
                break;
        }

        for (; j < 11;) {
            System.out.println("For loop statement");
            j++;
        }

        String[] names = { "For", "each", "loop", "statement" };
        for (String name : names) {
            System.out.print(name + " ");
        }

        while (i > 0) {
            System.out.println("\n" + "While loop statement");
            i--;
        }

        do {
            System.out.println("Do While loop statement");
        } while (i < 0);

        for (; i < j;) {
            System.out.println("Break statement");
            break;
        }

        for (; i < 1; i++) {
            if (i == 2) {
                continue;
            }
            System.out.println("Continue Statement");
        }
        userDefinedMethods();
    }
}