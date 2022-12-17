public class loop {
    public static void main(String[] args) {
        int i = 1;
        int j = 10;

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
    }
}
