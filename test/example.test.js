// IMPORT MODULES under test here:
import { renderLineItems } from '../cart/render-line-items.js';
import { clothesInventory } from '../products/data.js';
import { renderClothing } from '../products/render-clothing.js';
import { calcLineItem, calcOrderTotal, findById } from '../utils.js';
import { getCart, clearCart, setCart } from '../cart/cart-utils.js';

const test = QUnit.test;

test('should take in a clothing item and return li', (expect) => {

    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="item-list"><hr><p class="id">1</p><h3 class="name">Floral Silk Top</h3><br><img class="image" src="../assets/blue-silk-top.jpg" height="300" width="300"><p class="price">$60</p><p class="size">Size: Large</p><p class="description">blue silk top with a pan collar</p><select class="drop-down-bar"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select><button class="button-add-item">mine</button></li>`;

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


test('renderLineItems function should call function findById to iterate through the cart and take price and quantity from id: 1 and return the product name, quantity and price', (expect) => {

    const cartItem = {
        id: 3,
        quantity: 1,
        price: 60.00,
    };

    const denimVest = findById(cartItem.id, clothesInventory);

    const expected = `<tr><td>Burberry Ruffle Collared Tee</td><td>1</td><td>$60</td></tr>`;

    const actual = renderLineItems(cartItem, denimVest);

    expect.equal(actual.outerHTML, expected);
});

test('calcOrderTotal function should add all line items together to create on Total for whole', (expect) => {

    const cartData = [{
        id: 1,
        quantity: 1,
        price: 60.00
    },
    {
        id: 2,
        quantity: 1,
        price: 45.00,
    },
    {
        id: 3,
        quantity: 1,
        price: 60.00,
    }];

    const clothesData = [{
        id: 1,
        name: 'Floral Silk Top',
        image: '../assets/blue-silk-top.jpg',
        description: 'blue silk top with a pan collar',
        category: 'vintage-tops',
        size: 'Large',
        price: 60.00
    },
    {
        id: 2,
        name: 'Denim Vest',
        image: '../assets/denim-vest-velvet-collar.jpg',
        description: 'denim vest with a black suede collar',
        category: 'vintage-tops',
        size: 'medium',
        price: 45.00
    },
    {
        id: 3,
        name: 'Burberry Ruffle Collared Tee',
        image: '../assets/burberry-black-top.jpg',
        description: 'black cotton polo with a ruffled collar',
        category: 'vintage-tops',
        size: 'small',
        price: 60.00
    }];

    const expected = `your new closet total: $165`;

    const actual = calcOrderTotal(cartData, clothesData);

    expect.equal(actual, expected);
});

test('getCart should select the correct cart from local storage', (expect) => {
    const testCart = [
        {
            id: 3,
            quantity: 2
        },
        {
            id: 4,
            quantity: 1
        },
    ];
    const stringyCart = JSON.stringify(testCart);

    localStorage.setItem('CART', stringyCart);

    const cart = getCart();

    expect.deepEqual(cart, testCart);
});

test('clearCart should set the cart from local storage to zero after purchase order is made', (expect) => {

    const expected = [];

    clearCart();

    const actual = getCart();

    expect.deepEqual(actual, expected);
});

test('setCart should send/set the correct quantity and price of an order to the cart in local storage', (expect) => {
    const testCart = [
        {
            id: 3,
            quantity: 2
        }
    ];
    const stringyCart = JSON.stringify(testCart);
    const expected = localStorage.setItem('CART', stringyCart);

    const actual = setCart(testCart);

    expect.deepEqual(actual, expected);
});