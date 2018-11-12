
// A function that fulfills array with 10 random integer values
function fillArrayWithRandomNumbers(array) {
    for (let i = 0; i < 10; i++) {
        let number = Math.floor(Math.random() * 10);
        array.push(number);
    }
    return array;
}

// A function that fulfills array with 10 random integer values and returns a multiply of 3 greatest values. 
function getMultiplyOfThreeGreatestValues(array) {
    let multiply = 1;
    array = fillArrayWithRandomNumbers(array);
    array.sort((a, b) => {
        return b - a;
    })
    for(let i = 0; i < 3; i++) {
        multiply *= array[i];
    }
    return multiply;
}

// A function that returns total amount of seconds starting from the beginning of today and till now.
function getNumberOfSecondsBetweenBeginningOfTodayAndNow() {
    const now = new Date(Date.now());
    const todayBeginning = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const seconds = (Date.now() - todayBeginning.getTime()) / 1000;
    return Math.floor(seconds);
}

// A function that returns a list of property names sorted by priority (highest is on top).
function sortPropertyNames(object) {
    let list = '';
    const keys = Object.keys(object);
    keys.sort((a, b) => {
        return object[a] - object[b];
    })
    keys.forEach((property) => {
        list += `${property}\n`;
    })
    return list;
}

// A function that returns a sum of args with a 1000ms delay if all of them are positive numbers and rejects a promise if there's a negative
function addWithDelay(...args) {
    return new Promise((resolve, reject) => {
        let sum = 0;
        args.forEach((arg) => {
            if (arg < 0) {
                reject('Error! Some parameter is a negative number!');
            }
            sum += arg;
        })
        setTimeout(() => {
            resolve(sum);
        }, 1000);
    })
}

function main() {
    const happiness = {
        "love": 2,
        "friends": 3,
        "freedom": 1,
        "food": 5,
        "dreams": 4
    }
    const array = [];
    const multiply = getMultiplyOfThreeGreatestValues(array);
    const seconds = getNumberOfSecondsBetweenBeginningOfTodayAndNow();
    const properties = sortPropertyNames(happiness);
    console.log('Multiply of three greatest values from the array: ' + multiply);
    console.log('Number of seconds between the beginning of today and now: ' + seconds);
    console.log('Property names sorted by priority: \n' + properties);
    addWithDelay(1, 2, 3, 4, 5).then((sum) => {
        console.log('Sum of the arguments: ' + sum);
    })
}

main();