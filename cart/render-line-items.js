import { calcLineItem } from '../utils.js';

export function renderLineItems(cartItem, clothing) {
    const quantity = cartItem.quantity;
    const price = clothing.price;

    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = clothing.name;

    const quantityTd = document.createElement('td');
    quantityTd.textContent = quantity;

    const priceTd = document.createElement('td');
    priceTd.textContent = `$${calcLineItem(quantity, price)}`;

    tr.append(nameTd, quantityTd, priceTd);

    return tr;
}