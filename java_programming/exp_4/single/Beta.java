class Alpha {
    public void methodA() {
        System.out.println("Class Alpha");
    }
}

class Beta extends Alpha {
    public static void main(String[] args) {
        Beta b = new Beta();
        b.methodA();
    }
}