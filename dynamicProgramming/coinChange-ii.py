# class solution:
#   def coinChange(self, amount: int, coins: list[int])->int:
#     dp = [[0]*(len(coins)+1) for i in range(amount+1)]
#     dp[0]=[1]*(len(coins)+1)

#     for a in range(1, amount+1)
#       for i in range(len(coins)-1, -1, -1):
#         dp[a][i] += dp[a][i+1]
#         if a - coins[i] >=0:
#           dp[a][i] += dp[a - coins[i]][i]

#     return dp[amount][0]

from typing import List


class Solution:

  def change(self, amount: int, coins: List[int]) -> int:
    dp = [0] * (amount + 1)
    dp[0] = 1

    for coin in coins:
      for x in range(coin, amount + 1):
        dp[x] += dp[x - coin]

    return dp[amount]


# Example usage:
solution = Solution()

# Example 1
coins1 = [1, 2, 5]
amount1 = 5
print(f"Input: coins = {coins1}, amount = {amount1}")
print(f"Output: {solution.change(amount1, coins1)}")  # Output: 4
print()

# Example 2
coins2 = [2]
amount2 = 3
print(f"Input: coins = {coins2}, amount = {amount2}")
print(f"Output: {solution.change(amount2, coins2)}")  # Output: 0
print()

# Example 3
coins3 = [10]
amount3 = 10
print(f"Input: coins = {coins3}, amount = {amount3}")
print(f"Output: {solution.change(amount3, coins3)}")  # Output: 1
