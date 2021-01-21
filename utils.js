export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function calcLineItem(quantity, price) {
    console.log('helloooo', quantity, price);
    const total = quantity * price;

    console.log(total, 'total');
    return total;
}