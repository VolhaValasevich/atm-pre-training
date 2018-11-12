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

function main() {
    const array = [];
    const multiply = getMultiplyOfThreeGreatestValues(array);
    console.log('Multiply of three greatest values from the array: ' + multiply);
}

main();