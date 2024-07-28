/*
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not.
*/

const prompt = require("prompt-sync")();
const url = prompt("Enter the url for validation:");

let regEX = /^[http:\/\/|https:\/\/](?:[a-zA-Z0-9]|[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\])+\.(?:[a-zA-Z])/
const result = regEX.test(url);
if(result){
    console.log("Url is validated, matched all conditions.")
}else{
    console.log("Inalid - Url, conditions ot met");
}



