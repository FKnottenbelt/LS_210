const today = new Date();
console.log(today.getTime()); //1569477465069

const tomorrow = new Date(today.getTime());
console.log(tomorrow); // 2019-09-26T06:01:03.440Z

let nextWeek = today;

console.log(nextWeek === today); //true

nextWeek = new Date(today.getTime());

console.log(today === nextWeek); //false