// IMPORT MODULES under test here:
import { renderLineItems } from '../cart/render-line-items.js';
import { clothesInventory } from '../products/data.js';
import { renderClothing } from '../products/render-clothing.js';
import { calcLineItem, findById } from '../utils.js';
import { cart } from '../cart/cart-data.js';

const test = QUnit.test;

test('should take in a clothing item and return li', (expect) => {

    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="item-list"><p class="id">1</p><img class="image" src="../assets/blue-silk-top.jpg" height="200" width="200"><h3 class="name">Floral Silk Top</h3><p class="price">$60</p><p class="size">Size: Large</p><p class="description">blue silk top with a pan collar</p><button class="button">Add To Cart</button></li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderClothing(clothesInventory[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


test('findById should take in a 3 and return the Burberry Ruffle Collared Tee', (expect) => {
    const expected = {
        id: 3,
        name: 'Burberry Ruffle Collared Tee',
        image: '../assets/burberry-black-top.jpg',
        description: 'black cotton polo with a ruffled collar',
        category: 'vintage-tops',
        size: 'small',
        price: 60,
    };

    const actual = findById(3, clothesInventory);

    expect.deepEqual(actual, expected);
});


test('calcLineItem should take in 1 item for $60 and returns $60', (expect) => {
    const quantity = 1;
    const price = 60;

    const expected = 60;

    const actual = calcLineItem(quantity, price);

    expect.deepEqual(actual, expected);
});


test('should call function findById to iterate through the cart and take price and quantity from id: 1 and return the product name, quantity and price', (expect) => {

    const cartItem = findById(cart, clothesInventory);

    const expected = `<tr><th>Burberry Ruffle Collared Tee</th><th>1</h><th>$60</th></tr>`;

    //Act 
    // Call the function you're testing and set the result to a     const
    const actual = renderLineItems(cartItem, clothing);

    //Expect
    // Make assertions about what is expected versus the actual     result
    expect.equal(actual.outerHTML, expected);
});