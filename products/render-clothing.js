import { addToCart } from '../cart/cart-utils.js';

export function renderClothing(clothing) {
    const li = document.createElement('li');
    li.classList.add('item-list');

    const line = document.createElement('hr');
    li.append(line);

    const itemId = document.createElement('p');
    itemId.classList.add('id');
    itemId.textContent = `${clothing.id}`;
    li.append(itemId);

    const h3 = document.createElement('h3');
    h3.classList.add('name');
    h3.textContent = clothing.name;
    li.append(h3);

    const space = document.createElement('br');
    li.append(space);

    const img = document.createElement('img');
    img.classList.add('image');
    li.append(img);
    img.src = `${clothing.image}`;
    img.setAttribute('height', 300);
    img.setAttribute('width', 300);

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = `$${clothing.price}`;
    li.append(pPrice);

    const pSize = document.createElement('p');
    pSize.classList.add('size');
    pSize.textContent = `Size: ${clothing.size}`;
    li.append(pSize);

    const pDescription = document.createElement('p');
    pDescription.classList.add('description');
    pDescription.textContent = `${clothing.description}`;
    li.append(pDescription);

    const dropDown = document.createElement('select');
    dropDown.classList.add('drop-down-bar');
    li.append(dropDown);

    const quantityOne = document.createElement('option');
    quantityOne.textContent = '1';
    quantityOne.value = 1;
    dropDown.appendChild(quantityOne);
    const quantityTwo = document.createElement('option');
    quantityTwo.textContent = '2';
    quantityTwo.value = 2;
    dropDown.appendChild(quantityTwo);
    const quantityThree = document.createElement('option');
    quantityThree.textContent = '3';
    quantityThree.value = 3;
    dropDown.appendChild(quantityThree);

    const button1 = document.createElement('button');
    button1.addEventListener('click', () => {
        const numberOfItems = dropDown.value;
        addToCart(clothing.id, numberOfItems);
    });

    button1.classList.add('button-add-item');
    button1.textContent = 'mine';
    li.append(button1);

    return li;
}