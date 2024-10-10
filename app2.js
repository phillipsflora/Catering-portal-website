// Existing imports
// Import necessary Firebase SDKs
// Function to add a product (for both admin and upload product pages)
document.getElementById('upload-product-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const productName = this[0].value;
    const productDesc = this[1].value;
    const productPrice = this[2].value;
    const productImage = this[3].value; // Get the image URL

    const newProductRef = ref(database, 'products/' + Date.now());
    set(newProductRef, {
        name: productName,
        description: productDesc,
        price: productPrice,
        image: productImage // Save image URL to database
    }).then(() => {
        document.getElementById('upload-status').innerText = 'Product uploaded successfully!';
        this.reset(); // Reset form after submission
    }).catch(error => {
        console.error('Error uploading product:', error);
        document.getElementById('upload-status').innerText = 'Error uploading product. Please try again.';
    });
});