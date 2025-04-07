const jwt = require('jsonwebtoken');
const prisma = require('../prisma/client');

const autenticar = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) return res.status(401).json({ erro: 'Token não fornecido' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const usuario = await prisma.usuario.findUnique({
      where: { id: decoded.id },
      include: { perfil: true }
    });

    if (!usuario) return res.status(401).json({ erro: 'Usuário não encontrado' });

    req.usuario = usuario;
    next();
  } catch (error) {
    res.status(401).json({ erro: 'Token inválido' });
  }
};

module.exports = autenticar;
