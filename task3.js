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

function main() {
    const happiness = {
        "love": 2,
        "friends": 3,
        "freedom": 1,
        "food": 5,
        "dreams": 4
    }
    const properties = sortPropertyNames(happiness);
    console.log('Property names sorted by priority: \n' + properties);
}

main();