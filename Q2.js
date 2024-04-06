"use strict";
// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.
// Store the person's name in a variable
let Name = "John Doe";
// Print the name in lowercase
console.log("Lowercase: " + Name.toLowerCase());
// Print the name in uppercase
console.log("Uppercase: " + Name.toUpperCase());
// Print the name in titlecase
console.log("Titlecase: " + titleCase(Name));
// Function to convert string to titlecase
function titleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}
