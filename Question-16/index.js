"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Step 1: Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
let guestlist = [
    "Ayesha Karim",
    "Ayesha Sheikh",
    "Arslan Ahmad",
    "Zainub Karim",
    "Fatima Nadeem"
];
for (let guest of guestlist) {
    console.log(`Hey ${guest}, we have found a bigger dinner table.`);
}
;
// Step 2: Add one new guest to the beginning of your array.
let newGuest = "Sehrish Khan";
guestlist.unshift(newGuest);
console.log(guestlist);
// Step 3: Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
let newGuestInMiddle = "Noor Mehmood";
let middle = Math.floor(guestlist.length / 2);
guestlist.splice(middle, 0, newGuestInMiddle);
console.log(guestlist);
let newGuestAtEnd = "Najma Karim";
guestlist.push(newGuestAtEnd);
console.log(guestlist);
for (let guest of guestlist) {
    console.log(`Hello ${guest}, you are invited at the dinner tomorrow. Please come and bless us with your presence.`);
}
;
