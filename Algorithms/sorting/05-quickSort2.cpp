#include <bits/stdc++.h>
using namespace std;

void swapElements(int& a, int& b) {
  int temp = a;
  a = b;
  b = temp;
}

int partitionPivot(vector<int>& arr, int low, int high) {
  int randPivotIndex = low + rand() % (high - low + 1);
  swapElements(arr[randPivotIndex], arr[high]);

  int pivot = arr[high];
  int i = low - 1;

  for (int j = low; j < high; ++j) {

    if (arr[j] < pivot) {
      ++i;
      swapElements(arr[i], arr[j]);
    }
  }

  swapElements(arr[i + 1], arr[high]);
  return (i + 1);
}

void quickSort(vector<int>& arr, int low, int high) {
  if (low < high) {
    int currentPivot = partitionPivot(arr, low, high);
    quickSort(arr, low, currentPivot - 1);
    quickSort(arr, currentPivot + 1, high);
  }
}

int main() {

  // seeds the random number generator with the current time, ensuring different
  // random numbers on each run of the program.
  srand(static_cast<unsigned>(time(0)));

  vector<int> arr = {-13, 10, 7, 8, 9, 9, 9, 9, 1, 5, 1000, -12};

  cout << "Unsorted array: ";
  for (int num : arr) {
    cout << num << " ";
  }
  cout << endl;

  quickSort(arr, 0, arr.size() - 1);

  cout << "Sorted array: ";
  for (int num : arr) {
    cout << num << " ";
  }
  cout << endl;

  return 0;
}

// Time Complexity:

// Best Case: Ω (N log (N)), when the pivot chosen at the each
// step divides the array into roughly equal halves. In this case, the algorithm
// will make balanced partitions, leading to efficient Sorting.

// Average Case: θ( N log (N)) Quicksort’s average-case performance is usually
// very good in practice, making it one of the fastest sorting Algorithm. Worst
// Case: O(N2), The worst-case Scenario for Quicksort occur when the pivot at
// each step consistently results in highly unbalanced partitions. When the
// array is already sorted and the pivot is always chosen as the smallest or
// largest element. To mitigate the worst-case Scenario, various techniques are
// used such as choosing a good pivot (e.g., median of three) and using
// Randomized algorithm (Randomized Quicksort ) to shuffle the element before
// sorting.

// Auxiliary Space: O(1), if we don’t consider the recursive stack space. If we
// consider the recursive stack space then, in the worst case quicksort could
// make O(N).

// Advantages of Quick Sort: It is a divide-and-conquer algorithm
// that makes it easier to solve problems. It is efficient on large data sets.
// It has a low overhead, as it only requires a small amount of memory to
// function.

// Disadvantages of Quick Sort: It has a worst-case time complexity of
// O(N2), which occurs when the pivot is chosen poorly. It is not a good choice
// for small data sets. It is not a stable sort, meaning that if two elements
// have the same key, their relative order will not be preserved in the sorted
// output in case of quick sort, because here we are swapping elements according
// to the pivot’s position (without considering their original positions).