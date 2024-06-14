#include <iostream>
#include <vector>

const int SIZE = 4;  // Define the size of the hash table

struct data_item {
  int key;
};

// Define the hash table as a vector of data_item pointers
std::vector<data_item*> hash_array(SIZE, nullptr);

int hash_code(int key) {
  // Return a hash value based on the key
  return key % SIZE;
}

void insert(int key) {
  // Create a new data_item using new (dynamic memory allocation)
  data_item* new_item = new data_item;

  new_item->key = key;
  // Initialize other data members if needed

  // Calculate the hash index for the key
  int hash_index = hash_code(key);

  // Handle collisions (linear probing)
  while (hash_array[hash_index] != nullptr) {
    // Move to the next cell
    ++hash_index;
    // Wrap around the table if needed
    // Ensures the index stays within the table size
    hash_index %= SIZE;  //??
  }

  // Insert the new data_item at the calculated index
  hash_array[hash_index] = new_item;
}

int main() {
  // Call the insert function with different keys to populate the hash table
  insert(42);  // Insert an item with key 42
  insert(25);  // Insert an item with key 25
  insert(64);  // Insert an item with key 64
  insert(22);  // Insert an item with key 22

  // Output the populated hash table
  for (int i = 0; i < SIZE; i++) {
    if (hash_array[i] != nullptr) {
      std::cout << "Index " << i << ": Key " << hash_array[i]->key << std::endl;
    } else {
      std::cout << "Index " << i << ": Empty" << std::endl;
    }
  }
  return 0;
}
