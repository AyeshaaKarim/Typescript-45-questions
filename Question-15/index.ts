/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */


let guestlist: Array<String> = [

    "Ayesha Karim" , 
    "Ayesha Sheikh" , 
    "Arslan Ahmad" , 
    "Zainub Karim" , 
    "Fatima Nadeem"
];

// Step 1 // 

let guestwhocantmakeit: string = "Arslan Ahmad"
console.log(`${guestwhocantmakeit} can't make it to the dinner tonight.`);

// Step 2 // 

let newguestname: String = "Hamza Abid"
let indexofguestwhocantmakeit: number = guestlist.indexOf(guestwhocantmakeit)
console.log(guestwhocantmakeit);

if (indexofguestwhocantmakeit !== -1) {
guestlist[indexofguestwhocantmakeit] = newguestname
}
console.log(guestlist);

// Step 3 //

guestlist.forEach((guests) => 
{console.log(`Dear ${guests}, you are invited to dinner. Would you like to please join us?` )});

