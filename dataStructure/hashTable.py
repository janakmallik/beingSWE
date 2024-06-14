# Introduction to Hashing
# Hashing is the process of converting data of any size into a fixed-size value, typically 
# called a hash code or hash value. This is done using a hash function. The output is 
# usually a fixed length string of characters.

# A hash function 
# h takes an input 
# x (usually a string or a number) and returns a fixed-size string of bytes. The output, 
# often in the form of a hexadecimal number, is known as the hash value or digest.

# Collision Resistance: It should be hard to find two different inputs that hash to the 
# same output.

# Cryptographic Hash Functions, These are designed to be secure against cryptographic attacks

# Applications of Hashing:
# Data Integrity: Hash functions ensure data integrity by producing a hash value that can 
# be checked to ensure data has not been altered.

# Password Storage: Passwords are stored as hashes. When a user logs in, the password is 
# hashed and compared to the stored hash.

# Digital Signatures: Hash functions are used in digital signatures to ensure the 
# authenticity and integrity of a message.

# Hash Tables: A data structure that uses hash functions to map keys to values, providing 
# efficient data retrieval.

# What is a Hash Table?
# A hash table is a data structure that maps keys to values for efficient lookup. It uses 
# a hash function to compute an index into an array of buckets or slots, from which the 
# desired value can be found.

# Collision Handling Techniques
# Chaining: Use a linked list at each bucket to store multiple items.
# Open Addressing: Find another spot in the table (using methods like linear probing, 
# quadratic probing, or double hashing).

