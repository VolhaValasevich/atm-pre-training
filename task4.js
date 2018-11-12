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
    addWithDelay(1, 2, 3, 4, 5).then((sum) => {
        console.log('Sum of the arguments: ' + sum);
    })
}

main();