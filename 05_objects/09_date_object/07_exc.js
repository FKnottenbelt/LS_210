const today = new Date();
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
                'Sep', 'Oct', 'Nov', 'Dec']

function dateSuffix(day) {
  const stringDay = String(day);

  if (stringDay.match(/(11|12|13)$/)) return 'th';
  if (stringDay.endsWith(1)) return 'st';
  if (stringDay.endsWith(2)) return 'nd';
  if (stringDay.endsWith(3)) return 'rd';
  return stringDay + "th";
}


console.log(`Today's day is ${daysOfWeek[today.getDay()]}, \
${months[today.getMonth()]} ${dateSuffix(today.getDate())}`);