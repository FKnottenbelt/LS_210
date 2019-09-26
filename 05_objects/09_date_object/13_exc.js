let today = new Date();
let nextWeek = new Date(today.getTime());

console.log(today, nextWeek);
console.log(today === nextWeek); //false

console.log(today.toDateString() === nextWeek.toDateString()); //true

console.log('plus 7:');
console.log(nextWeek);
nextWeek.setDate(today.getDate() + 7);
console.log(nextWeek);

console.log(today, nextWeek);
console.log(today.toDateString() === nextWeek.toDateString());

//////// But, but, but, but: ///////////////
console.log('jaarovergang:');
nextWeek = new Date('December 30, 2019 23:15:30');
console.log(nextWeek); // 2019-12-30T23:15:30.000Z
nextWeek.setDate(today.getDate() + 7);
console.log(nextWeek); // 2020-01-02T23:15:30.000Z oeps?

/////////// Use this /////////////////
console.log('the set approach:');
today = new Date(2019, 11, 31); // december = 11 because 0 based
let finalDate = new Date(today);
finalDate.setDate(today.getDate() + 3);

console.log(finalDate); // 3 jan 2020

//////////// Or //////////////////////
console.log('the new Date approach:');
today = new Date(2019, 11, 31);

// Getting required values
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();

// Creating a new Date (with the delta)
finalDate = new Date(year, month, day + 3);

console.log(finalDate); // 3 jan 2020
