const cart = [];
const cartList = document.getElementById('cart-list');
const totalPriceElem = document.getElementById('total-price');

// Function to update cart display
function updateCartDisplay() {
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} (Catering: ${item.catering})`;
        cartList.appendChild(li);
        total += item.price;
    });

    totalPriceElem.textContent = `Total: $${total}`;
}

// Event listener for adding existing items to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const name = item.getAttribute('data-name');
        const price = parseFloat(item.getAttribute('data-price'));
        const catering = ""; // No catering options for existing items

        cart.push({ name, price, catering });
        updateCartDisplay();
    });
});

// Event listener for adding new items
document.getElementById('add-item-button').addEventListener('click', () => {
    const name = document.getElementById('new-item-name').value;
    const price = parseFloat(document.getElementById('new-item-price').value);
    const catering = document.getElementById('new-item-catering').value || "None";

    if (name && !isNaN(price)) {
        cart.push({ name, price, catering });
        updateCartDisplay();

        // Clear the input fields after adding
        document.getElementById('new-item-name').value = '';
        document.getElementById('new-item-price').value = '';
        document.getElementById('new-item-catering').value = '';
    } else {
        alert("Please enter valid item name and price.");
    }
});
