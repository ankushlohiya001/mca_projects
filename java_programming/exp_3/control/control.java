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

        userDefinedMethods();
    }

}
