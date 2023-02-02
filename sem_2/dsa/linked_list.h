template <typename T> class LinkedList;

template <typename T> class Item {
public:
  T value;
  Item *next, *prev;

  Item(T val) { value = val; }
};

template <typename T> class LinkedList {
public:
  static LinkedList<T> *create() { return new LinkedList<T>(); }

  Item<T> *head, *tail;
  int size;

  LinkedList() { size = 0; }

  void push_back(T val) {
    Item<T> *item = new Item<T>(val);
    if (tail == nullptr) {
      head = tail = item;
    } else {
      tail->next = item;
      item->prev = tail;
      tail = item;
    }
    size++;
  }

  void push_front(T val) {
    Item<T> *item = new Item<T>(val);
    if (head == nullptr) {
      head = tail = item;
    } else {
      head->prev = item;
      item->next = head;
      head = item;
    }
    size++;
  }

  T pop_back() {
    if (tail == nullptr) {
      T t;
      return t;
    } else {
      Item<T> *lst = tail;
      if (head != tail) {
        tail = tail->prev;
        tail -> next = nullptr;
      }else{
        tail = head = nullptr;
      }
      size --;
      return lst -> value;
    }
  }

  T pop_front() {
    if (head == nullptr) {
      T t;
      return t;
    } else {
      Item<T> *fst = head;
      if (head != tail) {
        head = head -> next;
        head -> prev = nullptr;
      }else{
        tail = head = nullptr;
      }
      size --;
      return fst -> value;
    }
  }
};
