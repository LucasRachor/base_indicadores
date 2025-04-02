const prisma = require('../prisma/client');

const listar = async (req, res) => {
  const setores = await prisma.setor.findMany();
  res.json(setores);
};

const criar = async (req, res) => {
  const { nome, descricao, tipo } = req.body;
  try {
    const novo = await prisma.setor.create({
      data: { nome, descricao, tipo }
    });
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

const editar = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, tipo } = req.body;
  try {
    const atualizado = await prisma.setor.update({
      where: { id: Number(id) },
      data: { nome, descricao, tipo }
    });
    res.json(atualizado);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

const excluir = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.setor.delete({ where: { id: Number(id) } });
    res.json({ mensagem: 'Setor excluído com sucesso' });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

module.exports = { listar, criar, editar, excluir };
