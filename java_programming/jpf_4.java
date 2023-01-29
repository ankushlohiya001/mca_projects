class Shape{
  float posX, posY;

  Shape(float x, float y){
    posX = x;
    posY = y;
  }

  void moveTo(float nx, float ny){
    posX = nx;
    posY = ny;
  }

  void display(){
    System.out.println("at: ("+posX+", "+posY+")");
  }
}

class Rect extends Shape{
  float wid, hei;

  Rect(float x, float y, float w, float h){
    super(x, y);
    wid = w;
    hei = h;
  }

  void changeDim(float nw, float nh){
    wid = nw;
    hei = nh;
  }
}

class Sq extends Rect{
  Sq(float x, float y, float s){
    super(x, y, s, s);
  }

  void changeDim(int s){
    super.changeDim(s, s);
  }
}

public class jpf_4 {
  public static void main(String[] args) {
    Sq s1 = new Sq(10, 13, 56);
    s1.changeDim(50);
    s1.display();
    System.out.println(s1.wid);
  }
}
