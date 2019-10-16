const DEGREE_SYMBOL = '\xB0';
const MINUTE_SYMBOL = "'";
const SECONDS_SYMBOL = '"';

function padZeroes(n) {
  return (n <= 9) ? `0${n}` : n;
}

function dms(angle) {                                         //76.73
  let result = '';
  const degree = Math.floor(angle);                           // 76

  const minutesFull = angle - degree;                         // 0.73
  const minutes = Math.floor((angle - degree) * 60);          // 43.8 -> 43

  const secondsFull = minutesFull * 60;                       // 43.8
  const seconds = Math.floor((secondsFull - minutes) * 60);   // 48

  result += `${degree}${DEGREE_SYMBOL}`;
  result += `${padZeroes(minutes)}${MINUTE_SYMBOL}`;
  result += `${padZeroes(seconds)}${SECONDS_SYMBOL}`;

  return result;

}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
