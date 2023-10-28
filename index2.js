// // 2. Create a function truncate(str, max) that 
// // truncates a given string of text if its total
// // length is greater than the max length. It should 
// // return either the truncated text, with an 
// // ellipsis (...) added to the end if it was too long, 
// // or the original text otherwise.
// // b) Write another variant of the truncate function 
// // that uses a conditional operator.

// Create function
// truncate string if its total length is greater than max length
// return truncated text w/ellipsis or original text otherwise
// write another function w/conditional operator 

// function truncate(str, max) {
//     if (str.length > max) {
//     return str.substring(0, 25) + '...'
//     } else {return str}
// }

// console.log(truncate('This text will be truncated if it is too long', 25))
// // This text will be truncat...

function truncate(str, max) {
    if (str.length > max) {
    return str ? str.substring(0, 25) + '...' : str
    }
}

console.log(truncate('This text will be truncated if it is too long', 25))
// // This text will be truncat...