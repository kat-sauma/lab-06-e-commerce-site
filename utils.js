export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function calcLineItem(quantity, price) {
    const total = quantity * price;

    return total;
}

export function calcOrderTotal(cartData, clothes) {

    let total = 0;

    for (let item of cartData) {
        const clothingItem = findById(item.id, clothes);
        const subTotal = calcLineItem(item.quantity, clothingItem.price);

        total = total + subTotal;
    }

    return `your new closet total: $${total}`;

}

