// Getting the current date and time
const now = Temporal.Now.plainDateTimeISO();
console.log(now.toString());

// Adding one month to the current date
const nextMonth = now.add({ months: 1 });
console.log(nextMonth.toString());
