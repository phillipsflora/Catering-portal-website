let cart = [];

// Fetch products from Firestore
function fetchProducts() {
    const productList = document.getElementById('productList');
    db.collection('products').get().then((snapshot) => {
        snapshot.forEach(doc => {
            const product = doc.data();
            productList.innerHTML += 
                <div>
                    <h3>`${product.name}`</h3>
                    <p>`${product.description}`</p>
                    <p>Price: `$${product.price}`</p>
                    <button onclick="addToCart(`${doc.id}`)">Add to Cart</button>
                </div>
            ;
        });
    });
}

// Add to cart function
function addToCart(productId) {
    db.collection('products').doc(productId).get().then((doc) => {
        const product = doc.data();
        cart.push(product);
        alert(`${product.name} added to cart!`);
    });
}

// View orders (to be implemented)
function viewOrders() {
    const ordersDiv = document.getElementById('orders');
    // Fetch user's orders from Firestore (if implemented)
}

// View cart
function viewCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach(product => {
        cartDiv.innerHTML += 
            <div>
                <h3>`${product.name}`</h3>
                <p>Price: `$${product.price}`</p>
            </div>
        ;
    });
}

// Event Listeners
document.getElementById('viewOrdersBtn').addEventListener('click', viewOrders);
document.getElementById('viewCartBtn').addEventListener('click', viewCart);

// Initial fetch of products
fetchProducts();