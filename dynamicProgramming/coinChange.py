from typing import List


class Solution:

  def coinChange(self, coins: List[int], amount: int) -> int:
    coins.sort(reverse=True)

    if amount == 0:
      return 0

    print(F'coins after sort - {coins, coins[-1]}')

    coin_count = [0] * len(coins)

    for i in range(len(coins)):
      coin = coins[i]

      while amount >= coin:
        coin_count[i] += 1
        amount -= coin

        if amount == 0:
          return sum(coin_count)
        elif amount < 0:
          return -1

    return -1 if amount < coins[-1] else sum(coin_count)


solution = Solution()

# Example 1
coins1 = [1, 2, 5]
amount1 = 11
print(f"Input: coins = {coins1}, amount = {amount1}")
print(f"Output: {solution.coinChange(coins1, amount1)}")
print()

# Example 2
coins2 = [186, 419, 83, 408]
amount2 = 6249
print(f"Input: coins = {coins2}, amount = {amount2}")
print(f"Output: {solution.coinChange(coins2, amount2)}")
print()

# Example 3
coins3 = [1]
amount3 = 0
print(f"Input: coins = {coins3}, amount = {amount3}")
print(f"Output: {solution.coinChange(coins3, amount3)}")

419 = 14

383 - 186

# correct approach


# class Solution:

#   def coinChange(self, coins: List[int], amount: int) -> int:
#     dp = [amount + 1] * (amount + 1)
#     dp[0] = 0

#     for a in range(1, amount + 1):
#       for coin in coins:
#         if a - coin >= 0:
#           dp[a] = min(dp[a], 1 + dp[a - coin])

#     return dp[amount] if dp[amount] != amount + 1 else -1


print(
    '--------------------------------------------------------------------------------------'
)

class Solution:

  def coinChange(self, coins: List[int], amount: int) -> int:
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0

    for coin in coins:
      for j in range(coin, amount + 1):
        dp[j] = min(dp[j], 1 + dp[j - coin])

    return dp[amount] if dp[amount] != float('inf') else -1
