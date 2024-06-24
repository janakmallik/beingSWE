#include <iostream>
#include <vector>

using namespace std;

class Solution {
 public:
  bool predictTheWinner(vector<int>& nums) {
    int n = nums.size();
    vector<vector<int>> dp(n, vector<int>(n, 0));

    for (int i = 0; i < n; ++i) {
      dp[i][i] = nums[i];
    }

    for (int len = 2; len <= n; ++len) {
      for (int i = 0; i <= n - len; ++i) {
        int j = i + len - 1;
        dp[i][j] = max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
      }
    }

    cout << "DP Table:" << endl;
    for (int i = 0; i < n; ++i) {
      for (int j = 0; j < n; ++j) {
        cout << dp[i][j] << "\t";
      }
      cout << endl;
    }

    return dp[0][n - 1] >= 0;
  }
};

// Example usage
int main() {
  Solution solution;
  vector<int> nums1 = {1, 5, 2};
  vector<int> nums2 = {1, 5, 233, 7};

  cout << (solution.predictTheWinner(nums1) ? "true" : "false")
       << endl;  // Output: false
  cout << (solution.predictTheWinner(nums2) ? "true" : "false")
       << endl;  // Output: true

  return 0;
}
