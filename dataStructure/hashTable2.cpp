#include <iostream>
#include <vector>
#define SIZE 4  // Define the size of the hash table

struct DataItem {
  int key;
};

std::vector<DataItem*> hashArray(SIZE, nullptr);
// Define the hash table as a vector of DataItem pointers

int hashCode(int key) {
  // Return a hash value based on the key
  return key % SIZE;
}

void insert(int key) {
  // Create a new DataItem using new (dynamic memory allocation)
  DataItem* newItem = new DataItem;

  newItem->key = key;
  // Initialize other data members if needed

  // Calculate the hash index for the key
  int hashIndex = hashCode(key);

  // Handle collisions (linear probing)
  while (hashArray[hashIndex] != nullptr) {
    // Move to the next cell
    ++hashIndex;
    // Wrap around the table if needed
    // Ensures the index stays within the table size
    hashIndex %= SIZE;  //??
  }

  // Insert the new DataItem at the calculated index
  hashArray[hashIndex] = newItem;
}

int main() {
  // Call the insert function with different keys to populate the hash table

  insert(42);  // Insert an item with key 42
  insert(25);  // Insert an item with key 25
  insert(64);  // Insert an item with key 64
  insert(22);  // Insert an item with key 22

  // Output the populated hash table
  for (int i = 0; i < SIZE; i++) {
    if (hashArray[i] != nullptr) {
      std::cout << "Index " << i << ": Key " << hashArray[i]->key << std::endl;
    } else {
      std::cout << "Index " << i << ": Empty" << std::endl;
    }
  }
  return 0;
}
test