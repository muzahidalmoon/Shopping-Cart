/* products.js */
const featchProducts = async () => {
    const response = await fetch('products.json');
    const products = await response.json();
    displayProducts(products);
}

function displayProducts(products) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="100%">
            <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productList.appendChild(productElement);
    });
}

featchProducts();