let orders = [];

// Function to add an order
function addOrder() {
    const productName = document.getElementById('product-name').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    // Validation
    if (productName === '' || quantity === '' || price === '') {
        alert('Please fill out all fields');
        return;
    }

    // Create new order object
    const newOrder = {
        orderId: new Date().getTime(),  // Unique ID
        product: productName,
        quantity: quantity,
        price:` ${price}`,
        
    };

    // Add order to array
    orders.push(newOrder);

    // Clear form inputs
    document.getElementById('product-name').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('price').value = '';

    // Display updated orders
    displayOrders();
}

// Function to display orders
function displayOrders() {
    const ordersContainer = document.getElementById('orders-container');
    ordersContainer.innerHTML = ''; // Clear previous orders

    orders.forEach(order => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <p><strong>Order ID:</strong> ${order.orderId}</p>
            <p><strong>Product:</strong> ${order.product}</p>
            <p><strong>Quantity:</strong> ${order.quantity}</p>
            <p><strong>Price:</strong> ${order.price}</p>
            <p><strong>Status:</strong> ${order.status}</p>
            <p><strong>Order Date:</strong> ${order.date}</p>
        `;
        ordersContainer.appendChild(orderItem);
    });
}
