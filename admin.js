// admin.js

import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const db = getFirestore();

// Admin registration
document.getElementById("register-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    // Implement registration logic
});

// Admin login
document.getElementById("login-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    // Implement login logic
});

// Fetch and display products
async function loadProducts() {
    const products = await getDocs(collection(db, "products"));
    const productList = document.getElementById("product-list");
    productList.innerHTML = ''; // Clear previous entries
    products.forEach((doc) => {
        const product = doc.data();
        productList.innerHTML += `<div>${product.name} - $${product.price}</div>`;
    });
}

loadProducts();
