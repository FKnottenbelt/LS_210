let fullNumber = 4936;

let thousandsPlace = parseInt(fullNumber / 1000, 10);
let hundredsPlace = parseInt(fullNumber % 1000 / 100, 10);
let tensPlace = parseInt(fullNumber % 1000 % 100 / 10, 10);
let oncesPlace = parseInt(fullNumber % 1000 % 100 % 10, 10);


console.log(thousandsPlace, hundredsPlace, tensPlace, oncesPlace );
