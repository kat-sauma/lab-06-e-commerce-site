const CART = 'CART';
const defaultEmptyCart = [];
import { findById } from './utils.js';

export function getCart() {
    const stringyCart = localStorage.getItem(CART);

    if (stringyCart) {
        const parsedCart = JSON.stringify(defaultEmptyCart);

        return parsedCart;
    } else {
        const stringyDefaultCart = JSON.stringify(defaultEmptyCart);
        localStorage.setItem(CART, stringyDefaultCart);
        return defaultEmptyCart;
    }
}

