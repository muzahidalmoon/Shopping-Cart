/* ui.js */
const cart_view = document.querySelector('.view-cart');
const cart_modal = document.querySelector('.cart-modal-overlay');
const cart_close = document.querySelector('.close-cart');

cart_view.addEventListener('click', (e) => {
    updateCartUI();
    cart_modal.classList.toggle('show');
});

cart_close.addEventListener('click', (e) => {
    cart_modal.classList.remove('show');
});


function updateCartUI() {
    const cartContainer = document.getElementById("cart");
    const totalPriceElement = document.getElementById("total-price");
    cartContainer.innerHTML = "";
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" width="100">
                <h4>${item.name}</h4>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: $${(item.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
                <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        `;
    });
    totalPriceElement.innerText = totalPrice.toFixed(2);
}


function removeFromCart(productId) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem.quantity > 1) {
        cartItem.quantity--;
        total--;
        localStorage.setItem("cart_total", total);
        cart_total.innerHTML = localStorage.getItem("cart_total");
    } else {
        cart_total.innerHTML = 0;
        cart = cart.filter(item => item.id !== productId);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}

function clearCart() {
    const clearCart = document.getElementById("clear-cart");
    clearCart.addEventListener("click", () => {
        cart = [];
        localStorage.removeItem("cart");
        localStorage.removeItem("cart_total");
        cart_total.innerHTML = 0;
        updateCartUI();
    });
}



function checkOut() {
    const checkOut = document.getElementById("checkout");
    console.log(localStorage.getItem("cart"));
    if (localStorage.getItem("cart") === null) {
        alert("Your cart is empty!");
    }
    else {
        cart = [];
        localStorage.removeItem("cart");
        localStorage.removeItem("cart_total");
        cart_total.innerHTML = 0;
        updateCartUI();
        alert("Thank you for shopping with us!");
}
}