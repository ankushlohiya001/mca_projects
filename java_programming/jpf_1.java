import java.util.Scanner;

public class jpf_1 {
  static int factorial(int num){
    return num < 2 ? 1 : num * factorial(num - 1);
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter a num: ");
    int num = sc.nextInt();
    int fact = factorial(num);
    System.out.println("Factorial of "+num+" is "+ fact);
  }
}
