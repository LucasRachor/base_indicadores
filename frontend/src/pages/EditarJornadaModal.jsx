import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField, Typography, Box
} from '@mui/material';

const EditarJornadaModal = ({ open, onClose, onSave, diaSelecionado }) => {
  const [novoValor, setNovoValor] = useState(diaSelecionado?.valor || '');
  const [motivo, setMotivo] = useState('');
  const [historico, setHistorico] = useState([
    {
      data: '2025-04-10 14:30',
      usuario: 'Admin',
      valorAnterior: '08:00',
      novoValor: '09:00',
      motivo: 'Horas extras'
    },
    {
      data: '2025-04-12 09:15',
      usuario: 'Admin',
      valorAnterior: '09:00',
      novoValor: '08:00',
      motivo: 'Correção'
    }
  ]);

  const handleSalvar = () => {
    if (novoValor && motivo) {
      onSave({
        ...diaSelecionado,
        novoValor,
        motivo
      });
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Editar Jornada - Dia {diaSelecionado?.dia}</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          <TextField
            label="Novo Valor (ex: 08:00, F1, F2, F3)"
            value={novoValor}
            onChange={(e) => setNovoValor(e.target.value)}
            fullWidth
          />
          <TextField
            label="Motivo da Alteração"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            fullWidth
          />
          <Box mt={3}>
            <Typography variant="subtitle1">Histórico de Alterações</Typography>
            {historico.map((item, index) => (
              <Box key={index} mt={1} p={1} border={1} borderRadius={1} borderColor="grey.300">
                <Typography variant="body2"><strong>Data:</strong> {item.data}</Typography>
                <Typography variant="body2"><strong>Usuário:</strong> {item.usuario}</Typography>
                <Typography variant="body2"><strong>Valor Anterior:</strong> {item.valorAnterior}</Typography>
                <Typography variant="body2"><strong>Novo Valor:</strong> {item.novoValor}</Typography>
                <Typography variant="body2"><strong>Motivo:</strong> {item.motivo}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" onClick={handleSalvar}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditarJornadaModal;
