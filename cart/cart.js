import { clothesInventory } from '../products/data.js';
import { renderLineItems } from './render-line-items.js';
import { findById, calcLineItem } from '../utils.js';
import { getCart, clearCart } from './cart-utils.js';

const table = document.querySelector('table');

const cart = getCart();

let total = 0;

for (let cartItem of cart) {
    console.log(clothesInventory, cartItem);
    const clothing = findById(cartItem.id, clothesInventory);

    const totalForItem = calcLineItem(cartItem.quantity, clothing.price);
    total = total + totalForItem;
    const tableRowDOM = renderLineItems(cartItem, clothing);

    table.append(tableRowDOM);
}

const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');

tr.append(td1, td2);

const tFoot = document.createElement('tfoot');
const th = document.createElement('th');
const td4 = document.createElement('td');
const td5 = document.createElement('td');
th.textContent = 'Your New Closet Total:';
td5.textContent = `$${total}`;
tFoot.append(th, td4, td5);

table.append(tr, tFoot);

const button2 = document.querySelector('button');

button2.classList.add('button');
button2.textContent = 'place my order';
if (cart.length === 0) button2.disabled = 'true';

button2.addEventListener('click', () => {

    alert(JSON.stringify(cart, true, 2));
    clearCart();
    window.location.href = '../index.html';
});