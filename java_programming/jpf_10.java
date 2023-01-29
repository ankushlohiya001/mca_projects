import java.io.*;

public class jpf_10 {
  public static void main(String[] args) {
    File f1 = new File("txtFile.txt");
    try{
      FileWriter w = new FileWriter(f1);
      w.write("this will be written to file\n");
      w.close();
    }catch(Exception e){
      System.out.println(e);
    }
  }
}
