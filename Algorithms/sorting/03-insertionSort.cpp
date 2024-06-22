// Insertion sort is a simple sorting algorithm that works by iteratively
// inserting each element of an unsorted list into its correct position in a
// sorted portion of the list. It is a stable sorting algorithm, meaning that
// elements with equal values maintain their relative order in the sorted
// output.

// Insertion sort is a simple sorting algorithm that works by building a sorted
// array one element at a time. It is considered an “in-place” sorting
// algorithm, meaning it doesn’t require any additional memory space beyond the
// original array.

#include <bits/stdc++.h>
using namespace std;

void insertionSort(int arr[], int n) {
  int i, key, j;

  // start from the 2nd element
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    // Move elements of arr[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }
}

void printArray(int arr[], int n) {
  int i;
  for (i = 0; i < n; i++)
    cout << arr[i] << " ";
  cout << endl;
}

int main() {
  int arr[] = {5, 2, 9, 1, 5, 6};
  int N = sizeof(arr) / sizeof(arr[0]);

  insertionSort(arr, N);
  printArray(arr, N);

  return 0;
}


// Initial array:
// [5, 2, 9, 1, 5, 6]

// Pass 1: (Element 2)
// [5, 2, 9, 1, 5, 6] -> Compare 2 with 5
// [2, 5, 9, 1, 5, 6] -> Swap 2 and 5

// Pass 2: (Element 9)
// [2, 5, 9, 1, 5, 6] -> Compare 9 with 5 (no change needed)

// Pass 3: (Element 1)
// [2, 5, 9, 1, 5, 6] -> Compare 1 with 9
// [2, 5, 9, 9, 5, 6] -> Move 9 to the right
// [2, 5, 5, 9, 5, 6] -> Move 5 to the right
// [2, 2, 5, 9, 5, 6] -> Move 2 to the right
// [1, 2, 5, 9, 5, 6] -> Insert 1 in the correct position

// Pass 4: (Element 5)
// [1, 2, 5, 9, 5, 6] -> Compare 5 with 9
// [1, 2, 5, 9, 9, 6] -> Move 9 to the right
// [1, 2, 5, 5, 9, 6] -> Insert 5 in the correct position

// Pass 5: (Element 6)
// [1, 2, 5, 5, 9, 6] -> Compare 6 with 9
// [1, 2, 5, 5, 9, 9] -> Move 9 to the right
// [1, 2, 5, 5, 6, 9] -> Insert 6 in the correct position

// Sorted array:
// [1, 2, 5, 5, 6, 9]
