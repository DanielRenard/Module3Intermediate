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

// function camelCase(cssProp) {
//     if (cssProp.includes('-')) {
//         let wordsArray = cssProp.split('-'); console.log(wordsArray)
//         wordsArray[1] = wordsArray[1].charAt(0).toUpperCase() + wordsArray[1].slice(1);
//         return wordsArray.join('')
//     }
//     else return cssProp
// }

function camelCaseA(cssProp) {
    let wordsArray = cssProp.split('-');
    for (let i = 1; i < wordsArray.length; i = i + 1) {
        wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
    }
    return wordsArray.join('')
}

console.log(camelCaseA("jack-nimble-foot")) //jackNimbleFoot
console.log(camelCaseA('skittles')) // skittles


// console.log(camelCase('margin-left')) // marginLeft
// console.log(camelCase('background-image')) // backgroundImage
// console.log(camelCase('display')) // display

//b) Create variants of the camelCase function that 
//use different types of "for" loops, and 

// function forLoopEx (cssProp) {
//    myArray = ['a',  'b', 'c']
//    for (let i = 0; i < myArray.length; i = i + 1){
//     console.log(i); console.log(myArray[i])
//    }
//    console.log('-----')  

//    for (index in myArray){
//     console.log(index); console.log(myArray[index])
//    }
//    console.log('-----')  
//    let myString = ''
//    myArray.forEach(function(item){
//     myString = myString + item
//    })
//    console.log(myString)
// }

// console.log('------for loop example')
// console.log(forLoopEx())

function camelCaseB(cssProp) {
    let wordsArray = cssProp.split('-');
    for (index in wordsArray)
    {
       let nextIndex = parseInt(index) + 1
        if (nextIndex < wordsArray.length) {
            wordsArray[nextIndex] = wordsArray[nextIndex].charAt(0).toUpperCase() + wordsArray[nextIndex].slice(1)
        }
    }
    return wordsArray.join('')
}

console.log(camelCaseB("jack-nimble-foot")) //jackNimbleFoot
console.log(camelCaseB('skittles')) // skittles

//c) with and without the conditional operator.

function camelCaseC(cssProp) {
    let wordsArray = cssProp.split('-');
    for (index in wordsArray)
    {
       let nextIndex = parseInt(index) + 1
        wordsArray[nextIndex] = (nextIndex < wordsArray.length) ? wordsArray[nextIndex].charAt(0).toUpperCase() + wordsArray[nextIndex].slice(1) : ''
    }
    return wordsArray.join('')
}

console.log('------part c') //------part c
console.log(camelCaseC("jack-nimble-foot")) //jackNimbleFoot
console.log(camelCaseC('skittles')) // skittles