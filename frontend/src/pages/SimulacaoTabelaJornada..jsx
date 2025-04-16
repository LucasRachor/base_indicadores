// SimulacaoTabelaJornada.jsx
import React, { useState } from 'react';
import {
  Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Paper
} from '@mui/material';
import EditarJornadaModal from './EditarJornadaModal';

const diasSemana = ['T', 'Q', 'Q', 'S', 'S', 'D', 'S']; // Simplified

const diasDoMes = Array.from({ length: 30 }, (_, i) => ({
  dia: i + 1,
  semana: diasSemana[i % 7],
}));

const colaboradores = [
  {
    nome: 'João',
    dias: [
      '08:00', '08:00', '08:00', '08:00', '08:00', 'FDS', 'FDS',
      '08:00', '08:00', '08:00', '08:00', '08:00', 'FDS', 'FDS',
      '08:00', '09:00', 'Feriado', '12:00', 'FDS', 'FDS',
      'FE', 'FE', 'f2', 'f2', 'f2', 'f2', 'FDS', '04:00', '08:00', '08:00'
    ],
    total: '117:00:00'
  },
  {
    nome: 'Rebeca',
    dias: [
      '08:00', '08:00', '08:00', '08:00', '08:00', 'FDS', 'FDS',
      '08:00', '08:00', '08:00', '08:00', '08:00', 'FDS', 'FDS',
      '08:00', '09:00', 'Feriado', '12:00', 'FDS', 'FDS',
      'FE', 'FE', 'f2', 'f2', 'f2', 'f2', 'FDS', '08:00', '08:00', '08:00'
    ],
    total: '121:00:00'
  },
  {
    nome: 'Carlos',
    dias: Array(30).fill('08:00'),
    total: '240:00:00'
  },
  {
    nome: 'Ana',
    dias: Array(30).fill('07:30'),
    total: '225:00:00'
  },
  {
    nome: 'Pedro',
    dias: Array(30).fill('09:00'),
    total: '270:00:00'
  }
];

const SimulacaoTabelaJornada = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [colaboradorSelecionado, setColaboradorSelecionado] = useState(null);
  const [diaSelecionado, setDiaSelecionado] = useState(null);

  const handleCellClick = (colaborador, diaIndex) => {
    setColaboradorSelecionado(colaborador);
    setDiaSelecionado(diaIndex);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setColaboradorSelecionado(null);
    setDiaSelecionado(null);
  };

  return (
    <Box p={3}>
      <Typography variant="h6" gutterBottom>
        Setor: Comercial — Mês: Abril — Ano: 2025
      </Typography>

      <Paper sx={{ overflowX: 'auto' }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell rowSpan={2}>Funcionário</TableCell>
              {diasDoMes.map((dia, index) => (
                <TableCell key={index} align="center">{dia.dia}</TableCell>
              ))}
              <TableCell rowSpan={2} align="center">Total</TableCell>
            </TableRow>
            <TableRow>
              {diasDoMes.map((dia, index) => (
                <TableCell key={index} align="center">
                  <Typography variant="caption">{dia.semana}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {colaboradores.map((colab, idx) => (
              <TableRow key={idx}>
                <TableCell>{colab.nome}</TableCell>
                {colab.dias.map((d, i) => (
                  <TableCell
                    key={i}
                    align="center"
                    onClick={() => handleCellClick(colab, i)}
                    sx={{ cursor: 'pointer' }}
                  >
                    {d}
                  </TableCell>
                ))}
                <TableCell align="center"><b>{colab.total}</b></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {modalOpen && (
        <EditarJornadaModal
          open={modalOpen}
          onClose={handleCloseModal}
          colaborador={colaboradorSelecionado}
          diaIndex={diaSelecionado}
        />
      )}
    </Box>
  );
};
export default SimulacaoTabelaJornada;
