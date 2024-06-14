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

# Python does not perform tail call optimization. Even with tail
# recursion, each recursive call still adds a new frame to the stack. 
# Therefore, for very deep recursions, Python will still raise a
# "RecursionError". 

# Tail Recursive Factorial  
def tail_recursive_factorial(n, accumulator=1):
    if n == 0:
        return accumulator
    else:
        return tail_recursive_factorial(n - 1, n * accumulator)

# Example usage:
print(tail_recursive_factorial(5)) 
print(tail_recursive_factorial(10))


# Non-Tail Recursive Factorial
def non_tail_recursive_factorial(n):
    if n == 0:
        return 1
    else:
        return n * non_tail_recursive_factorial(n - 1)

# Example usage:
print(non_tail_recursive_factorial(5)) 
print(non_tail_recursive_factorial(10))

# Iterative Equivalent
def iterative_factorial(n):
    accumulator = 1
    while n > 0:
        accumulator *= n
        n -= 1
    return accumulator

# Example usage:
print(iterative_factorial(5)) 
print(iterative_factorial(10))
    



# treeees
class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

def insert(head, key):
    
<<<<<<< Updated upstream



=======
    
    
    
    
>>>>>>> Stashed changes
