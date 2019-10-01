const MILLISECONDS_PER_MINUTE = 60000;

function getTimeComponents(timeStr) {
  const timeComponents = timeStr.split(':');
  const hours = parseInt(timeComponents[0], 10);
  const minutes = parseInt(timeComponents[1], 10);

  return [hours, minutes];
}

function afterMidnight(timeStr) {
  const [hours, minutes] = getTimeComponents(timeStr);
  const midnight = new Date(0, 0, 0, 0, 0);
  const time = new Date(0, 0, 0, hours, minutes);

  return Math.abs((midnight - time) / MILLISECONDS_PER_MINUTE);
}

function beforeMidnight(timeStr) {
  const [hours, minutes] = getTimeComponents(timeStr);
  const midnight =
    timeStr === '00:00' ? new Date(0, 0, 0, 0, 0) : new Date(0, 0, 0, 24, 0);
  const time = new Date(0, 0, 0, hours, minutes);

  return Math.abs((time - midnight) / MILLISECONDS_PER_MINUTE);
}


console.log(afterMidnight('00:00')); // 0
console.log(beforeMidnight('00:00')); // 0
console.log(afterMidnight('12:34')); // 754
console.log(beforeMidnight('12:34')); // 686
