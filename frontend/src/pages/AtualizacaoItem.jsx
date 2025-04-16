import React, { useEffect, useState } from 'react';
import {
  Box, Typography, TextField, Button, MenuItem, Grid, Paper, RadioGroup, FormControlLabel, Radio
} from '@mui/material';
import api from '../services/api';


const AtualizacaoItem = () => {
  const [setores, setSetores] = useState([]);
  const [itens, setItens] = useState([]);
  const [form, setForm] = useState({
    itemId: '',
    setorId: '',
    ano: new Date().getFullYear(),
    mes: '',
    valorFieam: '',
    valorSesi: '',
    valorSenai: '',
    valorIel: '',
    totalGeral: 0,
    estrategia: 'manter'
  });

  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const anos = [2025, 2024, 2023, 2022];
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resSetores = await api.get('/setores', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setSetores(resSetores.data);

        const resItens = await api.get('/itens', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setItens(resItens.data);
      } catch (err) {
        console.error('Erro ao buscar dados', err);
      }
    };
    fetchData();
  }, [token]);

  useEffect(() => {
    const fieam = parseFloat(form.valorFieam) || 0;
    const sesi = parseFloat(form.valorSesi) || 0;
    const senai = parseFloat(form.valorSenai) || 0;
    const iel = parseFloat(form.valorIel) || 0;
    setForm((prev) => ({ ...prev, totalGeral: fieam + sesi + senai + iel }));
  }, [form.valorFieam, form.valorSesi, form.valorSenai, form.valorIel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
 
  const handleSubmit = async () => {
    try {
      await api.put(`/atualizar-item/${form.itemId}`, form, {
        headers: { Authorization: `Bearer ${token}` }
    
      });
      alert('Item atualizado com sucesso');
    } catch (error) {
      console.error('Erro ao atualizar item:', error);
    }
  };

  return (
    <Box p={3}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={2}>Atualização de Item</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField select label="Item" name="itemId" fullWidth value={form.itemId} onChange={handleChange}>
              {itens.map((item) => (
                <MenuItem key={item.id} value={item.id}>{item.nome}</MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField select label="Setor" name="setorId" fullWidth value={form.setorId} onChange={handleChange}>
              {setores.map((setor) => (
                <MenuItem key={setor.id} value={setor.id}>{setor.nome}</MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6} sm={3}>
            <TextField select label="Ano" name="ano" fullWidth value={form.ano} onChange={handleChange}>
              {anos.map((ano) => (
                <MenuItem key={ano} value={ano}>{ano}</MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6} sm={3}>
            <TextField select label="Mês" name="mes" fullWidth value={form.mes} onChange={handleChange}>
              {meses.map((mes) => (
                <MenuItem key={mes} value={mes}>{mes}</MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField label="Valor FIEAM" name="valorFieam" type="number" fullWidth value={form.valorFieam} onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField label="Valor SESI" name="valorSesi" type="number" fullWidth value={form.valorSesi} onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField label="Valor SENAI" name="valorSenai" type="number" fullWidth value={form.valorSenai} onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField label="Valor IEL" name="valorIel" type="number" fullWidth value={form.valorIel} onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField label="Total Geral" name="totalGeral" type="number" fullWidth value={form.totalGeral} disabled />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>Estratégia de Atualização</Typography>
            <RadioGroup row name="estrategia" value={form.estrategia} onChange={handleChange}>
              <FormControlLabel value="somar" control={<Radio />} label="Somar com valor existente" />
              <FormControlLabel value="media" control={<Radio />} label="Média com valor existente" />
              <FormControlLabel value="manter" control={<Radio />} label="Manter o último valor" />
            </RadioGroup>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Button variant="contained" onClick={handleSubmit}>Cadastrar</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AtualizacaoItem;
