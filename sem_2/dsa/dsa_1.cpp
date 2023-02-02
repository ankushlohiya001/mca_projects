#include <iostream>
#include "linked_list.h"
using namespace std;

int main() {
  auto l1 = LinkedList<int>::create();

  l1->push_back(34);
  l1->push_front(37);


  auto mv = l1->head;
  while (mv != nullptr) {
    cout << mv->value << endl;
    mv = mv->next;
  }
  return 0;
}
