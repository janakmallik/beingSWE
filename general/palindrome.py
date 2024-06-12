def is_palindrome(input_string):
    # Convert the input string to lowercase and remove non-alphanumeric characters
    input_string = ''.join(char.lower() for char in input_string if char.isalnum())
    # Compare the original string with its reverse
    return input_string == input_string[::-1]

# Test the function
print(is_palindrome("A man, a plan, a canal: Panama"))  # True
print(is_palindrome("race a car"))                     # False
