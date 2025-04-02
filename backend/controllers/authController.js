const prisma = require('../prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { nome, email, senha, setorId, perfilId, jornadaTrabalho } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(senha, 10);
    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha: hashedPassword,
        setorId,
        perfilId,
        jornadaTrabalho: new Date(`1970-01-01T${jornadaTrabalho}:00Z`)
      }
    });
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

const login = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const usuario = await prisma.usuario.findUnique({ 
      where: { email },
      include: {
        perfil: true,
        setores: { include: { setor: true } }
      }
    });

    if (!usuario) return res.status(404).json({ erro: 'Usuário ou Senha inválido U' });

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) return res.status(401).json({ erro: 'Usuário ou Senha inválido S' });

    const token = jwt.sign({ 
      id: usuario.id, 
      perfilId: usuario.perfilId
    }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    res.json({ 
      token,
      usuario: { 
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        perfil: usuario.perfil.tipo,
        statusSenha: usuario.statusSenha,
        setorIds: usuario.setores.map((s) => s.setorId) // útil para controlar permissões
      }
    });

  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
module.exports = { register, login };