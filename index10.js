// 10.The following code uses the Date object to 
// print the current time and the number of hours
// that have passed today so far. Extend the code 
// to do the following:

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString()) 
//Current time is 1:28:19 PM
console.log(today.getHours() + ' hours have passed so far today') 
//13 hours have passed so far today

// a) Print the total number of minutes that have passed so far today

console.log(today.getHours() * 60 + today.getMinutes() + ' minutes have passed so far today')
//815 minutes have passed so far today

// b) Print the total number of seconds that have passed so far today

console.log((today.getHours() * 60) * 60 + (today.getMinutes() * 60) + today.getSeconds() + ' seconds have passed so far today')
//49064 seconds have passed so far today

// c) Calculate and print your age as: 'I am x years, y months and z days old'

console.log('I am ' + (today.getFullYear() - 1989) + ' years ' + (today.getMonth() - 3) + ' months and ' + today.getDate() + ' days old')
//I am 34 years 7 months and 2 days old

// d) Write a function daysInBetween(date1, date2) which calculates and returns the
// amount of days in between the two given dates.

function daysInBetween(date1, date2) {
    let Days = Math.round((date2.getTime() - date1.getTime())/(1000*60*60*24));
    return Days
}

console.log(daysInBetween(new Date (1991, 11, 27), new Date (2023, 11, 27)))
//11688