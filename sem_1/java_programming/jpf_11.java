import java.io.*;

public class jpf_11 {
  public static void main(String[] args) {
    File f1 = new File("txtFile.txt");
    try{
      FileReader r = new FileReader(f1);
      while(true){
        int c = r.read();
        if(c == -1){
          System.out.println("\nEnd of file.");
          break;
        }
        System.out.print((char) c);
      };
      r.close();
    }catch(Exception e){
      System.out.println(e);
    }
  }
}
