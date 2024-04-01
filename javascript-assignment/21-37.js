// 21. Check if a number is divisible by 7 or not
function isDivisibleBy7(number) {
    if (number % 7 === 0) {
        return true;
    } else {
        return false;
    }
}

// 22. Check if a number is a multiple of 3 or not
function isMultipleOf3(number) {
    if (number % 3 === 0) {
        return true;
    } else {
        return false;
    }
}

// 23. Check if a number is positive or not
function isPositive(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}

// 24. Check if a number is a 3-digit number or not
function is3DigitNumber(number) {
    if (number >= 100 && number <= 999) {
        return true;
    } else {
        return false;
    }
}

// 25. Print even or odd for a given number
function printEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd");
    }
}

// 26. Print the greatest number in given two numbers
function printGreatestNumber(num1, num2) {
    console.log("The greatest number is: " + Math.max(num1, num2));
}

// 27. Print the least number given two numbers
function printLeastNumber(num1, num2) {
    console.log("The least number is: " + Math.min(num1, num2));
}

// 28. Print the greatest number in given three numbers
function printGreatestNumberThree(num1, num2, num3) {
    console.log("The greatest number is: " + Math.max(num1, num2, num3));
}

//29. Print the least number in given three numbers
function printLeastNumberThree(num1, num2, num3) {
    console.log("The least number is: " + Math.min(num1, num2, num3));
}

//30. Print the given 3 numbers in ascending order
function printNumbersInAscending(num1, num2, num3) {
    let numbers = [num1, num2, num3];
    numbers.sort(function(a, b) {
        return a - b;
    });
    console.log("Numbers in ascending order:", numbers);
}

// 31. Print the given 3 numbers in descending order
function printNumbersInDescending(num1, num2, num3) {
    let numbers = [num1, num2, num3];
    numbers.sort(function(a, b) {
        return b - a;
    });
    console.log("Numbers in descending order:", numbers);
}

// 32. JavaScript Program to find largest of Three Numbers
function findLargestOfThree(num1, num2, num3) {
    return num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
}

// 33. JS Program check if a number is divisible by 7 or not using a ternary operator
function isDivisibleBy7Ternary(number) {
    return number % 7 === 0 ? true : false;
}

// 34. JS Program to check if a number is multiple of 3 or not using a ternary operator
function isMultipleOf3Ternary(number) {
    return number % 3 === 0 ? true : false;
}

// 35. Write a program to check if a number is positive or not using a ternary operator
function isPositiveTernary(number) {
    return number > 0 ? true : number === 0 ? "Zero" : false;
}

// 36. JS Program to check if a number is 3-digit numbers or not using a ternary operator
function is3DigitNumberTernary(number) {
    return (number >= 100 && number <= 999) ? true : false;
}

// 37. Write a program to print even or odd for a given number using a ternary operator
function printEvenOrOddTernary(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(isDivisibleBy7(14));            // Output: true
console.log(isMultipleOf3(9));              // Output: true
console.log(isPositive(-5));                // Output: false
console.log(is3DigitNumber(123));           // Output: true
printEvenOrOdd(7);                          // Output: 7 is odd
printGreatestNumber(5, 9);                  // Output: The greatest number is: 9
printLeastNumber(5, 9);                     // Output: The least number is: 5
printGreatestNumberThree(1, 2, 3);          // Output: The greatest number is: 3
printLeastNumberThree(1, 2, 3);             // Output: The least number is: 1
printNumbersInAscending(3, 1, 2);           // Output: Numbers in ascending order: [1, 2, 3]
printNumbersInDescending(3, 1, 2);          // Output: Numbers in descending order: [3, 2, 1]
console.log(findLargestOfThree(5, 9, 3));                // Output: 9
console.log(isDivisibleBy7Ternary(14));                   // Output: true
console.log(isMultipleOf3Ternary(9));                    // Output: true
console.log(isPositiveTernary(-5));                       // Output: false
console.log(isPositiveTernary(0));                        // Output: Zero
console.log(isPositiveTernary(7));                        // Output: true
console.log(is3DigitNumberTernary(123));                  // Output: true
console.log(printEvenOrOddTernary(7));                    // Output: Odd




