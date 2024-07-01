import time


def fibonacci_recursive(n, memo):
  if memo is None:
    memo = {}

  # Base cases
  if n == 0:
    return 0
  elif n == 1:
    return 1

  if n in memo:
    # print(f"escaped form in memo at - {n}")
    return memo[n]

  # print(f"Found in memo at - {n}")
  memo[n] = fibonacci_recursive(n - 1, memo) + fibonacci_recursive(n - 2, memo)

  return memo[n]


def print_memo(memo):
  print("Memoization table:")
  for key, value in memo.items():
    print(f"{key}: {value}")


n = 40
memo = {}
result = fibonacci_recursive(n, memo)

print(f"Fibonacci number for {n} is {result}")
print_memo(memo)

print(f"-------------------------------------------------")


# another approach
def nonRecurFibonacci(n):
  fib = [0] * (n + 1)

  if n > 0:
    fib[1] = 1

  for i in range(2, n + 1):
    fib[i] = fib[i - 1] + fib[i - 2]

  return fib[n]


n = 10
print(f"Fibonacci number for {n} is {nonRecurFibonacci(n)}")
print(f"-------------------------------------------------")
import time


def fibonacci_tabulation(n):
  # Initialize a table to store Fibonacci numbers
  fib = [0] * (n + 1)

  fib[0] = 0
  if n > 0:
    fib[1] = 1

  # Compute Fibonacci numbers from bottom up
  for i in range(2, n + 1):
    fib[i] = fib[i - 1] + fib[i - 2]

  return fib[n]


# Test the function
n = 100
start_time = time.time()
fib_result = fibonacci_tabulation(n)
end_time = time.time()

print(f"Fibonacci number for {n} is {fib_result}")
print(f"Elapsed time: {end_time - start_time} seconds")
