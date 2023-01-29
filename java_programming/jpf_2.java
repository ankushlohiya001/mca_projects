import java.util.Scanner;

public class jpf_2 {
  static int reverse(int num){
    int rev = 0;
    while (num > 0) {
      int dig = num % 10;
      num /= 10;
      rev = rev * 10 + dig;
    }
    return rev;
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter a num: ");
    int num = sc.nextInt();
    int rev_num = reverse(num);
    boolean isP = num == rev_num;
    System.out.println("Given num   : "+num);
    System.out.println("Reversed num: "+rev_num);
    System.out.println("Because "+num+(isP?" == ":" != ")+rev_num);
    System.out.println("so, "+num+" is"+(isP?" ":" not ")+"a palindrome");
  }
}
