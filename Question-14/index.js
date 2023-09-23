"use strict";
/* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner */
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestlist = void 0;
let guestlist = [
    "Ayesha Karim",
    "Ayesha Sheikh",
    "Arslan Ahmad",
    "Zainub Karim",
    "Fatima Nadeem"
];
exports.guestlist = guestlist;
guestlist.forEach((guestName) => {
    console.log(`Dear ${guestName}, you are invited to dinner. Would you like to please join us this evening with your presence? We will be waiting for you.`);
});
