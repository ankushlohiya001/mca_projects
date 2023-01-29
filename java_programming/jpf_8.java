interface User{
  public void use();
}

interface Maker{
  public void make();
}

interface UserMaker extends User, Maker{

}

class Human implements UserMaker{
  public void make(){
    System.out.println("making.");
  }

  public void use(){
    System.out.println("using.");
  }
}

public class jpf_8 {
  public static void main(String[] args) {
    UserMaker r = new Human();
    r.make();
    r.use();
  }
}
