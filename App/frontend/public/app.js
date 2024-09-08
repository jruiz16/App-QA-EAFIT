document.addEventListener("DOMContentLoaded", function() {
    // Manejar inicio de sesión
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('loginMessage').textContent = data.message;
                if (data.success) {
                    window.location.href = 'payment.html';
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }

    // Manejar solicitud de pago
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const amount = document.getElementById('amount').value;
            const description = document.getElementById('description').value;

            fetch('/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ amount, description })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('paymentMessage').textContent = data.message;
            })
            .catch(error => console.error('Error:', error));
        });
    }
});
