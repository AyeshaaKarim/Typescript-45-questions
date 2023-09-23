"use strict";
// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
const magicians = ["Harry Houdini",
    "David Copperfield",
    "David Blaine",
    "Criss Angel",
    "Teller",
    "Derren Brown",
    "Ricky Jay",];
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
    return;
}
show_magicians(magicians);
