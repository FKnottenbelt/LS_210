function dateSuffix(day) {
  const stringDay = String(day);

  if (stringDay.match(/(11|12|13)$/)) return 'th';
  if (stringDay.endsWith(1)) return 'st';
  if (stringDay.endsWith(2)) return 'nd';
  if (stringDay.endsWith(3)) return 'rd';
  return stringDay + 'th';
}

function formattedMonth(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
                  'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDay(date) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  const day = formattedDay(date);
  const month = formattedMonth(date);

  console.log(`Today's day is ${day}, ${month} ${dateSuffix(date.getDate())}`);
}

const today = new Date();
formattedDate(today);
