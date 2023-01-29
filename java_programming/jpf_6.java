abstract class Osi{
  abstract void physical();
  abstract void dataLink();
  void connect(){
    System.out.println("connected.");
  }
}

class Tcp extends Osi{
  void physical(){
    System.out.println("Hub, Repeater");
  }

  void dataLink(){
    System.out.println("Switch");
  }
}

public class jpf_6 {
  public static void main(String[] args) {
    Tcp t1 = new Tcp();
    t1.physical();
    t1.connect();
  }
}
