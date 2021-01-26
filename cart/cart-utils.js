const CART = 'CART';
const defaultEmptyCart = [];
import { findById } from '../utils.js';



export function setCart(cart) {
    const stringyCart = JSON.stringify(cart);

    localStorage.setItem(CART, stringyCart);
}

export function getCart() {
    const stringyCart = localStorage.getItem(CART);

    if (stringyCart) {
        const parsedCart = JSON.parse(stringyCart);

        return parsedCart;
    } else {
        const stringyDefaultCart = JSON.stringify(defaultEmptyCart);
        localStorage.setItem(CART, stringyDefaultCart);
        return defaultEmptyCart;
    }
}

export function clearCart() {
    const stringyDefaultCart = JSON.stringify(defaultEmptyCart);
    localStorage.setItem(CART, stringyDefaultCart);
}

export function addToCart(id, amount) {
    const cart = getCart();
    const cartItem = findById(id, cart);

    if (cartItem) {
        cartItem.quantity += Number(amount);
    } else {
        const newItem = {
            id: id,
            quantity: Number(amount)
        };
        cart.push(newItem);
    }
    setCart(cart);
}

