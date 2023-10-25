// // 1. Create a function that takes a string as a 
// // parameter and returns the string with the first 
// // character of each word changed into a capital letter, 
// // as in the example below. Test it with different strings.

function ucFirstLetters(str) {
     return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
     });
}

console.log(ucFirstLetters("los angeles")) //Los Angeles