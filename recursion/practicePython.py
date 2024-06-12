# Handling Multiple Recursions calls

def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)

n = 100
print(fibonacci(n))


# optimized with memoization
# The above implementation can be inefficient for larger values of 
# 𝑛 due to repeated calculations. To optimize, we can use memoization:

def fibonacciMemoization(n, memo={}):
    if n in memo:
        return memo[n]
    if n == 0:
        return 0
    if n == 1:
        return 1
    else:
        memo[n] = fibonacciMemoization(n-1, memo) + fibonacciMemoization(n-2, memo)
        return memo[n]

n = 15
print(fibonacciMemoization(n))

# Recursive Palindrome Check
