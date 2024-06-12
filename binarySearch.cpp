public static int binarySearch(int[] A, int left, int right, int x) {
    if (left > right) {
        return -1;
    }

    int mid = (left + right) / 2;

    if(x == A[mid]) {
        return mid;
    }

    if(x < A[mid]) {
        return binarySearch(A, mid+1, right, x);
    }

    return binarySearch(A, mid+1, right, x);
}