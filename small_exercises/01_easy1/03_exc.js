const METERS_TO_FEET = 10.7639;
const rlSync = require('readline-sync');
const length = rlSync.question("Enter the length of the room in meters:\n");
const width = rlSync.question("Enter the width of the room in meters:\n");

const squareMeters = parseInt(length) * parseInt(width);

const squareFeet = squareMeters * METERS_TO_FEET;

console.log(`The area of the room is ${squareMeters} \
square meters (${squareFeet} square feet).`);
