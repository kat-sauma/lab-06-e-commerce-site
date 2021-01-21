export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function calcLineItem(quantity, price) {
    const total = quantity * price;
    Math.round(price * 100) / 100;

    console.log(total);
    return total;
}