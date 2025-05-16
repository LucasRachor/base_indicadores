const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


exports.retornarJornadas = async (req, res) => {
  try {
    const jornada = await prisma.jornadaColaboradores.findMany({
      select: {
        id: true,
        dia: true,
        mes: true,
        ano: true,
        motivo: true,
        valor: true,
        criadoEm: true,
        atualizadoEm: true,
        setor: true,
        colaborador: {
          select: {
            id: true,
            nome: true,
          },
        }
      }
    })

    return res.json(jornada)

  } catch (error) {
    res.status(500).json({ message: error.message })

  }
}


exports.verificarOuCriarJornada = async (req, res) => {
  const { colaboradorId, ano, mes, dias } = req.body;

  try {
    const registrosExistentes = await prisma.jornadaColaboradores.findMany({
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

      await prisma.jornadaColaboradores.createMany({ data: novosRegistros });
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
