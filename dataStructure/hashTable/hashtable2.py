SIZE = 4  # Define the size of the hash table
class DataItem:
    def __init__(self, key):
        self.key = key
hashArray = [None] * SIZE  # Define the hash table as a list of DataItem pointers
def hashCode(key):
    # Return a hash value based on the key
    return key % SIZE

def insert(key):
    # Create a new DataItem
    newItem = DataItem(key)
    # Initialize other data members if needed
    # Calculate the hash index for the key
    hashIndex = hashCode(key)
    # Handle collisions (linear probing)
    while hashArray[hashIndex] is not None:
        # Move to the next cell
        hashIndex += 1
        # Wrap around the table if needed
        hashIndex %= SIZE

    # Insert the new DataItem at the calculated index
    hashArray[hashIndex] = newItem
# Call the insert function with different keys to populate the hash table
insert(42)  # Insert an item with key 42
insert(25)  # Insert an item with key 25
insert(64)  # Insert an item with key 64
insert(22)  # Insert an item with key 22
# Output the populated hash table
for i in range(SIZE):
    if hashArray[i] is not None:
        print(f"Index {i}: Key {hashArray[i].key}")
    else:
        print(f"Index {i}: Empty")