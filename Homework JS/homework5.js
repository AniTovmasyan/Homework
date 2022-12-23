//Task 1
// Given an array. Write a recursive function that removes the first
// element and returns the given array. (without using
// arr.unshift(),assign second element to first, third element to second...)

function removeFirstEl(arr) {
  if (arr.length === 0) {
    return;
  }
  let newArr = arr.slice(1);
  console.log(newArr);
}
removeFirstEl([9, 5, 7, 11]);

//Task 2
// Given an array of nested arrays. Write a recursive function that
// flattens it. (Hint create function that concats arrays).
let newArr1 = [];
function flat(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      flat(arr[i]);
    } else {
      newArr1.push(arr[i]);
    }
  }
}
flat([14, [1, [[[3, []]]], 1], 0]);
console.log(newArr1);

//Task 3
// Given a number. Write a function that calculates its sum of the digits
// and if that sum has more than 1 digit find the sum of digits of that number.
// Repeat that process if needed and return the result.

function sumOfDigits(n) {
  if (n < 10) {
    return n;
  }
  return sumOfDigits((n % 10) + sumOfDigits(parseInt(n / 10)));
}

console.log(sumOfDigits(14));

//Task 4
// Given the list of the following readers: .....
// Output the books sorted by the percent in descending order which
// readStatus is true and add ‘%’ char in the end for percent value.

function Books(book, readStatus, percent) {
  this.book = book;
  this.readStatus = readStatus;
  this.percent = percent;
}

let arr1 = [
  new Books("Catcher in the Rye", true, 40),
  new Books("Animal Farm", true, 20),
  new Books("Solaris", false, 90),
  new Books("The Fall", true, 50),
  new Books("White Nights", false, 60),
  new Books("After Dark", true, 70),
];
let finalArr = arr1
  .filter((per) => per.readStatus === true)
  .sort((a, b) => a.percent - b.percent)
  .map((el) => ({
    book: el.book,
    readStatus: el.readStatus,
    percent: el.percent + "%",
  }));

console.log(finalArr);
