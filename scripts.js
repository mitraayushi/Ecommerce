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
     // Billing form submission handling
     const billingForm = document.querySelector('.billing-form');
     if (billingForm) {
         billingForm.addEventListener('submit', (event) => {
             event.preventDefault();
 
             // Collect form data
             const formData = new FormData(billingForm);
             const billingData = {};
             formData.forEach((value, key) => {
                 billingData[key] = value;
             });
 
             // Display form data in console (for demonstration)
             console.log('Billing Data:', billingData);
 
             // Reset form after submission
             billingForm.reset();
 
             // Redirect to a confirmation page or display a success message
             alert('Payment successful! Thank you for your purchase.');
             window.location.href = 'index.html'; // Redirect to home page
         });
     }
});
