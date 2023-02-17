// choose a random item
function choice (items) {
    return items[Math.floor(Math.random()*items.length)]
}

// returns copy of array w/o first appearance of item, if not found, return undefined
function remove (items, item) {
    let index = items.findIndex((element) => element === item);
    if (index > -1) return items.filter((ele, idx) => idx !== index);  //items.splice(index, 1);
}

export {choice, remove}