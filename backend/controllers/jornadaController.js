const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.verificarOuCriarJornada = async (req, res) => {
  const { colaboradorId, ano, mes, dias } = req.body;

  try {
    const registrosExistentes = await prisma.jornada_colaboradores.findMany({
      where: { colaborador_id: colaboradorId, ano, mes }
    });

    if (registrosExistentes.length === 0) {
      const novosRegistros = dias.map((valor, idx) => ({
        colaborador_id: colaboradorId,
        ano,
        mes,
        dia: idx + 1,
        valor
      }));

      await prisma.jornada_colaboradores.createMany({ data: novosRegistros });
    }
    const registros = await prisma.jornada_colaboradores.findMany({
      where: { colaborador_id: colaboradorId, ano, mes },
      orderBy: { dia: 'asc' }
    });
    res.json({
      colaboradorId,
      dias: registros.map(r => r.valor)
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao verificar/criar jornada' });
  }
};
