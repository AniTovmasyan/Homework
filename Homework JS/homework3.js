//Task 1
// Given an array of numbers which is almost sorted in ascending order.  Find the index
// where sorting order is violated.

function findIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return arr.indexOf(arr[i + 1]);
    }
  }
  return -1;
}
console.log(findIndex([-9, -4, -4, 3, 12, 4, 5]));

//Task 2
// Given an array consisting from the arrays of numbers (like a two-dimensional array).
// Find sum of each row and print them as an array

function sumOfEachRow(arr) {
  let rows = arr.length;
  let cols = arr[0].length;
  let arr1 = [];
  for (let i = 0; i < rows; i++) {
    let sumRow = 0;
    for (let j = 0; j < cols; j++) {
      sumRow = sumRow + arr[i][j];
    }
    arr1.push(sumRow);
  }
  console.log(arr1);
}
console.log(
  sumOfEachRow([
    [3, 4, 5],
    [1, 0, 0],
    [4, 5, 4],
    [8, 8, -1],
  ])
);

//Task 3
// Given an array of integers. Write a function that return new array from first array,
// where removed even numbers, and odd numbers was multiplied with new array length

function f(arr) {
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num % 2 !== 0) {
      odd.push(num);
    }
  }
  let arr1 = [];
  for (let j = 0; j < odd.length; j++) {
    let mul = odd[j] * odd.length;

    arr1.push(mul);
  }

  console.log(arr1);
}
console.log(f([5, 4, 78, 0, -3, 7]));

//Task 5
// Given an array of numbers. Print frequency of each unique number. (Frequency is the
// count of particular element divided by the count of all elements)

function frequency(arr) {
  let frEl = [arr.length]; //tarreri hachax. pahelu hamar
  let visited = -1; //vor nuyn tarry noric chhashvi

  for (let i = 0; i < arr.length; i++) {
    //i arrayic tarr yntrelu hamar
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      //j yntrvac tarry arrayi myus masi het ham. hamar
      if (arr[i] == arr[j]) {
        count++;

        frEl[j] = visited; //qani vor hashve enq ays tary
      }
    }
    if (frEl[i] != visited) frEl[i] = count;
  }

  for (let i = 0; i < frEl.length; i++) {
    if (frEl[i] != visited) console.log(arr[i] + ": " + frEl[i] / arr.length);
  }
}
console.log(frequency([1, 1, 2, 2, 3]));
