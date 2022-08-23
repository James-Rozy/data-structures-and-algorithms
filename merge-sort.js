/*
pseudocode:
- sort the left half of the array (assuming n > 1)
- sort the right half of the array (assuming n > 1)
- merge the two halves together
*/

const merge = (left = [], right = []) => {
  const workingArr = []; // for storing sorted values

  while (left.length > 0 && right.length > 0) {
    let minArr = []; // for storing the array with the lowest value

    // sort the arrays in ascending order
    if (left[0] < right[0]) {
      minArr = left;
    } else {
      minArr = right;
    }

    // push the lowest value onto the sorted working array
    workingArr.push(minArr.shift());
  }

  return workingArr.concat(left, right); // merge together the two sorted arrays
};

const mergeSort = (arr = []) => {
  if (arr.length <= 1) return arr; // base case for small arrays that don't need sorting
  const middle = Number(arr.length / 2).toFixed(); // find the middle of the array for splitting
  const left = mergeSort(arr.slice(0, middle)); // sort the left half of the array
  const right = mergeSort(arr.slice(middle, arr.length)); // sort the right half of the array
  return merge(left, right); // merge the two halves together and return
};

const main = (() => {
  const arr6 = [9, 7, 8, 3, 2, 1];
  const arr10 = [42, 12, 7, 90, 8, 78, 43, 71, 21, 76];
  console.log(
    "Merge sort an array of size 6 ([9, 7, 8, 3, 2, 1]):  " + mergeSort(arr6)
  );
  console.log(
    "Merge sort an array of size 10 ([42, 12, 7, 90, 8, 78, 43, 71, 21, 76]):  " +
      mergeSort(arr10)
  );
})();
