// user.js
document.getElementById("upload-product-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const productName = document.getElementById("product-name").value;
    const productDescription = document.getElementById("product-description").value;
    const productPrice = document.getElementById("product-price").value;

    const productId = Date.now(); // Using timestamp as a unique ID

    // Upload product
    set(ref(db, 'products/' + productId), {
        name: productName,
        description: productDescription,
        price: productPrice
    }).then(() => {
        alert("Product uploaded successfully!");
        document.getElementById("upload-product-form").reset();
        
        // Optionally, create an order for the uploaded product
        createOrder(productName, productPrice, productDescription);
    }).catch((error) => {
        console.error("Error uploading product: ", error);
    });
});

// Function to create an order
function createOrder(productName, price, description) {
    const orderId = Date.now(); // Unique order ID
    set(ref(db, 'orders/' + orderId), {
        productName: productName,
        price: price,
        description: description
    }).then(() => {
        console.log("Order created successfully!");
    }).catch((error) => {
        console.error("Error creating order: ", error);
    });
}
