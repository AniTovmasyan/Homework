//Task 1
// Given an array of integers, find the pair of adjacent elements that has the largest product and
// return that product.
function largestProduct(arr) {
  let n = -Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] * arr[i + 1] > n) {
      n = arr[i] * arr[i + 1];
    }
  }
  return n;
}

console.log(largestProduct([5, 6, -4, 7, 10]));

//Task 2
// Given an array of integers. All numbers are unique. Find the count of missing numbers between
// minimum and maximum elements to make integers sequence.

let arr = [2, 6, 4, 7, 10];
let count;
let arrSort = arr.sort(function (a, b) {
  if (a < b) {
    return -1;
  } else {
    return 1;
  }
});

//console.log(c);
count = Math.max(...arrSort) - Math.min(...arrSort) + 1 - arr.length;
console.log(count);

//Task 3
// Implement built in array sort method using bubble sort algorithm.
let arr1 = [50, -1, 15, 66];
function compareNumbers(a, b) {
  if (a < b) {
    return -1;
  } else {
    return 1;
  }
}
console.log(arr1.sort(compareNumbers));

// //Task 4
//Insert a n positive number. Print the n-st prime number.
function isPrime(n) {
  let num = 1;
  let count = 0;
  let i;
  while (count < n) {
    num = num + 1;
    for (i = 2; i <= num; i++) {
      if (num % i == 0) {
        break;
      }
    }
    if (i == num) {
      count = count + 1;
    }
  }

  console.log(num);
}

console.log(isPrime(2));
