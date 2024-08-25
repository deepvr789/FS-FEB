// 38. Write a program to print 1 to 10 numbers using a while loop
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 39. Write a program to print 10 to 1 number using a while loop
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// 40. Write a program to print 5 to 15 numbers using while Loop
let k = 5;
while (k <= 15) {
    console.log(k);
    k++;
}

// 41. Write a program to print 15 to 10 numbers using while Loop
let l = 15;
while (l >= 10) {
    console.log(l);
    l--;
}

// 42. Write a program to print 1 to 10 even numbers using a while loop
let m = 1;
while (m <= 10) {
    if (m % 2 === 0) {
        console.log(m);
    }
    m++;
}

// 43. Write a program to print 1 to 10 odd numbers using while Loop
let n = 1;
while (n <= 10) {
    if (n % 2 !== 0) {
        console.log(n);
    }
    n++;
}

// 44. Write a program to print 1 to 100 numbers using a for loop
for (let num = 1; num <= 100; num++) {
    console.log(num);
}

// 45. Write a program to print 100 to 1 number using a for loop
for (let num = 100; num >= 1; num--) {
    console.log(num);
}

// 46. Write a program to print 50 to 150 numbers using For Loop
for (let num = 50; num <= 150; num++) {
    console.log(num);
}

// 47. Write a program to print 15 to 10 numbers using for Loop
for (let num = 15; num >= 10; num--) {
    console.log(num);
}

// 48. Write a program to print 1 to 10 even numbers using a for loop
for (let num = 1; num <= 10; num++) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

// 49. Write a program to print 1 to 10 odd numbers using For Loop
for (let num = 1; num <= 10; num++) {
    if (num % 2 !== 0) {
        console.log(num);
    }
}

// 50. Write a program to print 1 to 10 numbers using a do while loop
let num1 = 1;
do {
    console.log(num1);
    num1++;
} while (num1 <= 10);

// 51. Write a program to print 10 to 1 number using a do while loop
let num2 = 10;
do {
    console.log(num2);
    num2--;
} while (num2 >= 1);

// 52. Write a program to print 5 to 15 numbers using do while Loop
let num3 = 5;
do {
    console.log(num3);
    num3++;
} while (num3 <= 15);

// 53. Write a program to print 15 to 10 numbers using do while Loop
let num4 = 15;
do {
    console.log(num4);
    num4--;
} while (num4 >= 10);

// 54. Write a program to print 1 to 10 even numbers using a do while loop
let num5 = 1;
do {
    if (num5 % 2 === 0) {
        console.log(num5);
    }
    num5++;
} while (num5 <= 10);

// 55. Write a program to print 1 to 10 odd numbers using do while Loop
let num6 = 1;
do {
    if (num6 % 2 !== 0) {
        console.log(num6);
    }
    num6++;
} while (num6 <= 10);

// 56. Write a program first ten multiples of 4 using a while loop (4, 8, 12, 16…)
let num7 = 1;
while (num7 <= 10) {
    console.log(num7 * 4);
    num7++;
}

// 57. Write a program to print a multiplication table of 6 using a while loop.
let num8 = 1;
while (num8 <= 10) {
    console.log(`6 * ${num8} = ${6 * num8}`);
    num8++;
}

// 58. Write a program Factors of 24 using while loop
// (Factors of 24 are 1, 2, 3, 4, 6, 8, 12, 24)
let num9 = 1;
while (num9 <= 24) {
    if (24 % num9 === 0) {
        console.log(num9);
    }
    num9++;
}

// 59. Write a program to print reverse of digits of numbers
let number = 12345;
let reverse = 0;
while (number !== 0) {
    let digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
}
console.log("Reverse of digits:", reverse);

// 60. Write a program to read 5 numbers and print only the even numbers
let numbers = [23, 14, 56, 32, 19];
let i = 0;
while (i < 5) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
    i++;
}

// 61. Write a program to print the Fibonacci number series up to a given number.
// Expected output 17 -: 0 1 1 2 3 5 8 13
let n1 = 0, n2 = 1, nextTerm;
let fibonacciSeries = '';
console.log("Fibonacci Series:");
for (let i = 1; i <= 17; ++i) {
    fibonacciSeries += n1 + ' ';
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
console.log(fibonacciSeries);

// 62. Write a program to check if a given number is an Armstrong number or not.
let number = 153;
let temp = number;
let sum = 0;
let remainder;
while (temp > 0) {
    remainder = temp % 10;
    sum += remainder ** 3;
    temp = Math.floor(temp / 10);
}
if (sum === number) {
    console.log(number + " is an Armstrong number");
} else {
    console.log(number + " is not an Armstrong number");
}


