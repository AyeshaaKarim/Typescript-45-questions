"use strict";
/* City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
 
"Lahore, Pakistan" */
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call your function with at least three city-country pairs, and print the value that’s returned.
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("London", "United Kingdom"));
console.log(city_country("Toronto", "Canada"));
