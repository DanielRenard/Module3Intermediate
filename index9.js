//Given the below salaries object, perform the following tasks.

let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };

//a) Write a function sumSalaries(salaries) that calculates 
// and returns the total of all salaries

function sumSalaries(salaries) {
    let sum = 0;
    for (let price of Object.values(salaries)) {
        sum += price;
    }
    return sum
}

console.log(sumSalaries(salaries)) //233000

// b) Write a function topEarner(salaries) that calculates 
// and returns the name of the person earning the highest salary

function topEarner(salaries) {
    let max = 0;
    let maxKey = "";
    for(let salary in salaries){
        if(salaries[salary]> max){
            max = salaries[salary];
            maxKey = salary
        }
    }
    return maxKey
}

console.log(topEarner(salaries)) //Christina
