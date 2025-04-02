module.exports = (req, res, next) => {
    if (req.usuario?.perfil?.tipo !== 'Administrador') {
      return res.status(403).json({ erro: 'Acesso restrito ao administrador' });
    }
    next();
  };