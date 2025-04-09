const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3010;

const prisma = require('./prisma/client'); // ✅ precisa vir ANTES de usar o prisma

// Importação das rotas
const authRoutes = require('./routes/authRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const setorRoutes = require('./routes/setorRoutes');
const perfilRoutes = require('./routes/perfilRoutes');
const itensRouter = require('./routes/itens');

// Middlewares
app.use(cors({
  origin: '*',
  credentials: true
}));
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/setores', setorRoutes);
app.use('/api/perfis', perfilRoutes);
app.use('/api/itens', itensRouter);

app.get('/', (req, res) => res.send('API Online'));

// Inicializa o servidor
app.listen(port, async () => {
  console.log(`Servidor rodando na porta ${port}`);
  await criarUsuariosPadrao(); // ✅ executa após iniciar o servidor
});

// Função para criar perfil + usuário master
const criarUsuariosPadrao = async () => {
  try {
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { email: 'master@fieam.org.br' }
    });

    if (!usuarioExistente) {
      console.log('Criando usuário master...');

      // Garante que o perfil exista
      await prisma.perfil.upsert({
        where: { id: 1 },
        update: {},
        create: {
          id: 1,
          nome: 'Administrador',
          detalhes: 'Perfil com acesso total',
          tipo: 'admin'
        }
      });

      // Garante que o setor exista
      await prisma.setor.upsert({
        where: { id: 1 },
        update: {},
        create: {
          id: 1,
          nome: 'Setor Padrão',
          descricao: 'Setor para o usuário master',
          tipo: 'Administrador'
        }
      });

      // Cria o usuário master
      await prisma.usuario.create({
        data: {
          nome: 'Usuário Master',
          email: 'master@fieam.org.br',
          senha: 'admin123',
          statusSenha: true,
          jornadaTrabalho: new Date('1970-01-01T08:00:00.000Z'),
          perfil: { connect: { id: 1 } },
          usuarioSetores: {
            create: [
              {
                setor: { connect: { id: 1 } }
              }
            ]
          }
        }
      });

      console.log('Usuário master criado com sucesso!');
    }
  } catch (error) {
    console.error('Erro ao criar usuário master:', error);
  }
};
