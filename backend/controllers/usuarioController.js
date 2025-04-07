const prisma = require('../prisma/client');
const bcrypt = require('bcrypt');

// Listar usuários com setores e perfil
const listar = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany({
      include: {
        setores: { include: { setor: true } },
        perfil: true
      }
    });

    const formatado = usuarios.map((u) => ({
      id: u.id,
      nome: u.nome,
      email: u.email,
      statusSenha: u.statusSenha,
      perfilId: u.perfilId,
      perfil: u.perfil?.nome, 
      jornadaTrabalho: u.jornadaTrabalho.toISOString().slice(11, 16),
      setorIds: u.setores.map((s) => s.setorId)
    }));

    res.json(formatado);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao listar usuários' });
  }
};

const criar = async (req, res) => {
  const { nome, email, senha, jornadaTrabalho, statusSenha, perfilId, setorIds } = req.body;

  try {
    const novo = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha, // salva diretamente em texto
        statusSenha,
        jornadaTrabalho: new Date(`1970-01-01T${jornadaTrabalho}`),
        perfil: { connect: { id: perfilId } },
        setores: {
          create: setorIds.map((id) => ({
            setor: { connect: { id } }
          }))
        }
      },
      include: {
        setores: true
      }
    });

    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};


// Editar usuário e atualizar setores
const editar = async (req, res) => {
  const { nome, email, senha, jornadaTrabalho, statusSenha, perfilId, setorIds } = req.body;
  const { id } = req.params;

  try {
    const hash = senha ? await bcrypt.hash(senha, 10) : undefined;

    // Remove setores antigos
    await prisma.usuarioSetor.deleteMany({ where: { usuarioId: Number(id) } });

    // Atualiza usuário e recria vínculo com setores
    const atualizado = await prisma.usuario.update({
      where: { id: Number(id) },
      data: {
        nome,
        email,
        jornadaTrabalho: new Date(`1970-01-01T${jornadaTrabalho}`),
        statusSenha,
        perfil: { connect: { id: perfilId } },
        ...(senha && { senha: hash, statusSenha: true }),
        setores: {
          create: setorIds.map((id) => ({
            setor: { connect: { id } }
          }))
        }
      },
      include: {
        setores: true
      }
    });

    res.json(atualizado);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

const resetarSenha = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.usuario.update({
      where: { id: Number(id) },
      data: {
        statusSenha: false
      }
    });
    res.json({ mensagem: 'Senha resetada com sucesso' });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};
module.exports = { listar, criar, editar, resetarSenha };
