const now = new Date();
console.log(now);

// to generate date at specific time at 12 am
const halloween = new Date(2019, 9, 31); // day and month start counting from 0. 9 is actually 10 (oct)
console.log(halloween);

// to generate date at specific date and time
const halloweenParty = new Date(2019, 9, 31, 19, 0);
console.log(halloweenParty);

// retrive date object components.
console.log(halloweenParty.getFullYear()); // year
console.log(halloweenParty.getMonth()); // month (start with 0)
console.log(halloweenParty.getDate()); // date
console.log(halloweenParty.getDay()); // day ( 0 is sunday )
console.log(halloweenParty.getHours()); // 24 hours sytem.
console.log(halloweenParty.getMinutes());
console.log(halloweenParty.getSeconds());
console.log(halloweenParty.getMilliseconds());