import { clothesInventory } from './data.js';
import { renderClothing } from './render-clothing.js';


const itemList = document.getElementById('item-list');


// for (let i = 0; i < clothesInventory.length; i++) {
//     const clothingItem = clothesInventory[i];

// }
for (let clothing of clothesInventory) {
    const clothingItem = renderClothing(clothing);

    itemList.append(clothingItem);
}