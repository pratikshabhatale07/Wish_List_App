// // JavaScript code for the wishlist app

// document.addEventListener('DOMContentLoaded', () => {
//     const wishlistForm = document.getElementById('wishlist-form');
//     const wishlistInput = document.getElementById('wishlist-input');
//     const wishlistContainer = document.getElementById('wishlist-container');

//     wishlistForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const itemText = wishlistInput.value.trim();
//         if (itemText) {
//             addItemToWishlist(itemText);
//             wishlistInput.value = '';
//         }
//     });

//     function addItemToWishlist(item) {
//         const itemElement = document.createElement('div');
//         itemElement.classList.add('wishlist-item');
//         itemElement.textContent = item;

//         const removeButton = document.createElement('button');
//         removeButton.textContent = 'Remove';
//         removeButton.classList.add('remove-button');
//         removeButton.addEventListener('click', () => {
//             wishlistContainer.removeChild(itemElement);
//         });

//         itemElement.appendChild(removeButton);
//         wishlistContainer.appendChild(itemElement);
//     }
// });

// JavaScript code for the wishlist app

document.addEventListener('DOMContentLoaded', () => {
    const wishlistInput = document.getElementById('item-input');
    const addButton = document.getElementById('add-button');
    const wishlistContainer = document.getElementById('wishlist');

    addButton.addEventListener('click', () => {
        const itemText = wishlistInput.value.trim();
        if (itemText) {
            addItemToWishlist(itemText);
            wishlistInput.value = '';
        }
    });

    function addItemToWishlist(item) {
        const itemElement = document.createElement('li');
        itemElement.classList.add('wishlist-item');
        itemElement.textContent = item;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', () => {
            wishlistContainer.removeChild(itemElement);
        });

        itemElement.appendChild(removeButton);
        wishlistContainer.appendChild(itemElement);
    }
});