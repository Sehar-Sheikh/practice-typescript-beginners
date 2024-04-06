// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
// so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces.

// Store the person's name with whitespace characters
let personNameWithWhitespace: string = "\t \n Sehar Sheikh \n \t";

// Print the name with whitespace
console.log("Name with whitespace:");
console.log("'" + personNameWithWhitespace + "'");

// Remove whitespace from the name
let strippedName: string = personNameWithWhitespace.trim();

// Print the stripped name
console.log("\nName after stripping whitespace:");
console.log("'" + strippedName + "'");


