/* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner */

let guestlist: Array<String> = [

    "Ayesha Karim" , 
    "Ayesha Sheikh" , 
    "Arslan Ahmad" , 
    "Zainub Karim" , 
    "Fatima Nadeem"
];

guestlist.forEach((guestName) => {
    console.log(`Dear ${guestName}, you are invited to dinner. Would you like to please join us this evening with your presence? We will be waiting for you.`)
});

export{guestlist};

