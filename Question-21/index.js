"use strict";
/* They think of something you could store in a TypeScript Object.
Write a program that creates Objects containing these items. */
const Scooty = {
    name: "Bella",
    price: 200000,
    description: "Bella is my favourite scooty",
};
// Defining Array of Object 
let scooty1 = [];
scooty1.push(Scooty);
scooty1.push({ name: "United Motors", price: 10000, description: "Second best scooty in Lahore." });
console.log(scooty1);
let scooty2 = [];
scooty2.push(Scooty);
scooty2.push({ name: "Yamaha", price: 15000, description: "Third best Scooty after the first two" });
console.log(scooty2);
// function to dislay scooties
function displayScooties(scooties) {
    scooties.forEach(scooty => {
        console.log(scooty.name);
        console.log(scooty.price);
        console.log(scooty.description);
    });
}
displayScooties(scooty1);
displayScooties(scooty2);
