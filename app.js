const express = require('express');
const app = express();

// Configuración
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Rutas
const groupsRouter = require('./routes/groups');

app.get('/', (req, res) => {
    res.redirect('/groups/')
});
app.use('/groups', groupsRouter);

// Servidor
app.listen(3000, () => { console.log('Servidor funcionando en el puerto 3000.') })