//Use the following animals array for the below tasks. 
//Test each one by printing the result to the console. 
//Review the following link for tips:

//https://developer.mozilla.org/en-
//US/docs/Web/JavaScript/Reference/Global_Objects/Array

//a) Add 2 new values to the end
//b) Add 2 new values to the beginning
//c) Sort the values alphabetically
//d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
//middle of the animals array with newValue
//e) Write a function findMatchingAnimals(beginsWith) that returns a new array
//containing all the animals that begin with the beginsWith string. Try to make it work
//regardless of upper/lower case.

const animals = ['Tiger', 'Giraffe']
//a)
animals.push('Donkey', 'Monkey') 
//console.log(animals)
//[ 'Tiger', 'Giraffe', 'Donkey', 'Monkey' ]

//b)
animals.unshift('Mastodon', 'Sabre-tooth Tiger')
//console.log(animals)
//[
//     'Donkey',
//     'Giraffe',
//     'Mastodon',
//     'Monkey',
//     'Sabre-toothed Tiger',
//     'Tiger'
//   ]

//c)
animals.sort() 
//console.log(animals)
//[
//     'Donkey',
//     'Giraffe',
//     'Mastadon',
//     'Monkey',
//     'Sabretooth Tiger',
//     'Tiger'
//   ]

//d)
function replaceMiddleAnimal(newValue) {
    animals.splice(3, 1, newValue)
}
replaceMiddleAnimal('T-Rex')
// console.log(animals)
// [
//     'Donkey',
//     'Giraffe',
//     'Mastodon',
//     'T-Rex',
//     'Sabre-tooth Tiger',
//     'Tiger'
//   ]

//e)
//write function
//return new array
//contain values that begin with beginsWith string
//make work for upper/lower case

function findMatchingAnimals (beginsWith) {
    animals.push('toads');
    const firstArray = animals.filter((animal) => animal.startsWith(beginsWith));
    const secondArray = animals.filter((animal) => animal.startsWith(beginsWith.toLowerCase()));
    toString(firstArray, secondArray);
    let newArray = []; 
    newArray.push(firstArray + ',' + secondArray);
    // newArray = firstArray + ',' + secondArray;
    
    console.log(newArray);
}

findMatchingAnimals('T')
// [ 'T-Rex,Tiger,toads' ]