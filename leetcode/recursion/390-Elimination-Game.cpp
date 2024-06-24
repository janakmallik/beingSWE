// remove the first number and every other number afterward

// When n is odd during a right-to-left removal, the remaining elements align
// with what they would be after a left-to-right removal of size n / 2. So, we
// use the same recursive step as if we were removing from the left.

// When removing from the right and n is even, the new sequence start position
// differs slightly because the last element of an even-sized list does not
// change the remaining elements' sequence as it does for an odd-sized list.

class Solution {
 public:
  int eliminationGame(int n, bool left) {
    if (n == 1) {
      return 1;
    }

    if (left || n % 2 == 1) {
      return 2 * eliminationGame(n / 2, !left);
    } else {
      return 2 * eliminationGame(n / 2, !left) - 1;
    }
  }

  int lastRemaining(int n) { return eliminationGame(n, true); }
};

//--------------------------------------------------------------------
//--------------------------------------------------------------------
class Solution {
 public:
  int lastRemaining(int n) {
    return n == 1 ? 1 : 2 * (1 + n / 2 - lastRemaining(n / 2));
  }
};
