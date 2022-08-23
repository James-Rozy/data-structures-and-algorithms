/* 
pseudocode:
(starting with a sorted array)
repeat until the size of the (sub)array is 0:
  - find the middle index of the current (sub)array
  - if the target is at the middle index, stop
  - if the target is less than the value at the middle index, repeat the search on the left half of the (sub)array
  - if the target is greater than the value at the middle index, repeat the search on the right half of the (sub)array
*/

const binarySearch = (arr = [], left, right, target) => {
  if (left <= right) {
    const middle = Number(left + Math.floor((right - left) / 2));
    if (target === arr[middle]) {
      return middle + 1;
    }
    if (target < arr[middle]) {
      return binarySearch(arr, left, middle - 1, target);
    }
    return binarySearch(arr, middle + 1, right, target);
  }
  return -1;
};

const main = (() => {
  const arr6 = [1, 2, 4, 6, 8, 10];
  console.log(
    "Search arr6 for 8 => The index of 8 is: " +
      binarySearch(arr6, 0, arr6.length - 1, 8)
  );
})();
