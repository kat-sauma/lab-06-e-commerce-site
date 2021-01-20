export function renderClothing(clothing) {
    const li = document.createElement('li');
    li.classList.add('item-list');

    const itemId = document.createElement('p');
    itemId.classList.add('item-id');
    itemId.textContent = `ID: ${clothing.id}`;
    li.append(itemId);

    const img = document.createElement('img');
    img.classList.add('image');
    li.append(img);
    img.src = `${clothing.image}`;
    img.setAttribute('height', 200);
    img.setAttribute('width', 200);

    const h3 = document.createElement('h3');
    h3.classList.add('name');
    h3.textContent = clothing.name;
    li.append(h3);

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

    const button1 = document.createElement('button');
    button1.classList.add('button');
    button1.textContent = 'Add To Cart';
    li.append(button1);

    return li;
}