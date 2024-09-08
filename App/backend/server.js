const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Configuración del body-parser para manejar los datos de los formularios
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Servir archivos estáticos del front-end
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Endpoint para manejar inicio de sesión
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'usuario' && password === '1234') {
        res.json({ success: true, message: "Inicio de sesión exitoso" });
    } else {
        res.json({ success: false, message: "Usuario o contraseña incorrectos" });
    }
});

// Endpoint para manejar la solicitud de pago
app.post('/api/payment', (req, res) => {
    const { amount, description } = req.body;
    if (amount > 0) {
        res.json({ success: true, message: `Pago de $${amount} procesado correctamente` });
    } else {
        res.json({ success: false, message: "Monto inválido" });
    }
});

// Escuchar en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
