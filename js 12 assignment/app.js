// 1. Round a Number
// Round the number 4.7 using Math.round().
let roundnumbers =4.7;
console.log(Math.round(roundnumbers));

// 2. Ceil a Decimal
// Use Math.ceil() to round 5.3 up to the next whole number.
let ceilnumber = 5.3;
console.log(Math.ceil(ceilnumber));

// 3. Floor a Decimal
// Use Math.floor() to round 8.9 down to the previous whole number.
let floornumber = 8.9;
console.log(Math.floor(floornumber));

// 4. Generate a Random Number (0–1)
// Create a function that returns a random number between 0 and 1 using
// Math.random().
function randomNumber() {
    return Math.random();
}
console.log(randomNumber());

// 5. Random Integer (0–9)
// Generate a random whole number between 0 and 9.
function randomNumbers() {
    return Math.floor(Math.random() * 9 )+1;
}
console.log(randomNumbers());

// 6. Random Integer (1–100)
// Generate a random integer between 1 and 100.
function randominteger() {
    return Math.floor(Math.random() * 100 )+1;
}
console.log(randominteger());

// 7. Convert String to Integer
// Use parseInt() to convert the string "42" into a number.
let stringvalue = "42";
let number = parseInt(stringvalue);
console.log(number);

// 8. Convert String to Float
// Use parseFloat() to convert "3.14159" into a floating point number.
let floatvalue = "3.14159";
let fvalue = parseFloat(floatvalue);
console.log(fvalue);

// 9. Round User Input
// Take a number from a form input, round it, and display the result on the page.
function roundUserInput() {
    let userInput = prompt("Enter a decimal number:");
    let roundedValue = Math.round(parseFloat(userInput));
    console.log("Rounded Value: " + roundedValue);
}

// 10. Dice Simulator
// Simulate a 6-sided dice roll (returns a number between 1 and 6).

function diceSimulator() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(diceSimulator());

// 11. Temperature Rounding
// Round a temperature value (e.g., 36.6) to the nearest integer using Math.round().
let temperature = 36.6;
console.log(Math.round(temperature))

// 12. Ceil Shopping Price
// If the product price is $9.25, use Math.ceil() to charge the user $10.
let productprice = "$9.25";
let price = parseFloat(productprice.slice(1));
console.log(Math.ceil(price));

// 13. Parse and Add
// Convert two string numbers like "10" and "5.5" using parseInt() and
// parseFloat() and add them.
let strnumber1 = "1o";
let stenumber2 = "5.5";
let parsentnumber1 = parseInt(strnumber1);
let parsentnumber2 = parseFloat(stenumber2);
let sum = parsentnumber1 + parsentnumber2;
console.log(sum);

// 14. Random Even Number (2–20)
// Generate a random even number between 2 and 20.
let evennumber = Math.floor(Math.random() * 20) +1;
console.log(evennumber*2);

// 15. Check if Parsed Value is a Number
// Write a function that checks if parseInt(input) is a valid number (not NaN).
function isValidNumber(input) {
    let parsedValue = parseInt(input);
    return !isNaN(parsedValue);
}

// 16. Round All Prices in Array
// Given an array of prices with decimals, return a new array with all prices rounded.
let array = [2.5, 4.6, 6.8, 9.7];
console.log(array.map(Math.round));

// 17. Simulate Coin Toss
// Use Math.random() to simulate a coin toss that returns "Heads" or "Tails".
function toss(){
    let tnumber = prompt("Enter your lucky number");
    return Math.random(tnumber) <0.5 ? "Head" : "Tail";
}
console.log(toss())
// 18. Random Integer within Range (Min–Max)
// Create a function that returns a random integer between any two numbers (inclusive).
function randomrange(){
    let min = 6;
    let max = 20;
    return Math.floor(Math.random() * (max - min +1)) + min
}
console.log(randomrange());

// 19. Extract Number from Text
// Use parseFloat() to extract the number from "Total: 45.90 USD".
let fullnumber = "Total: 45.90 USD";
console.log(parseFloat(fullnumber.slice(7,12)));

// 20. Round to Nearest 0.5
// Given a decimal number, round it to the nearest 0.5 (e.g., 4.3 → 4.5, 4.1 → 4.0).
let roundnumber = 0.5;
console.log(Math.round(roundnumber));


