public class jpf_9 {
  public static void main(String[] args) {
    try {
      int res = 1 / 0;
    } catch (ArithmeticException e) {
      System.out.println(e);
      System.out.println("throwing error!!");
      throw e;
    }finally{
      System.out.println("'Finally' will always run.");
    }
  }
}
