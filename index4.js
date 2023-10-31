//Write a function camelCase(cssProp) that changes
//dash-separated CSS properties like 'margin-left' 
//into camel-cased 'marginLeft'. The function should 
//remove all dashes, and uppercase the first letter 
//of each word after a dash.

//Write function
//remove all dashes
//capitalize first letter after dash

//if string contains -:
//split into two strings
//remove -
//capitalize first letter of first string
//combine the two strings
//else return string

// function camelCase(cssProp) {
//     // splits = cssProp.indexOf('-');
//     // string1 = cssProp.slice(0, splits);
//     // string2 = cssProp.slice(splits + 1);
//     // newString = string1 + string2;
//     // return newString
// }
//doesn't work when a string is w/o "-"


function camelCase(cssProp) {
    if (cssProp.includes('-')) {
        let newString = cssProp.split('-');
        newString[1] = newString[1].charAt(0).toUpperCase() + newString[1].slice(1);
        return newString.join('')
    }
    else return cssProp
}

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

//b) Create variants of the camelCase function that 
//use different types of "for" loops, and 
//c) with and without the conditional operator.