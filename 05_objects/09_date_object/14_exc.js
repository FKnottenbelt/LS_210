function appendLeadingZeroes(n){
  if(n <= 9){
    return "0" + n;
  }
  return n;
}

function formatTime(date) {
  return appendLeadingZeroes(date.getHours()) + ':' +
         appendLeadingZeroes(date.getMinutes());
}

let today = new Date('December 30, 2019 23:05:03');
console.log(formatTime(today));

// alternative:
// https://reactgo.com/format-date-time-javascript/

const options = {
       hour12 : false,
       hour:  "2-digit",
       minute: "2-digit",
    };

today = new Date('December 30, 2019 23:05:03');

console.log(today.toLocaleTimeString("en-US",options));
console.log(today.toLocaleTimeString("UTC",options));
console.log(today.toLocaleTimeString("nl",options));