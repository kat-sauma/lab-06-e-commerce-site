import { cart } from './cart-data.js';
import { clothesInventory } from '../products/data.js';
import { renderLineItems } from './render-line-items.js';
import { findById, calcLineItem } from '../utils.js';

const table = document.querySelector('table');

let total = 0;

for (let cartItem of cart) {
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