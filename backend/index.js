const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3010;

const authRoutes = require('./routes/authRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const setorRoutes = require('./routes/setorRoutes');
const perfilRoutes = require('./routes/perfilRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuarioRoutes);


app.use('/api/setores', setorRoutes);
app.use('/api/perfis', perfilRoutes);

app.get('/', (req, res) => res.send('API Online'));

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));