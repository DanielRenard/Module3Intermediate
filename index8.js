// The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// console.log(phoneBookABC)

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F

const phoneBookDEF = new Map()

// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values

phoneBookDEF.set('Daniel', '3378675309')
phoneBookDEF.set('Edmund', '3373947450')
phoneBookDEF.set('Florian', '3375555555')

// console.log(phoneBookDEF)

// c) Update the phone number for Caroline

phoneBookABC.set('Caroline', '5555555555')

// console.log(phoneBookABC)

// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map

function printPhoneBook(contacts) {
    if (contacts = phoneBookABC) {
        return phoneBookABC
    }
    if (contacts = phoneBookDEF) {
        return phoneBookDEF
    }
}

// console.log(printPhoneBook(phoneBookABC))

// needs work. if any other value is passed through the function, it will crash.

// e) Combine the contents of the two individual Maps into a single phoneBook Map

const newPhoneBook = new Map([...phoneBookABC, ...phoneBookDEF])

// f) Print out the full list of names in the combined phone book

console.log(newPhoneBook)

// {
//     'Annabelle' => '0412312343',
//     'Barry' => '0433221117',
//     'Caroline' => '5555555555',
//     'Daniel' => '3378675309',
//     'Edmund' => '3373947450',
//     'Florian' => '3375555555'
//   }