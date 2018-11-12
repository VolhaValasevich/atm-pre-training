// A function that returns total amount of seconds starting from the beginning of today and till now.
function getNumberOfSecondsBetweenBeginningOfTodayAndNow() {
    const now = new Date(Date.now());
    const todayBeginning = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const seconds = (Date.now() - todayBeginning.getTime()) / 1000;
    return Math.floor(seconds);
}

function main() {
    const seconds = getNumberOfSecondsBetweenBeginningOfTodayAndNow();
    console.log('Number of seconds between the beginning of today and now: ' + seconds);
}

main();