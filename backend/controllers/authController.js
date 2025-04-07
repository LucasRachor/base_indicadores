const jwt = require('jsonwebtoken');
const prisma = require('../prisma/client');
const ActiveDirectory = require('activedirectory2');

const config = {
  url: 'ldap://fieam.com.br',
  baseDN: 'DC=fieam,DC=com,DC=br',
  username: 'ldap',
  password: 'admin@H3rcul35'
};
const ad = new ActiveDirectory(config);

// ------------------ REGISTER ------------------
const register = async (req, res) => {
  const { nome, email, senha, perfilId, jornadaTrabalho } = req.body;

  try {
    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha, // sem hash
        statusSenha: true,
        jornadaTrabalho: new Date(`1970-01-01T${jornadaTrabalho}`),
        perfil: { connect: { id: perfilId } }
      }
    });

    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ------------------ LOGIN ------------------
const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Usuário e senha são obrigatórios' });
  }

  // 1º: tenta autenticar com LDAP
  ad.authenticate(username, password, async (err, auth) => {
    if (err || !auth) {
      console.warn('LDAP falhou, tentando fallback...');

      try {
        const usuario = await prisma.usuario.findUnique({
          where: { email: username },
          include: {
            perfil: true,
            setores: { include: { setor: true } }
          }
        });

        if (!usuario || usuario.senha !== password) {
          return res.status(401).json({ message: 'Usuário ou senha inválidos' });
        }

        const token = jwt.sign({
          id: usuario.id,
          perfilId: usuario.perfilId
        }, process.env.JWT_SECRET, { expiresIn: '1d' });

        return res.json({
          token,
          usuario: {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            perfil: usuario.perfil.tipo,
            statusSenha: usuario.statusSenha,
            setorIds: usuario.setores.map(s => s.setorId)
          }
        });

      } catch (error) {
        return res.status(500).json({ message: 'Erro no login master', erro: error.message });
      }

    } else {
      console.log('Usuário autenticado via LDAP');

      try {
        let usuario = await prisma.usuario.findUnique({ where: { email: username } });

        if (!usuario) {
          usuario = await prisma.usuario.create({
            data: {
              nome: username,
              email: username,
              senha: password,
              statusSenha: true,
              perfil: { connect: { id: 4 } }, // Usuário_Visualização por padrão
              jornadaTrabalho: new Date('1970-01-01T08:00:00Z')
            }
          });
        }

        const token = jwt.sign({
          id: usuario.id,
          perfilId: usuario.perfilId
        }, process.env.JWT_SECRET, { expiresIn: '1d' });

        return res.json({
          token,
          usuario: {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            perfil: usuario.perfil?.tipo || 'Usuário_Visualização',
            statusSenha: usuario.statusSenha,
            setorIds: []
          }
        });
      } catch (error) {
        return res.status(500).json({ message: 'Erro no login LDAP', erro: error.message });
      }
    }
  });
};

module.exports = { login, register };
