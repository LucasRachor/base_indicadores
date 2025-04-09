const prisma = require('../prisma/client');

const cadastrarItem = async (req, res) => {
  try {
    const { nome, detalhes, setorId, ano, instituicoes } = req.body;

    // 1. Cadastrar item
    const novoItem = await prisma.item.create({
      data: {
        nome,
        detalhes,
        setor_id: setorId,
        ano,
      },
    });

    // 2. Cadastrar instituições se não existirem
    const instituicoesSalvas = [];
    for (const nomeInst of instituicoes) {
      const inst = await prisma.instituicao.upsert({
        where: { nome: nomeInst },
        update: {},
        create: { nome: nomeInst },
      });
      instituicoesSalvas.push(inst);
    }

    // 3. Cadastrar os 12 meses para cada instituição com valor 0
    const registrosValorItem = [];
    for (const inst of instituicoesSalvas) {
      for (let mes = 1; mes <= 12; mes++) {
        registrosValorItem.push({
          item_id: novoItem.id,
          instituicao_id: inst.id,
          mes,
          valor: 0,
        });
      }
    }

    await prisma.valor_item.createMany({
      data: registrosValorItem,
    });

    res.status(201).json({ message: 'Item e valores cadastrados com sucesso.' });
  } catch (error) {
    console.error('Erro ao cadastrar item:', error);
    res.status(500).json({ error: 'Erro ao cadastrar item.' });
  }
};

const listarItens = async (req, res) => {
  try {
    const itens = await prisma.item.findMany({
      include: {
        setor: true,
      },
      orderBy: {
        id: 'desc',
      },
    });

    res.json(itens);
  } catch (error) {
    console.error('Erro ao listar itens:', error);
    res.status(500).json({ error: 'Erro ao listar itens.' });
  }
};

const buscarItemPorId = async (req, res) => {
  try {
    const item = await prisma.item.findUnique({
      where: { id: parseInt(req.params.id) },
    });

    if (!item) return res.status(404).json({ error: 'Item não encontrado.' });

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar item.' });
  }
};

const atualizarItem = async (req, res) => {
  try {
    const { nome, detalhes, setorId, ano } = req.body;

    await prisma.item.update({
      where: { id: parseInt(req.params.id) },
      data: { nome, detalhes, setor_id: setorId, ano },
    });

    res.json({ message: 'Item atualizado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar item.' });
  }
};

const excluirItem = async (req, res) => {
  try {
    const itemId = parseInt(req.params.id);

    // Apagar registros de valor_item primeiro
    await prisma.valor_item.deleteMany({
      where: { item_id: itemId },
    });

    await prisma.item.delete({
      where: { id: itemId },
    });

    res.json({ message: 'Item e valores excluídos com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir item.' });
  }
};

module.exports = {
  cadastrarItem,
  listarItens,
  buscarItemPorId,
  atualizarItem,
  excluirItem,
};
