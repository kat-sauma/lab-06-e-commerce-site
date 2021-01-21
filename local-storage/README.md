cart-utils.js
1) Make it so you can click on products and add them to the cart in localStorage
    1) we need a button to click 
    2) add an event listener to the button
    3) on click, we should 
        1) look at the id of the thing we clicked on.
        2) we should add/increment that item in the cart
            1) check if an item iwth this ID is already in the cart. If so increment the quantity
            2) if its not in the cart put one in there with a quantity of 1
2) load the cart from localStorage
    1) grab the cart from localStorage, and store it in a variable
    2) replace our hard-coded cart with that variable