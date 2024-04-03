//Write a program to print reverse of digits of numbers
//Given number is 1234

let num = 1234;
let reversedNum = '';
while (num != 0) {
    let digit = num % 10;
    reversedNum += digit;
    num = Math.floor(num / 10);
}
console.log('Reverse of the given number: ' + reversedNum);
