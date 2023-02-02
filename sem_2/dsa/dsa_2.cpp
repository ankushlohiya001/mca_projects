#include <iostream>

using namespace std;

template<typename T> class Stack{
  static const int max_size = 10;
  public:
  T arr[Stack::max_size];
  int size;

  Stack(){
    size = 0;
  }

  void push(T value){
    if(size < max_size){
      arr[size++] = value;
    }else{
      cout<<"allowed size is over"<<endl;
    }
  }

  T pop(){
    T t;
    if(size > 0){
      T last = arr[size - 1];
      arr[--size] = t;
      size --;
      return last;
    }else{
      return t;
    }
  }
};

int main(){
  auto st = new Stack<int>();
  st->push(23);
  st->push(45);
  // st->push(37);

  for(auto v : st->arr){
    cout<<v<<endl;
  }
  return 0;
}
