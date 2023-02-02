class User{
  int id;
  String email;

  User(int id){
    this.id = id;
    this.email = "not specified";
  }

  User(String email){
    this.id = 0;
    this.email = email;
  }

  User(int id, String email){
    this.id = id;
    this.email = email;
  }

  void displayInfo(){
    System.out.println("Id: "+id+"\nemail: "+email);
  }
}

public class jpf_3 {
  public static void main(String[] args) {
    User u1 = new User(37);
    u1.displayInfo();
    User u2 = new User("ank@ush.com");
    u2.displayInfo();
    User u3 = new User(37, "ank@ush.com");
    u3.displayInfo();
  }
}
