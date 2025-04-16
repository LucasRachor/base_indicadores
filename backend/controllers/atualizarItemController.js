const prisma = require('../prisma/client');

const atualizarValoresItem = async (req, res) => {
  try {
    const { itemId, setorId, ano, mes, valorFieam, valorSesi, valorSenai, valorIel, totalGeral, estrategia } = req.body;

    const historicoExistente = await prisma.historico.findFirst({
      where: {
        itemId: Number(itemId),
        setorId: Number(setorId),
        ano: Number(ano),
        mes: mes
      }
    });

    let novoHistorico;

    if (historicoExistente) {
      let novosValores = {
        valorFieam: Number(valorFieam),
        valorSesi: Number(valorSesi),
        valorSenai: Number(valorSenai),
        valorIel: Number(valorIel),
        totalGeral: Number(totalGeral),
      };

      if (estrategia === 'somar') {
        novosValores = {
          valorFieam: historicoExistente.valorFieam + Number(valorFieam),
          valorSesi: historicoExistente.valorSesi + Number(valorSesi),
          valorSenai: historicoExistente.valorSenai + Number(valorSenai),
          valorIel: historicoExistente.valorIel + Number(valorIel),
          totalGeral: historicoExistente.totalGeral + Number(totalGeral)
        };
      } else if (estrategia === 'media') {
        novosValores = {
          valorFieam: (historicoExistente.valorFieam + Number(valorFieam)) / 2,
          valorSesi: (historicoExistente.valorSesi + Number(valorSesi)) / 2,
          valorSenai: (historicoExistente.valorSenai + Number(valorSenai)) / 2,
          valorIel: (historicoExistente.valorIel + Number(valorIel)) / 2,
          totalGeral: (historicoExistente.totalGeral + Number(totalGeral)) / 2
        };
      }

      novoHistorico = await prisma.historico.update({
        where: { id: historicoExistente.id },
        data: {
          ...novosValores,
          dataAlteracao: new Date()
        }
      });

    } else {
      novoHistorico = await prisma.historico.create({
        data: {
          itemId: Number(itemId),
          setorId: Number(setorId),
          ano: Number(ano),
          mes: mes,
          valorFieam: Number(valorFieam),
          valorSesi: Number(valorSesi),
          valorSenai: Number(valorSenai),
          valorIel: Number(valorIel),
          totalGeral: Number(totalGeral),
          usuarioId: req.usuario.id,
        }
      });
    }

    res.status(200).json({ message: 'Histórico atualizado com sucesso.', historico: novoHistorico });
  } catch (error) {
    console.error('Erro ao atualizar item:', error);
    res.status(500).json({ error: 'Erro ao atualizar valores do item.' });
  }
};

module.exports = { atualizarValoresItem };
