// // 1. Create a function that takes a string as a 
// // parameter and returns the string with the first 
// // character of each word changed into a capital letter, 
// // as in the example below. Test it with different strings.

// create function
// take a string as a parameter (also called arguements)
// return string, with first char changed to capital
// test it with different strings

// find in the string where there is a space
// split into substring

function ucFirstLetters(str) {
   return str.toLowerCase().split(' ').map(function(word) {
         return word[0].toUpperCase() + word.substr(1);
       })
       .join(' ');
    }

// map() creates a new array from calling a function for every array element.
// join() method returns an array as a string.

console.log(ucFirstLetters("los angeles")) //Los Angeles
console.log(ucFirstLetters("new orleans")) //New Orleans
console.log(ucFirstLetters("baton rouge")) //Baton Rouge
console.log(ucFirstLetters("butter milk biscuits")) // Butter Milk Biscuits