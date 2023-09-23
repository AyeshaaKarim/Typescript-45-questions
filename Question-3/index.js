"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "ayesha karim";
//Step no. 1 - LowerCase
let lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
//Step no. 2 - UpperCase
let uppercaseName = personName.toUpperCase();
console.log(uppercaseName);
//Step no. 3 - TitleCase
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
