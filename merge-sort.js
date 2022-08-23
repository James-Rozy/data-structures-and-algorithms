/*
pseudocode:
- sort the left half of the array (assuming n > 1)
- sort the right half of the array (assuming n > 1)
- merge the two halves together
*/

const merge = (left = [], right = []) => {
  const workingArr = []; // for storing sorted values

  // keep sorting until left and right are empty
  while (left.length > 0 && right.length > 0) {
    // sort the arrays in ascending order by pushing the lowest value onto the working array
    if (left[0] < right[0]) {
      workingArr.push(left.shift());
    } else {
      workingArr.push(right.shift());
    }
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
  const arr47 = [
    39, 58, 93, 10, 23, 87, 24, 55, 94, 38, 75, 80, 11, 43, 19, 47, 2, 32, 5,
    79, 84, 3, 97, 43, 19, 88, 24, 30, 13, 56, 23, 27, 8, 65, 99, 69, 78, 97,
    81, 49, 71, 27, 31, 23, 79, 44, 16,
  ];

  console.log("Merge sort an array of size 6:  " + mergeSort(arr6));
  console.log("Merge sort an array of size 10:  " + mergeSort(arr10));
  console.log("Merge sort an array of size 47:  " + mergeSort(arr47));
})();
