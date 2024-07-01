#include <bits/stdc++.h>
using namespace std;

// virtual keyword make this dynamic dispatch
// thats mean when its overwriten this can direct to the correct function
// vitual cost additonal memory to store v-table, and addional everytime we call
// this function its check where this is asked from, total two extra cost
class myEntity {
 public:
  virtual string getName() { return "this is entity"; }
};

// subclass of entity class()
class newPlayer : public myEntity {
  // get varibale to store a name
 private:
  string newName;

  // a constructor to specify a name
 public:
  newPlayer(const string& name) : newName(name) {}

  // a method to return this name
  // the override is added, isnt required as it works without this
  string getName() override { return newName; }
};

void pirntName(myEntity* anyEntity) {
  cout << anyEntity->getName() << endl;
}

int main() {

  myEntity* football = new myEntity();
  cout << football->getName() << endl;
  pirntName(football);

  newPlayer* janak = new newPlayer("janak mallik");
  cout << janak->getName() << endl;
  cout << "newPlayer - ";
  pirntName(janak);

  myEntity* cricket = janak;
  cout << cricket->getName() << endl;

  // cin.get();
}

