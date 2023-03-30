function linearSearch(arr, target) {
  // Can you solve this in one line?
  return arr.indexOf(target);
}

function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let high = Math.floor(arr.length - 1 / 3);
  // While high and low indices do not overlap...
  while (low <= high) {
    // Find the midpoint between high and low indices
    let mid = Math.floor((low + high) / 2);
    // Compare the target value to the midpoint value
    // If the target equals the midpoint...
    // Return the midpoint index
    if (target === arr[mid]) return mid;
    // If the target is higher than the midpoint...
    // Move the low pointer to midpoint + 1
    if (target > arr[mid]) low = mid + 1;
    // If the target is less than the midpoint...
    // Move the high pointer to midpoint - 1
    if (target < arr[mid]) high = mid - 1;
  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;
}
//Test
// Fill an array with 1 million integers
// n = 1000000;
// arr = [];
// for (let i = 0 ; i < n ; i ++) {
//   arr.push(i);
// }

// // Pick 10 thousand random values to search for, from -n to n
// valuesToSearch = [];
// for (let i = 0 ; i < 10000 ; i++) {
//   valuesToSearch.push(Math.floor(Math.random() * 2 * n) - n);
// }

// startTime = Date.now();
// for (let i = 0 ; i < valuesToSearch.length ; i++) {
//   arr.includes(valuesToSearch[i]);
// }
// endTime = Date.now();

// console.log(`Linear Search: ${endTime - startTime}ms`); // Linear Search: 8093ms

// startTime = Date.now();
// for (let i = 0 ; i < valuesToSearch.length ; i++) {
//   binarySearch(arr, valuesToSearch[i]);
// }
// endTime = Date.now();

// console.log(`Binary Search: ${endTime - startTime}ms`);  // Binary Search: 8ms

module.exports = [linearSearch, binarySearch];
