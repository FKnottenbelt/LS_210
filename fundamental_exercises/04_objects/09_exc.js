function appendLeadingZeroes(n) {
  return (n <= 9) ? `0${n}` : n;
}

function timeOfDay(deltaMinutes) {
  var date = new Date(0, 0, 0, 0, deltaMinutes, 0, 0);

  return appendLeadingZeroes(date.getHours(), 2) + ':' +
         appendLeadingZeroes(date.getMinutes(), 2);
}

console.log(timeOfDay(0)); // "00:00"
console.log(timeOfDay(-3)); // "23:57"
console.log(timeOfDay(35)); // "00:35"
console.log(timeOfDay(-1437)); // "00:03"
console.log(timeOfDay(3000)); // "02:00"
console.log(timeOfDay(800)); // "13:20"
console.log(timeOfDay(-4231)); // "01:29"

// long form:

// function timeOfDay(deltaMinutes) {
//   const midnight = new Date(0, 0, 0, 24, 0);

//   // Getting required values
//   const year = midnight.getFullYear();
//   const month = midnight.getMonth();
//   const day = midnight.getDate();
//   const hour = midnight.getHours();
//   const minutes = midnight.getMinutes();

//   // Creating a new Date (with the delta)
//   const finalDate = new Date(year, month, day, hour, minutes + deltaMinutes);

//   // format to string
//   const numberString = `${appendLeadingZeroes(finalDate.getHours())}:`
//     + `${appendLeadingZeroes(finalDate.getMinutes())}`;

//   return numberString;
// }

