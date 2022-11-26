//Task 1
/*
Given a positive integer. Bring the last digit of the number to the beginning. Print the new
number. If the last digit of the inserted number is 0, number remains the same.
*/
function f1 (number) {
    let m1 = number % 10;
    if (m1 == 0 ) {
        return number;
    }
    if (String(Math.abs(number)).charAt(0) == number) {
        return number;
    }
    let n1 = Math.floor(number / 10)
    let output = `${m1}${n1}`
    return output;
}
f1(654);
f1(250);
f1(8);



//Task 2
//Given three numbers. Sort them by the ascending order.
function sort (x, y, z) {
    if (x < y && x <z )
    {
            if (y < z)
            {
                console.log(x + ", " + y + ", " + z);
            }
            else
            {
                console.log(x + ", " + z + ", " + y);
            }
    }
    else if (y < x && y < z)
    {
            if (x < z)
            {
                 console.log(y + ", " + x + ", " + z);
            }
            else
            {
                 console.log(y + ", " + z + ", " + x);
            }
    }
    else if (z < x && z < y)
    {
            if (x < y)
            {
                console.log(z + ", " + x + ", " + y);
            }
            else
            {
                console.log(z + ", " + y + ", " + x);
            }    }
    }
    sort(4, -78, 0);


// Task 3
//Given the following code rewrite it using only two if operators. (Hint: use logical operators).
var n = +prompt();
var i = 0;
var j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)) {
    //n-y zuyg e u mianish
        i += 1;
    console.log("i: " + i)
    
}

if (n % 3 === 0 && n % 10 === 1 ) {
    //n-y 3i bazmapatik e u verjanum e 1ov
        j += 1;
    console.log("j: " + j)
}



// Task 4
/*
Write a program which will compute the area of a rectangular or a triangle after
prompting the user to type the name of the figure name. Also check that entered
numbers are positive.
*/

function area (str, a, h) {

    if (str === "triangle" && a > 0 && h > 0 ) {
       return "Square of the triangle is " + (a * h) / 2
    } if (str === "triangle" && a <= 0 || h <= 0) {
        return "Please enter only positives"
    }
    
     if (str === "rectangle" && a > 0 && h > 0) {
        return "Square of the rectangle is " + a * h;
    } if (str === "rectangle" && a <= 0 || h <= 0) {
        return "Please enter only positives"
    }
}
(area("rectangle", 10, 5));


// Task 5  kisat
/*
Given an object. Invert it (keys become values and values become keys). If there is
more than key for that given value create an array.
*/
let o1 = {
    a: "1",
    b: "2",
    c: "2",
    d: "2"
 }
let k = Object.keys(o1);
let val = Object.values(o1);

function invert(k, ){

   let obj = {};
   
for (let key in val) {
    let count = val.filter(x => x === val[key]).length;
    if(count > 1) {
        obj[val[key]] = []
    } 

}

for(let key in val){

if (obj[val[key]]) {

obj[val[key]].push(k[key]);

}

else{

obj[val[key]] = k[key];

}

}

return obj;

}

console.log(invert(k, val));
