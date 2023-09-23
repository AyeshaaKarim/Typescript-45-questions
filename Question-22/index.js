"use strict";
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
Object.defineProperty(exports, "__esModule", { value: true });
function createFruits(name, color, taste) {
    return {
        name,
        color,
        taste,
    };
}
const fruits = [
    createFruits("Apple", "Red", "Sweet"),
    createFruits("Banana", "Yellow", "Sour"),
    createFruits("Orange", "Orange", "Sour"),
];
const invalidIndex = 10;
console.log(`Fruits Error ${invalidIndex}:`, fruits[invalidIndex]);
fruits.forEach((fruits) => {
    console.log(`Name: ${fruits.name}, Color: ${fruits.color}, Taste: ${fruits.taste}`);
});
