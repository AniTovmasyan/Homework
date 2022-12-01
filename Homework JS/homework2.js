//Task 1
//Given two objects. Write a function that performs shallow compare.
function shallowCompare(a, b) {
  let key1 = Object.keys(a);
  let key2 = Object.keys(b);
  if (key1.length !== key2.length) {
    return false;
  }

  for (let key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}
console.log(shallowCompare({ a: 1 }, { a: 1, b: 3 }));

//Task 2
/*
Determine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern
word&quot;) is a word or phrase without a repeating letter.
*/

function isogram(str) {
  str = str.toLowerCase();
  let arr = str.split("");

  arr.sort();
  for (let i = 0; i < str.length - 1; i++) {
    if (arr[i] == arr[i + 1]) return false;
  }
  return true;
}
console.log(isogram("JavaScript"));

//Task 3
/*
Given a number n ( n&gt;= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3,
5, 8 …, ak = ak-1 + ak-2)
*/
function fibonacci(num) {
  let n1 = 0;
  let n2 = 1;
  let temp;

  for (i = 1; i < num; i++) {
    temp = n1 + n2;
    n1 = n2;
    n2 = temp;
  }
  return n2;
}
console.log(fibonacci(10));

//Task 4
/*
Insert a number. Calculate product and sum of the digits of the number. If product is
divisible by the sum, print the quotient, otherwise print the remainder.
*/
function f2(num) {
  sum = 0;
  mul = 1;
  const k = num;
  while (num) {
    sum += num % 10;
    mul *= num % 10;
    num = Math.floor(num / 10);
  }

  if (mul % sum === 0) {
    let quot = mul / sum;
    return "Quotient is" + " " + quot;
  } else if (k === 0) {
    return "Cannot calculate";
  } else {
    let rem = mul % sum;
    return "Remainder is" + " " + rem;
  }
}
console.log(f2(455));

//Task 5
//5Write a program to print X star pattern series.
function starPattern(n) {
  let res = "";
  let num = 0;
  for (let i = 0; i < n; i++) {
    let row = "  ";
    for (let j = 0; j < n; j++) {
      if (j === num || j === n - (num + 1)) {
        row += "*";
      } else {
        row += " ";
      }
    }
    num++;
    res += row + "\n";
  }
  console.log(res);
}
starPattern(8);
