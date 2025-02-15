/* cart.js */
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cart_total = document.querySelector('.cart-total');
let total = 0;
cart_total.innerHTML = localStorage.getItem("cart_total") || 0;
function addToCart(productId) {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id === productId);
            const cartItem = cart.find(item => item.id === productId);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            total = 0;
            cart.forEach(item => {
                total += item.quantity;
            });
            localStorage.setItem("cart_total", total);
            cart_total.innerHTML = localStorage.getItem("cart_total");
            updateCartUI();
        });
}

