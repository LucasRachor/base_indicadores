const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3010;

const authRoutes = require('./routes/authRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const setorRoutes = require('./routes/setorRoutes');
const perfilRoutes = require('./routes/perfilRoutes');

app.use(cors({
    origin: '*', // Para testes — libera para todos. Em produção, use o IP do frontend.
  credentials: true
}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuarioRoutes);


app.use('/api/setores', setorRoutes);
app.use('/api/perfis', perfilRoutes);

app.get('/', (req, res) => res.send('API Online'));

app.listen(port, () => {


console.log(`Servidor rodando na porta ${port}`)
criarUsuariosPadrao();

} );

const prisma = require('./prisma/client');

const criarUsuariosPadrao = async () => {
  try {
    // Verifica se o usuário master já existe
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { email: 'master@fieam.org.br' }
    });

    if (!usuarioExistente) {
      console.log('Criando usuário master...');

      await prisma.usuario.create({
        data: {
          nome: 'Usuário Master',
          email: 'master@fieam.org.br',
          senha: 'admin123', 
          statusSenha: true,
          jornadaTrabalho: new Date('1970-01-01T08:00:00Z'),
          perfil: { connect: { id: 1 } }, 
          setores: {
            create: [
              { setor: { connect: { id: 1 } } }
            ]
          }
        }
      });

      console.log('Usuário master criado com sucesso!');
    } else {
      console.log('Usuário master já existe.');
    }

  } catch (error) {
    console.error('Erro ao criar usuário master:', error);
  }
};
