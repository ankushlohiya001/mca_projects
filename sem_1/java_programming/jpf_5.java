class Monkey{
  void walk(){
    System.out.println("took step, jumps, jumps and move backwards");
  }
}

class Human extends Monkey{
  void walk(){
    System.out.println("forbids and yells.");
  }
}

public class jpf_5 {
  public static void main(String[] args) {
    Monkey m = new Monkey();
    System.out.println("Monkey walk on asking: ");
    m.walk();
    System.out.println("Human walk on asking: ");
    Human h = new Human();
    h.walk();
  }
}
