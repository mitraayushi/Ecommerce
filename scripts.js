document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const cartItems = document.querySelector('.cart-items');
    const totalElement = document.getElementById('total');
    const buyButton = document.querySelector('.buy-button');
    let total = 0;

    products.forEach(product => {
        product.querySelector('button').addEventListener('click', () => {
            const productName = product.querySelector('h2').innerText;
            const productPrice = parseFloat(product.querySelector('p').innerText.replace('$', ''));
            addToCart(productName, productPrice);
        });
    });

    function addToCart(name, price) {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `<span>${name}</span><span>$${price.toFixed(2)}</span>`;
        cartItems.appendChild(cartItem);
        updateTotal(price);
    }

    function updateTotal(price) {
        total += price;
        totalElement.innerText = total.toFixed(2);
    }
    buyButton.addEventListener('click', () => {
        window.location.href = 'billing.html';
    });
});
