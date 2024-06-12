#include <iostream>
#include <string>

using namespace std;

class PalindromeChecker {
public:
    // Method to check if a string is a palindrome
    bool isPalindrome(const string &input) const {
        // Base cases: if the string is empty or has only one character, it's a palindrome
        if (input.length() == 0 || input.length() == 1) {
            return true;
        }

        // Recursive case: check the first and last characters
        if (input[0] == input[input.length() - 1]) {
            // Remove the first and last characters and check the remaining substring
            return isPalindrome(input.substr(1, input.length() - 2));
        }

        // If the first and last characters don't match, it's not a palindrome
        return false;
    }
};

int main() {
    // Create an instance of PalindromeChecker
    PalindromeChecker checker;

    // Test the isPalindrome method with various inputs
    string testInputs[] = {"racecar", "madam", "hello", "level", "world", ""};

    for (const string &input : testInputs) {
        cout << "Is \"" << input << "\" a palindrome? " << (checker.isPalindrome(input) ? "Yes" : "No") << endl;
    }

    return 0;
}
