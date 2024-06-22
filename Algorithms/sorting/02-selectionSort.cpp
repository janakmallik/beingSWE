// Selection sort is a simple and efficient sorting algorithm that works by
// repeatedly selecting the smallest (or largest) element from the unsorted
// portion of the list and moving it to the sorted portion of the list.

#include <bits/stdc++.h>
using namespace std;

void selectionSort(int arr[], int n) {
  int i, j, minIndex;

  for (i = 0; i < n - 1; i++) {
    minIndex = i;

    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex])
        minIndex = j;
    }

    if (minIndex != i)
      swap(arr[minIndex], arr[i]);
  }
}

void printArray(int arr[], int size) {

  for (int i = 0; i < size; i++) {
    cout << arr[i] << " ";
    // cout << endl;
  }
}

int main() {
  int arr[] = {64, 25, 12, 22, 11};
  int n = sizeof(arr) / sizeof(arr[0]);
  // given array: 64 25 12 22 11

  selectionSort(arr, n);
  cout << "sorted array: ";

  printArray(arr, n);
  // sorted array: 11 12 22 25 64
  return 0;
}
