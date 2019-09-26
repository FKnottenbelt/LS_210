const today = new Date();
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

console.log(`Today's day is ${daysOfWeek[today.getDay()]},\
the ${today.getDate()}th`);