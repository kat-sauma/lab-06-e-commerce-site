const CART = 'CART';
const defaultEmptyCart = [];
import { findById } from '../utils.js';



export function setCart(cart) {
    const stringyCart = JSON.stringify(cart);

    localStorage.setItem(CART, stringyCart);
}

export function getCart() {
    const stringyCart = localStorage.getItem(CART);
    console.log('stringyCart', stringyCart);
    if (stringyCart) {
        const parsedCart = JSON.parse(stringyCart);

        return parsedCart;
    } else {
        const stringyDefaultCart = JSON.stringify(defaultEmptyCart);
        localStorage.setItem(CART, stringyDefaultCart);
        return defaultEmptyCart;
    }
}

export function addToCart(id) {
    const cart = getCart();
    const cartItem = findById(id, cart);
    console.log('cart', cart);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        const newItem = {
            id: id,
            quantity: 1
        };
        cart.push(newItem);
    }
    setCart(cart);
}

