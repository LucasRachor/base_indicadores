import React, { useEffect, useState } from 'react';

import {
  Box, Typography, Select, MenuItem, FormControl, InputLabel,
  Table, TableHead, TableRow, TableCell, TableBody, TextField,
  Dialog, DialogTitle, DialogContent, DialogActions, Button, Paper,
  Snackbar, Alert
} from '@mui/material';

import dayjs from 'dayjs';

import api from '../services/api';
import SimulacaoTabelaJornada from './SimulacaoTabelaJornada.';

const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const JornadaColaboradores = () => {
  const [ano, setAno] = useState(dayjs().year());
  const [mes, setMes] = useState(dayjs().month() + 1);
  const [usuarios, setUsuarios] = useState([]);
  const [dados, setDados] = useState([]);
  const [diaSelecionado, setDiaSelecionado] = useState(null);
  const [valorEditado, setValorEditado] = useState('');
  const [motivo, setMotivo] = useState('');
  const [notificacao, setNotificacao] = useState({ open: false, tipo: 'success', mensagem: '' });
  const diasNoMes = dayjs(`${ano}-${mes}-01`).daysInMonth();
  
  const gerarDiasFicticios = () => [...Array(diasNoMes)].map((_, i) => ({ dia: i + 1, valor: '08:00', original: '08:00' }));
  
  const buscarOuCriarJornada = async (colaboradorId) => {
    try {
      const dias = gerarDiasFicticios();
      const res = await api.post('/jornada/verificar-ou-criar', {
        colaboradorId,
        mes,
        ano,
        dias: dias.map(d => d.valor)
      });
      return res.data.dias;
    } catch (error) {
      console.error('Erro ao buscar jornada:', error);
      return gerarDiasFicticios().map(d => d.valor); // fallback
    }
  };
  
  const carregarUsuarios = async () => {
    try {
      const res = await api.get('/usuarios');
      const usuariosData = res.data;
      setUsuarios(usuariosData);
  
      const setoresRes = await api.get('/setores');
      const setoresData = setoresRes.data;
  
      const agrupado = {};
  
      for (const usuario of usuariosData) {
        for (const setorId of usuario.setorIds) {
          if (!agrupado[setorId]) agrupado[setorId] = [];
  
          const valoresJornada = await buscarOuCriarJornada(usuario.id);
  
          agrupado[setorId].push({
            id: usuario.id,
            nome: usuario.nome,
            jornada: usuario.jornadaTrabalho,
            dias: valoresJornada.map((valor, i) => ({
              dia: i + 1,
              valor,
              original: valor
            }))
          });
        }
      }
  
      const dadosFormatados = setoresData.map(setor => ({
        setor: setor.nome,
        colaboradores: agrupado[setor.id] || []
      }));
  
      setDados(dadosFormatados);
  
    } catch (err) {
      console.error(err);
      setNotificacao({ open: true, tipo: 'error', mensagem: 'Erro ao carregar dados.' });
    }
  };
  

  useEffect(() => {
    carregarUsuarios();
  }, [mes, ano]);

  const handleSalvar = () => {
    const { colaboradorId, dia } = diaSelecionado;
    api.post('/jornada/atualizar', {
      colaboradorId,
      dia,
      mes,
      ano,
      novoValor: valorEditado,
      motivo
    }).then(() => {
      setNotificacao({ open: true, tipo: 'success', mensagem: 'Alteração registrada com sucesso!' });
      setDiaSelecionado(null);
      setValorEditado('');
      setMotivo('');
      carregarUsuarios();
    }).catch(() => {
      setNotificacao({ open: true, tipo: 'error', mensagem: 'Erro ao salvar alteração' });
    });
  };

  return (
    <Box p={3}>
      <Typography variant="h5">Jornada de Trabalho por Colaborador</Typography>
      <Box display="flex" gap={2} mt={2}>
        <FormControl>
          <InputLabel>Mês</InputLabel>
          <Select value={mes} onChange={e => setMes(e.target.value)} label="Mês">
            {Array.from({ length: 12 }, (_, i) => (
              <MenuItem key={i + 1} value={i + 1}>{dayjs().month(i).format('MMMM')}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Ano</InputLabel>
          <Select value={ano} onChange={e => setAno(e.target.value)} label="Ano">
            {[2023, 2024, 2025].map(y => <MenuItem key={y} value={y}>{y}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>

      {dados.map(({ setor, colaboradores }) => (
        <Box key={setor} mt={4}>
          <Typography variant="h6">Setor: {setor}</Typography>
          <Paper sx={{ mt: 1 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Colaborador</TableCell>
                  {[...Array(diasNoMes)].map((_, i) => (
                    <TableCell key={i} align="center">
                      {i + 1}<br />
                      <Typography variant="caption">{diasSemana[dayjs(`${ano}-${mes}-${i + 1}`).day()]}</Typography>
                    </TableCell>
                  ))}
                  <TableCell align="center">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {colaboradores.map((col) => {
                  const total = col.dias.reduce((sum, d) => sum + (isNaN(d.valor) ? 0 : parseFloat(d.valor)), 0);
                  return (
                    <TableRow key={col.nome}>
                      <TableCell>{col.nome}</TableCell>
                      {col.dias.map((d, idx) => (
                        <TableCell
                          key={idx}
                          onClick={() => setDiaSelecionado({ colaboradorId: col.id, dia: idx + 1 })}
                          sx={{ cursor: 'pointer', backgroundColor: d.valor === 'F1' ? '#ffcdd2' : d.valor === 'F2' ? '#fff9c4' : d.valor === 'F3' ? '#c8e6c9' : (parseFloat(d.valor) > 8 ? '#bbdefb' : parseFloat(d.valor) < 8 ? '#ffe0b2' : 'inherit') }}
                          align="center"
                        >
                          {d.valor}
                        </TableCell>
                      ))}
                      <TableCell align="center"><b>{total.toFixed(2)}h</b></TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Paper>
        </Box>
      ))}

      <Dialog open={!!diaSelecionado} onClose={() => setDiaSelecionado(null)}>
        <DialogTitle>Alterar Jornada</DialogTitle>
        <DialogContent>
          <TextField
            label="Novo Valor (ex: 8, F1, F2, F3)"
            fullWidth
            value={valorEditado}
            onChange={(e) => setValorEditado(e.target.value)}
            margin="dense"
          />
          <TextField
            label="Motivo da Alteração"
            fullWidth
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDiaSelecionado(null)}>Cancelar</Button>
          <Button variant="contained" onClick={handleSalvar}>Salvar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={notificacao.open}
        autoHideDuration={5000}
        onClose={() => setNotificacao({ ...notificacao, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setNotificacao({ ...notificacao, open: false })} severity={notificacao.tipo} variant="filled">
          {notificacao.mensagem}
        </Alert>
      </Snackbar>
      <SimulacaoTabelaJornada></SimulacaoTabelaJornada>
    </Box>
  );
};

export default JornadaColaboradores;
