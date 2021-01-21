import { cart } from './cart-data.js';

export function renderLineItems(cartItem, clothing) {
    const quantity = cartItem.quantity;

    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');

    nameTd.textContent = clothing.name;
    quantityTd.textContent = quantity;
    priceTd.textContent = `$${clothingTotal(cart, clothing)}`;

    tr.append(nameTd, quantityTd, priceTd);

    return tr;
}

export function clothingTotal(cartItem, clothing) {
    return cartItem.quantity * clothing.price;
}