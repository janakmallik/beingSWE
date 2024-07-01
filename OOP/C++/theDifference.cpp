int main() {
  // Create object of the Dog class using pointer
  Dog* dog1 = new Dog();

  // Calling members of the base class
  dog1->eat();
  dog1->sleep();

  // Calling member of the derived class
  dog1->bark();

  delete dog1;  // Remember to delete allocated memory

  return 0;
}

// Approach 1: Using Pointers for Object Creation for Polymorphic Behavior

// Dynamic Memory Management: Using new Dog() allows dynamic memory allocation.
// This can be useful when you need to control the lifetime of the object,
// especially when dealing with polymorphism (not shown in this example but
// relevant in larger programs). Pointer Semantics: Useful when working with
// polymorphic behavior, as pointers allow you to refer to objects of different
// derived types through a base class pointer.

// Memory Management: Requires manual memory management (delete dog1;) to avoid
// memory leaks. Forgetting to delete allocated memory can lead to memory leaks.
// Pointer Semantics: Requires careful handling to avoid issues like dangling
// pointers or accessing deleted objects.

int main() {
  // Create object of the Dog class directly
  Dog dog1;

  // Calling members of the base class
  dog1.eat();
  dog1.sleep();

  // Calling member of the derived class
  dog1.bark();

  return 0;
}

// Approach 2: Direct Object Instantiation for non-Polymorphic Behavior

// Simplicity: No need for manual memory management (new and delete).
// Safer Memory Handling: Objects are created on the stack, so they are
// automatically destroyed when they go out of scope. This reduces the risk of
// memory leaks compared to dynamically allocated objects.

// Polymorphism: While not directly shown in this example, direct object
// instantiation doesn't support polymorphic behavior where you might need to
// refer to derived objects through base class pointers or references.