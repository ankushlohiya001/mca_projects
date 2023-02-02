interface Reader{
  public void read();
}

interface Writer{
  public void write();
}

class Human implements Reader, Writer{
  public void write(){
    System.out.println("writing.");
  }

  public void read(){
    System.out.println("reading.");
  }
}

public class jpf_7 {
  public static void main(String[] args) {
    Reader r = new Human();
    r.read();
    Writer w = new Human();
    w.write();
  }
}
