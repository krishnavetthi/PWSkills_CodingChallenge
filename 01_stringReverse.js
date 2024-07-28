/* The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of 2 seconds before reversing the string. The reversed string should then be printed as output. */

const prompt = require("prompt-sync")();
let input = prompt("Enter string: ");
let stringReverse = '';
setTimeout(()=>{
    stringReverse=input.split('').reverse().join('');
    console.log(`Reversed Sring is :  ${stringReverse}`);
},2000);