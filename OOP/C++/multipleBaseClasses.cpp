#include <bits/stdc++.h>
using namespace std;

class Collection {};
class Book {};

// A class can be derived from more than one base class.
// The order in which constructors are called. If your code relies on the Book
// portion of CollectionOfBook to be initialized before the Collection part, the
// order of specification is significant.
class CollectionOfBook : public Book, public Collection {
  // New members
};

// VirtualBaseClasses.cpp
class Queue {};
class CashierQueue : virtual public Queue {};
class LunchQueue : virtual public Queue {};
class LunchCashierQueue : public LunchQueue, public CashierQueue {};